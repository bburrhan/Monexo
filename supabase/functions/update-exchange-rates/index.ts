import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DueMarketPair {
  base: string;
  quote: string;
}

interface DueMarketData {
  pair: DueMarketPair;
  rate: number;
  markupBps: number;
  updatedAt: string;
}

interface DueSingleRate {
  pair: DueMarketPair;
  rate: number;
  markupBps: number;
  updatedAt: string;
}

const DUE_API_BASE = "https://api.due.network/fx";

const SOURCE_CURRENCIES = ["USD", "AED", "SAR", "EUR", "GBP"];
const TARGET_CURRENCIES = ["PHP", "PKR", "INR", "BDT", "IDR", "VND"];

async function fetchAllMarkets(): Promise<Map<string, number>> {
  const response = await fetch(`${DUE_API_BASE}/markets`, {
    method: "GET",
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Due /markets returned status ${response.status}`);
  }

  const data: DueMarketData[] = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No data received from Due /markets");
  }

  const rateMap = new Map<string, number>();
  for (const market of data) {
    if (market.pair?.base && market.pair?.quote && market.rate > 0) {
      rateMap.set(`${market.pair.base}/${market.pair.quote}`, market.rate);
    }
  }

  return rateMap;
}

async function fetchSingleRate(base: string, quote: string): Promise<number | null> {
  try {
    const response = await fetch(`${DUE_API_BASE}/markets/${base}/${quote}`, {
      method: "GET",
      headers: { accept: "application/json" },
    });

    if (!response.ok) return null;

    const data: DueSingleRate = await response.json();
    if (data?.rate > 0) return data.rate;

    return null;
  } catch {
    return null;
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log("Starting exchange rate update from Due FX API (api.due.network)...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const bulkRates = await fetchAllMarkets();
    console.log(`Received ${bulkRates.size} pairs from /markets`);

    const ratesToUpdate: { pair: string; rate: number }[] = [];
    const missingPairs: { base: string; quote: string }[] = [];

    for (const source of SOURCE_CURRENCIES) {
      for (const target of TARGET_CURRENCIES) {
        const key = `${source}/${target}`;
        const reverseKey = `${target}/${source}`;

        if (bulkRates.has(key)) {
          ratesToUpdate.push({ pair: key, rate: bulkRates.get(key)! });
        } else if (bulkRates.has(reverseKey)) {
          ratesToUpdate.push({ pair: key, rate: 1 / bulkRates.get(reverseKey)! });
        } else {
          missingPairs.push({ base: source, quote: target });
        }
      }
    }

    if (missingPairs.length > 0) {
      console.log(`Fetching ${missingPairs.length} cross-rates via single-pair endpoint...`);

      const results = await Promise.allSettled(
        missingPairs.map(async ({ base, quote }) => {
          const rate = await fetchSingleRate(base, quote);
          if (rate) {
            return { pair: `${base}/${quote}`, rate };
          }
          return null;
        })
      );

      for (const result of results) {
        if (result.status === "fulfilled" && result.value) {
          ratesToUpdate.push(result.value);
        }
      }
    }

    console.log(`Found ${ratesToUpdate.length} rates out of ${SOURCE_CURRENCIES.length * TARGET_CURRENCIES.length} expected`);

    if (ratesToUpdate.length === 0) {
      throw new Error("No valid rates found to update");
    }

    const updates = ratesToUpdate.map((item) => ({
      pair: item.pair,
      rate: item.rate,
      source: "due_api",
      updated_at: new Date().toISOString(),
    }));

    const { error: upsertError } = await supabase
      .from("exchange_rates")
      .upsert(updates, { onConflict: "pair" });

    if (upsertError) {
      console.error("Database upsert error:", upsertError);
      throw new Error(`Failed to update database: ${upsertError.message}`);
    }

    console.log(`Successfully updated ${ratesToUpdate.length} exchange rates`);

    return new Response(
      JSON.stringify({
        success: true,
        updated: ratesToUpdate.length,
        timestamp: new Date().toISOString(),
        rates: ratesToUpdate,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error updating exchange rates:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
