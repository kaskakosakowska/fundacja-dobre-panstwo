-- Clean up articles with poor quality data
DELETE FROM articles 
WHERE 
  -- Remove articles with numeric titles
  title ~ '^\d+$'
  OR
  -- Remove articles with very short titles
  length(title) < 5
  OR 
  -- Remove articles with very short content
  length(content) < 50
  OR
  -- Remove auto-drafts and revisions
  lower(title) LIKE '%auto-draft%'
  OR
  lower(title) LIKE '%revision%';