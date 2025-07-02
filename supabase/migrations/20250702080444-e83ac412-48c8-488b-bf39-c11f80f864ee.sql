-- Create enum for article sections
CREATE TYPE public.article_section AS ENUM ('szkatulka', 'szczypta', 'glosy');

-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('super_admin', 'editor', 'viewer');

-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  summary TEXT,
  content TEXT,
  excerpt TEXT,
  published_date DATE,
  section article_section NOT NULL,
  original_url TEXT,
  featured_image_url TEXT,
  author TEXT,
  tags TEXT[],
  meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id)
);

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'viewer',
  display_name TEXT,
  email TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create media table for file management
CREATE TABLE public.media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  alt_text TEXT,
  caption TEXT,
  article_id UUID REFERENCES public.articles(id) ON DELETE SET NULL,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create migration log table
CREATE TABLE public.migration_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  status TEXT NOT NULL, -- 'pending', 'success', 'failed'
  error_message TEXT,
  article_id UUID REFERENCES public.articles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.migration_log ENABLE ROW LEVEL SECURITY;

-- Create function to check user role
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role user_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is admin or editor
CREATE OR REPLACE FUNCTION public.can_edit(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE user_id = _user_id
      AND role IN ('super_admin', 'editor')
  )
$$;

-- Articles policies
CREATE POLICY "Articles are viewable by everyone" 
ON public.articles 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Admins and editors can view all articles" 
ON public.articles 
FOR SELECT 
TO authenticated
USING (public.can_edit(auth.uid()));

CREATE POLICY "Admins and editors can insert articles" 
ON public.articles 
FOR INSERT 
TO authenticated
WITH CHECK (public.can_edit(auth.uid()));

CREATE POLICY "Admins and editors can update articles" 
ON public.articles 
FOR UPDATE 
TO authenticated
USING (public.can_edit(auth.uid()));

CREATE POLICY "Only super admins can delete articles" 
ON public.articles 
FOR DELETE 
TO authenticated
USING (public.has_role(auth.uid(), 'super_admin'));

-- Profiles policies
CREATE POLICY "Profiles are viewable by authenticated users" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Super admins can update all profiles" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (public.has_role(auth.uid(), 'super_admin'));

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Media policies
CREATE POLICY "Media is viewable by everyone" 
ON public.media 
FOR SELECT 
USING (true);

CREATE POLICY "Admins and editors can manage media" 
ON public.media 
FOR ALL 
TO authenticated
USING (public.can_edit(auth.uid()));

-- Migration log policies
CREATE POLICY "Migration log viewable by admins" 
ON public.migration_log 
FOR SELECT 
TO authenticated
USING (public.can_edit(auth.uid()));

CREATE POLICY "Migration log insertable by admins" 
ON public.migration_log 
FOR INSERT 
TO authenticated
WITH CHECK (public.can_edit(auth.uid()));

-- Create indexes for performance
CREATE INDEX idx_articles_section ON public.articles(section);
CREATE INDEX idx_articles_published_date ON public.articles(published_date DESC);
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_published ON public.articles(is_published);
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX idx_media_article_id ON public.media(article_id);

-- Create trigger function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default super admin profile trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, role, display_name, email)
  VALUES (
    NEW.id,
    CASE 
      WHEN NEW.email = 'admin@dobrepanstwo.org' THEN 'super_admin'::user_role
      ELSE 'viewer'::user_role
    END,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();