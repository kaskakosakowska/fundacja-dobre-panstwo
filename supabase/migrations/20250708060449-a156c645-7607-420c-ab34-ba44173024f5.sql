-- Create a test admin user profile for CMS testing
INSERT INTO public.profiles (user_id, role, display_name, email)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'super_admin', 'Test Admin', 'admin@test.com')
ON CONFLICT (user_id) DO NOTHING;

-- Temporarily allow anonymous users to publish articles for testing
CREATE POLICY "Allow anonymous article creation for testing" 
ON public.articles 
FOR INSERT 
WITH CHECK (true);