/*
  # Move pg_net Extension to Extensions Schema

  1. Security Improvements
    - Move pg_net extension from public schema to extensions schema
    - This follows best practice of keeping extensions separate from application data
    - Prevents potential naming conflicts and improves security

  2. Changes
    - Create extensions schema if not exists
    - Drop pg_net from public schema
    - Create pg_net in extensions schema
    - Grant necessary usage permissions
*/

-- Create extensions schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS extensions;

-- Drop pg_net from public schema
DROP EXTENSION IF EXISTS pg_net;

-- Create pg_net in extensions schema
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Grant usage on extensions schema to necessary roles
GRANT USAGE ON SCHEMA extensions TO postgres, anon, authenticated, service_role;
