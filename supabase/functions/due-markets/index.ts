import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ExchangeRate {
  pair: string;
  rate: number;
  source?: string;
  updated_at?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    console.log("Fetching exchange rates from database...");

    const { data: dbRates, error: dbError } = await supabase
      .from('exchange_rates')
      .select('pair, rate, source, updated_at')
      .order('updated_at', { ascending: false });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to fetch rates from database: ${dbError.message}`);
    }

    if (!dbRates || dbRates.length === 0) {
      throw new Error("No exchange rates found in database");
    }

    console.log(`Retrieved ${dbRates.length} exchange rates from database`);

    const now = new Date();
    const mostRecentUpdate = dbRates.length > 0 ? new Date(dbRates[0].updated_at) : null;
    const hoursSinceUpdate = mostRecentUpdate
      ? (now.getTime() - mostRecentUpdate.getTime()) / (1000 * 60 * 60)
      : 999;

    console.log(`Most recent rate update: ${mostRecentUpdate?.toISOString()}, ${hoursSinceUpdate.toFixed(1)} hours ago`);

    const exchangeRates: ExchangeRate[] = dbRates.map(rate => ({
      pair: rate.pair,
      rate: parseFloat(rate.rate.toString()),
    }));

    return new Response(
      JSON.stringify({
        rates: exchangeRates,
        metadata: {
          lastUpdated: mostRecentUpdate?.toISOString(),
          hoursSinceUpdate: parseFloat(hoursSinceUpdate.toFixed(2)),
          source: dbRates[0]?.source || 'unknown',
          totalPairs: exchangeRates.length,
        }
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error fetching exchange rates:', error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error',
        rates: [],
        metadata: {
          lastUpdated: null,
          hoursSinceUpdate: null,
          source: 'error',
          totalPairs: 0,
        }
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