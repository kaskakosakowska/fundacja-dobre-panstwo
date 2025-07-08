-- Extend articles table with CMS fields
ALTER TABLE public.articles 
ADD COLUMN IF NOT EXISTS pdf_url TEXT,
ADD COLUMN IF NOT EXISTS audio_url TEXT,
ADD COLUMN IF NOT EXISTS featured_image_url TEXT,
ADD COLUMN IF NOT EXISTS seo_title TEXT,
ADD COLUMN IF NOT EXISTS seo_description TEXT;

-- Create storage buckets for CMS content
INSERT INTO storage.buckets (id, name, public) VALUES 
('articles-pdfs', 'articles-pdfs', true),
('articles-audio', 'articles-audio', true),
('articles-images', 'articles-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for articles-pdfs bucket
CREATE POLICY "PDFs are viewable by everyone" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'articles-pdfs');

CREATE POLICY "Admins can upload PDFs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-pdfs' AND public.can_edit(auth.uid()));

CREATE POLICY "Admins can update PDFs" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-pdfs' AND public.can_edit(auth.uid()));

CREATE POLICY "Admins can delete PDFs" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'articles-pdfs' AND public.can_edit(auth.uid()));

-- Storage policies for articles-audio bucket
CREATE POLICY "Audio files are viewable by everyone" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'articles-audio');

CREATE POLICY "Admins can upload audio files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-audio' AND public.can_edit(auth.uid()));

CREATE POLICY "Admins can update audio files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-audio' AND public.can_edit(auth.uid()));

CREATE POLICY "Admins can delete audio files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'articles-audio' AND public.can_edit(auth.uid()));

-- Storage policies for articles-images bucket
CREATE POLICY "Images are viewable by everyone" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'articles-images');

CREATE POLICY "Admins can upload images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'articles-images' AND public.can_edit(auth.uid()));

CREATE POLICY "Admins can update images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'articles-images' AND public.can_edit(auth.uid()));

CREATE POLICY "Admins can delete images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'articles-images' AND public.can_edit(auth.uid()));