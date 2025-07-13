-- Sprawdź status RLS na storage.objects
SELECT schemaname, tablename, rowsecurity FROM pg_tables WHERE schemaname = 'storage' AND tablename = 'objects';