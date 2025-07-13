-- Sprawdź czy istnieją polityki RLS na storage.objects
SELECT policyname, cmd, permissive, roles, qual, with_check 
FROM pg_policies 
WHERE schemaname = 'storage' AND tablename = 'objects';