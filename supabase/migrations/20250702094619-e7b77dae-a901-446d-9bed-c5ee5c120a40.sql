-- Temporarily disable RLS on migration_log for edge function to work
ALTER TABLE public.migration_log DISABLE ROW LEVEL SECURITY;

-- Also temporarily disable RLS on articles for the migration function
ALTER TABLE public.articles DISABLE ROW LEVEL SECURITY;