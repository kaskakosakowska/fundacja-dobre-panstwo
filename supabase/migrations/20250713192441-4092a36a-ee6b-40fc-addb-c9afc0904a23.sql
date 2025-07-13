-- Fix storage RLS policies - allow all operations for testing
DROP POLICY IF EXISTS "Anyone can view images" ON storage.objects;
DROP POLICY IF EXISTS "Allow image uploads to articles-images" ON storage.objects;
DROP POLICY IF EXISTS "Allow image updates in articles-images" ON storage.objects;
DROP POLICY IF EXISTS "Allow image deletion in articles-images" ON storage.objects;

-- Create permissive policies for all storage operations
CREATE POLICY "Allow all operations on articles-images" ON storage.objects
  FOR ALL USING (bucket_id = 'articles-images');

CREATE POLICY "Allow all operations on articles-pdfs" ON storage.objects
  FOR ALL USING (bucket_id = 'articles-pdfs');

CREATE POLICY "Allow all operations on articles-audio" ON storage.objects
  FOR ALL USING (bucket_id = 'articles-audio');

CREATE POLICY "Allow all operations on documents" ON storage.objects
  FOR ALL USING (bucket_id = 'documents');