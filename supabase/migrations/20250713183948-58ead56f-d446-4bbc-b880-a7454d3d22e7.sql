-- Włącz RLS na storage.objects jeśli nie jest włączone
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Polityki umożliwiające publiczny dostęp do odczytu dla wszystkich buketów
CREATE POLICY "Public read access for all buckets" 
ON storage.objects 
FOR SELECT 
USING (true);

-- Polityki umożliwiające upload dla buketów artykułów bez wymagania autoryzacji
CREATE POLICY "Public upload to articles-pdfs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-pdfs');

CREATE POLICY "Public upload to articles-audio" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-audio');

CREATE POLICY "Public upload to articles-images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-images');

-- Polityki umożliwiające update dla istniejących plików
CREATE POLICY "Public update articles-pdfs" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-pdfs');

CREATE POLICY "Public update articles-audio" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-audio');

CREATE POLICY "Public update articles-images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-images');