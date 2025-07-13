-- Usuń politykę testową która może powodować konflikty
DROP POLICY IF EXISTS "Allow anonymous article editing for testing" ON public.articles;

-- Zaktualizuj politykę edycji dla administratorów i edytorów
DROP POLICY IF EXISTS "Admins and editors can update articles" ON public.articles;

CREATE POLICY "Admins and editors can update articles" 
ON public.articles 
FOR UPDATE 
TO authenticated
USING (can_edit(auth.uid()))
WITH CHECK (can_edit(auth.uid()));

-- Dodaj politykę SELECT dla zalogowanych użytkowników
DROP POLICY IF EXISTS "Authenticated users can view all articles" ON public.articles;

CREATE POLICY "Authenticated users can view all articles" 
ON public.articles 
FOR SELECT 
TO authenticated
USING (true);