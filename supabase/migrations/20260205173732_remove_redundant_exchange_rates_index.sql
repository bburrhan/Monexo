/*
  # Remove Redundant Index on Exchange Rates Table

  1. Changes
    - Drop the redundant `idx_exchange_rates_pair` index
    - The UNIQUE constraint on the `pair` column already creates an index
    - This explicit index is redundant and unused
    
  2. Security & Performance
    - Reduces index maintenance overhead
    - No impact on query performance (UNIQUE constraint index is still used)
    - Follows best practice of avoiding duplicate indexes
*/

-- Drop the redundant index (UNIQUE constraint already provides indexing)
DROP INDEX IF EXISTS idx_exchange_rates_pair;
