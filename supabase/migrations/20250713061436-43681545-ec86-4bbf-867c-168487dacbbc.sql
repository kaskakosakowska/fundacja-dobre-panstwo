-- Re-enable Row Level Security on articles and migration_log tables
-- These were temporarily disabled in previous migrations but need to be re-enabled

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.migration_log ENABLE ROW LEVEL SECURITY;