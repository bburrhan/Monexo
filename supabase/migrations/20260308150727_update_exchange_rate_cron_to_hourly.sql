/*
  # Update Exchange Rate Cron Job to Hourly Schedule

  1. Changes
    - Update existing cron job from every 2 hours to every 1 hour
    - New schedule: every hour on the hour

  2. Notes
    - Uses pg_cron to manage the schedule
    - Job calls the update-exchange-rates Supabase Edge Function via HTTP POST
*/

SELECT cron.alter_job(
  job_id := (SELECT jobid FROM cron.job WHERE jobname = 'update-exchange-rates-job'),
  schedule := '0 * * * *'
);
