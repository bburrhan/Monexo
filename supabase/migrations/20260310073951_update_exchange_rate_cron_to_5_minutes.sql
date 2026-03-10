/*
  Update Exchange Rate Cron Job to Every 5 Minutes

  Changes:
  - Updates the existing cron job schedule from hourly to every 5 minutes
  - Job name remains 'update-exchange-rates-job'
*/

SELECT cron.alter_job(
  job_id := (SELECT jobid FROM cron.job WHERE jobname = 'update-exchange-rates-job'),
  schedule := '*/5 * * * *'
);
