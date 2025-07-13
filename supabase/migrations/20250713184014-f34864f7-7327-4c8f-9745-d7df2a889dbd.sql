-- Dodaj funkcję pomocniczą do sprawdzania uprawnień do storage
CREATE OR REPLACE FUNCTION public.storage_upload_allowed(bucket_name text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Pozwól na upload do buketów artykułów
    RETURN bucket_name IN ('articles-pdfs', 'articles-audio', 'articles-images', 'documents');
END;
$$;