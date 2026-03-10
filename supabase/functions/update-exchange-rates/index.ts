import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DueQuoteResponse {
  currencyIn: string;
  currencyOut: string;
  amountIn: string;
  amountOut: string;
  rate: number;
  markupBps: number;
  createdAt: string;
}

const DUE_QUOTE_URL = "https://api.due.network/fx/quote";

const SOURCE_CURRENCIES = ["USD", "AED", "SAR", "EUR", "GBP"];
const TARGET_CURRENCIES = ["PHP", "PKR", "INR", "BDT", "IDR", "VND"];

async function fetchQuoteRate(currencyIn: string, currencyOut: string): Promise<number | null> {
  try {
    const response = await fetch(DUE_QUOTE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({ currencyIn, currencyOut, amountIn: "1" }),
    });

    if (!response.ok) {
      console.warn(`Quote API returned ${response.status} for ${currencyIn}/${currencyOut}`);
      return null;
    }

    const data: DueQuoteResponse = await response.json();
    const amountOut = parseFloat(data.amountOut);

    if (isNaN(amountOut) || amountOut <= 0) return null;

    return amountOut;
  } catch (err) {
    console.warn(`Failed to fetch quote for ${currencyIn}/${currencyOut}:`, err);
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
    console.log("Starting exchange rate update from Due FX Quote API...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const pairs: { source: string; target: string }[] = [];
    for (const source of SOURCE_CURRENCIES) {
      for (const target of TARGET_CURRENCIES) {
        pairs.push({ source, target });
      }
    }

    console.log(`Fetching ${pairs.length} quote rates in parallel...`);

    const results = await Promise.allSettled(
      pairs.map(async ({ source, target }) => {
        const rate = await fetchQuoteRate(source, target);
        if (rate !== null) {
          return { pair: `${source}/${target}`, rate };
        }
        return null;
      })
    );

    const ratesToUpdate: { pair: string; rate: number }[] = [];
    for (const result of results) {
      if (result.status === "fulfilled" && result.value) {
        ratesToUpdate.push(result.value);
      }
    }

    console.log(`Received ${ratesToUpdate.length} valid rates out of ${pairs.length} requested`);

    if (ratesToUpdate.length === 0) {
      throw new Error("No valid rates received from Quote API");
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

    console.log(`Successfully updated ${ratesToUpdate.length} exchange rates via Quote API`);

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
