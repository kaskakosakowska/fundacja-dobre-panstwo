-- Dodaj tymczasowe polityki dla storage pozwalające wszystkim na upload plików dla testów
CREATE POLICY "Allow anonymous users to upload PDFs for testing" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-pdfs');

CREATE POLICY "Allow anonymous users to upload audio for testing" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-audio');

CREATE POLICY "Allow anonymous users to upload images for testing" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-images');

CREATE POLICY "Allow anonymous users to update PDFs for testing" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-pdfs');

CREATE POLICY "Allow anonymous users to update audio for testing" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-audio');

CREATE POLICY "Allow anonymous users to update images for testing" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-images');