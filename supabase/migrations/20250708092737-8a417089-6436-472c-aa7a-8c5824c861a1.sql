-- Dodaj pole mind_map_data do tabeli articles
ALTER TABLE public.articles 
ADD COLUMN IF NOT EXISTS mind_map_data JSONB;