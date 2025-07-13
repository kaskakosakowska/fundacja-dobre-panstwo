-- Fix function search_path security warnings by setting explicit search_path
-- This prevents potential security issues with schema path manipulation

-- Update has_role function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role user_role)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path = ''
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE user_id = _user_id
      AND role = _role
  )
$function$;

-- Update can_edit function  
CREATE OR REPLACE FUNCTION public.can_edit(_user_id uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path = ''
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE user_id = _user_id
      AND role IN ('super_admin', 'editor')
  )
$function$;

-- Update update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Update handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, role, display_name, email)
  VALUES (
    NEW.id,
    CASE 
      WHEN NEW.email = 'admin@dobrepanstwo.org' THEN 'super_admin'::public.user_role
      ELSE 'viewer'::public.user_role
    END,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email),
    NEW.email
  );
  RETURN NEW;
END;
$function$;