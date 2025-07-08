-- Temporarily allow anonymous file uploads for testing
CREATE POLICY "Allow anonymous PDF uploads for testing" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-pdfs');

CREATE POLICY "Allow anonymous audio uploads for testing" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-audio');

CREATE POLICY "Allow anonymous image uploads for testing" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-images');