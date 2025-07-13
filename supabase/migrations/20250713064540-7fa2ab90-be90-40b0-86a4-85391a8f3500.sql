-- Fix storage RLS policies for image uploads in CMS
-- Allow authenticated users to upload images to articles-images bucket

-- First, ensure the bucket exists and is public
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('articles-images', 'articles-images', true, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;

-- Create permissive policies for articles-images bucket
CREATE POLICY "Anyone can view images" ON storage.objects
  FOR SELECT USING (bucket_id = 'articles-images');

CREATE POLICY "Allow image uploads to articles-images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'articles-images' 
    AND (auth.role() = 'authenticated' OR auth.role() = 'anon')
  );

CREATE POLICY "Allow image updates in articles-images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'articles-images'
    AND (auth.role() = 'authenticated' OR auth.role() = 'anon')
  );

CREATE POLICY "Allow image deletion in articles-images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'articles-images'
    AND (auth.role() = 'authenticated' OR auth.role() = 'anon')
  );