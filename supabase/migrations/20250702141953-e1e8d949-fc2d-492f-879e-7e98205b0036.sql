-- Utworzenie bucket dla plików XML
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Polityki dla bucket documents
CREATE POLICY "Documents are viewable by everyone" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'documents');

CREATE POLICY "Anyone can upload documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'documents' AND (storage.foldername(name))[1] = 'xml');

CREATE POLICY "Anyone can update their documents" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'documents');

CREATE POLICY "Anyone can delete documents" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'documents');