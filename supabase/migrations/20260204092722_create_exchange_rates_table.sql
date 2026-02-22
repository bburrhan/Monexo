/*
  # Create Exchange Rates Table

  1. New Tables
    - `exchange_rates`
      - `id` (uuid, primary key) - Unique identifier for each rate record
      - `pair` (text, unique, not null) - Currency pair in format "USD/PHP", "AED/PKR", etc.
      - `rate` (numeric, not null) - Exchange rate value
      - `source` (text, not null) - Source of the rate: "due_api" or "fallback"
      - `updated_at` (timestamptz, not null) - Last update timestamp
      - `created_at` (timestamptz, not null) - Record creation timestamp
  
  2. Security
    - Enable RLS on `exchange_rates` table
    - Add policy for public read access (anyone can view rates)
    - No write access for public users (only edge functions can write)
  
  3. Indexes
    - Unique index on `pair` column for fast lookups
    - Index on `updated_at` for checking rate freshness
  
  4. Important Notes
    - This table stores exchange rates from Due FX Markets API
    - Rates are updated every 12 hours via cron job
    - Serves as both cache and fallback when API is unavailable
    - Supports 5 source currencies (USD, AED, SAR, EUR, GBP)
    - Supports 6 destination currencies (PHP, PKR, INR, BDT, IDR, VND)
*/

-- Create the exchange_rates table
CREATE TABLE IF NOT EXISTS exchange_rates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pair text UNIQUE NOT NULL,
  rate numeric NOT NULL CHECK (rate > 0),
  source text NOT NULL DEFAULT 'fallback' CHECK (source IN ('due_api', 'fallback')),
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create index on updated_at for efficient freshness checks
CREATE INDEX IF NOT EXISTS idx_exchange_rates_updated_at ON exchange_rates(updated_at DESC);

-- Create index on pair for fast lookups (already created by UNIQUE constraint, but being explicit)
CREATE INDEX IF NOT EXISTS idx_exchange_rates_pair ON exchange_rates(pair);

-- Enable Row Level Security
ALTER TABLE exchange_rates ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read exchange rates (public data)
CREATE POLICY "Anyone can view exchange rates"
  ON exchange_rates
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only service role can insert/update rates (edge functions)
CREATE POLICY "Service role can insert rates"
  ON exchange_rates
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update rates"
  ON exchange_rates
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add comment to table
COMMENT ON TABLE exchange_rates IS 'Stores exchange rates from Due FX Markets API, updated every 12 hours via cron job';