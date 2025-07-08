-- Temporarily allow anonymous users to publish articles for testing
CREATE POLICY "Allow anonymous article creation for testing" 
ON public.articles 
FOR INSERT 
WITH CHECK (true);