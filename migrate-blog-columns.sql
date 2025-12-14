-- ========================================
-- MIGRATION: Add New Blog Post Columns
-- Run this FIRST in Supabase SQL Editor
-- ========================================

-- Add new columns if they don't exist
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS featured_image text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS author_name text DEFAULT 'Boot Brokers Team';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS read_time integer;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS tags text[];

-- Update existing posts with default values
UPDATE blog_posts 
SET 
  author_name = COALESCE(author_name, 'Boot Brokers Team'),
  read_time = COALESCE(read_time, 5),
  tags = COALESCE(tags, ARRAY['General']::text[])
WHERE author_name IS NULL OR read_time IS NULL OR tags IS NULL;

-- Create index for tags (GIN index for array searching)
CREATE INDEX IF NOT EXISTS blog_posts_tags_idx ON blog_posts USING gin(tags);

-- Verify columns exist
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'blog_posts'
ORDER BY ordinal_position;

-- ========================================
-- SUCCESS MESSAGE
-- ========================================
-- If you see featured_image, author_name, read_time, and tags in the results above,
-- the migration was successful!
-- 
-- Next step: Run blog-post-used-cowboy-boots.sql to publish your post.
-- ========================================
