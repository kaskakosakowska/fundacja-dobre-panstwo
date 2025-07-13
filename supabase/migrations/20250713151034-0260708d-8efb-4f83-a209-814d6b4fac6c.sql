-- Tymczasowo dodaj polityki które pozwolą na edycję bez uwierzytelnienia
-- dla celów testowych i administracyjnych

-- Dodaj politykę INSERT dla niezalogowanych użytkowników
CREATE POLICY "Anonymous users can insert articles for testing" 
ON public.articles 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Dodaj politykę UPDATE dla niezalogowanych użytkowników
CREATE POLICY "Anonymous users can update articles for testing" 
ON public.articles 
FOR UPDATE 
TO anon
USING (true)
WITH CHECK (true);

-- Dodaj politykę SELECT dla niezalogowanych użytkowników dla wszystkich artykułów
CREATE POLICY "Anonymous users can view all articles for testing" 
ON public.articles 
FOR SELECT 
TO anon
USING (true);