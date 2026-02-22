/*
  # Seed Initial Exchange Rates

  1. Purpose
    - Populate exchange_rates table with initial fallback rates
    - Ensures application has rates available immediately
    - These will be replaced by live API data on first cron run
  
  2. Data Inserted
    - 30 currency pairs total:
      * 5 source currencies: USD, AED, SAR, EUR, GBP
      * 6 destination currencies: PHP, PKR, INR, BDT, IDR, VND
    - All rates marked as source='fallback'
    - Timestamps set to encourage immediate update
  
  3. Notes
    - Rates are approximate market rates as of seeding
    - Will be replaced by live Due FX Markets API data
    - Uses INSERT ... ON CONFLICT to avoid duplicate errors on re-run
*/

-- Insert initial exchange rates for all supported currency pairs
INSERT INTO exchange_rates (pair, rate, source, updated_at, created_at) VALUES
  -- Philippines (PHP)
  ('USD/PHP', 57.32, 'fallback', now() - interval '24 hours', now()),
  ('AED/PHP', 15.58, 'fallback', now() - interval '24 hours', now()),
  ('SAR/PHP', 15.26, 'fallback', now() - interval '24 hours', now()),
  ('EUR/PHP', 62.50, 'fallback', now() - interval '24 hours', now()),
  ('GBP/PHP', 72.80, 'fallback', now() - interval '24 hours', now()),
  
  -- Pakistan (PKR)
  ('USD/PKR', 278.50, 'fallback', now() - interval '24 hours', now()),
  ('AED/PKR', 75.20, 'fallback', now() - interval '24 hours', now()),
  ('SAR/PKR', 73.50, 'fallback', now() - interval '24 hours', now()),
  ('EUR/PKR', 305.00, 'fallback', now() - interval '24 hours', now()),
  ('GBP/PKR', 355.00, 'fallback', now() - interval '24 hours', now()),
  
  -- India (INR)
  ('USD/INR', 84.50, 'fallback', now() - interval '24 hours', now()),
  ('AED/INR', 22.85, 'fallback', now() - interval '24 hours', now()),
  ('SAR/INR', 22.35, 'fallback', now() - interval '24 hours', now()),
  ('EUR/INR', 93.00, 'fallback', now() - interval '24 hours', now()),
  ('GBP/INR', 108.50, 'fallback', now() - interval '24 hours', now()),
  
  -- Bangladesh (BDT)
  ('USD/BDT', 120.00, 'fallback', now() - interval '24 hours', now()),
  ('AED/BDT', 32.45, 'fallback', now() - interval '24 hours', now()),
  ('SAR/BDT', 31.75, 'fallback', now() - interval '24 hours', now()),
  ('EUR/BDT', 132.50, 'fallback', now() - interval '24 hours', now()),
  ('GBP/BDT', 154.50, 'fallback', now() - interval '24 hours', now()),
  
  -- Indonesia (IDR)
  ('USD/IDR', 16200.00, 'fallback', now() - interval '24 hours', now()),
  ('AED/IDR', 4385.50, 'fallback', now() - interval '24 hours', now()),
  ('SAR/IDR', 4290.20, 'fallback', now() - interval '24 hours', now()),
  ('EUR/IDR', 17850.00, 'fallback', now() - interval '24 hours', now()),
  ('GBP/IDR', 20800.00, 'fallback', now() - interval '24 hours', now()),
  
  -- Vietnam (VND)
  ('USD/VND', 25450.00, 'fallback', now() - interval '24 hours', now()),
  ('AED/VND', 6890.50, 'fallback', now() - interval '24 hours', now()),
  ('SAR/VND', 6745.20, 'fallback', now() - interval '24 hours', now()),
  ('EUR/VND', 27950.00, 'fallback', now() - interval '24 hours', now()),
  ('GBP/VND', 32600.00, 'fallback', now() - interval '24 hours', now())
ON CONFLICT (pair) 
DO UPDATE SET
  rate = EXCLUDED.rate,
  source = EXCLUDED.source,
  updated_at = EXCLUDED.updated_at
WHERE exchange_rates.source = 'fallback'; -- Only update if current source is also fallback