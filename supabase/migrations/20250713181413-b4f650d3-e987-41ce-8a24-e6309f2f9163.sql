-- Dodaj tymczasową politykę pozwalającą wszystkim na usuwanie artykułów
CREATE POLICY "Allow anonymous users to delete articles for testing" 
ON public.articles 
FOR DELETE 
USING (true);