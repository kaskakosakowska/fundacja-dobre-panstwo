-- Temporarily allow anonymous users to edit articles for testing
-- This policy allows anyone to update articles without authentication
CREATE POLICY "Allow anonymous article editing for testing" 
ON public.articles 
FOR UPDATE
USING (true);