-- TYMCZASOWA NAPRAWA: Dodaj politykę pozwalającą wszystkim na UPDATE artykułów
-- (można to później zmienić gdy dodamy właściwe uwierzytelnienie)

-- Usuń istniejące polityki UPDATE które mogą kolidować
DROP POLICY IF EXISTS "Anonymous users can update articles for testing" ON public.articles;

-- Dodaj nową prostą politykę dla anonymous users
CREATE POLICY "Allow all anonymous users to update articles" 
ON public.articles 
FOR UPDATE 
TO anon 
USING (true) 
WITH CHECK (true);

-- Dodaj także politykę dla authenticated users na wypadek gdyby ktoś był zalogowany
CREATE POLICY "Allow all authenticated users to update articles" 
ON public.articles 
FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);