-- Add image_position and image_size columns to articles table
-- These will store the layout preferences for featured images

ALTER TABLE public.articles 
ADD COLUMN image_position TEXT DEFAULT 'inline-left',
ADD COLUMN image_size TEXT DEFAULT 'medium';