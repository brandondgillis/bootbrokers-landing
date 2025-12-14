-- ========================================
-- BLOG POST TEMPLATE
-- Copy this file and fill in your content
-- Then run in Supabase SQL Editor
-- ========================================

INSERT INTO blog_posts (
  slug,
  title,
  excerpt,
  content,
  featured_image,
  author_name,
  read_time,
  tags,
  status,
  publish_date
) VALUES (
  -- SLUG: URL-friendly version (lowercase, hyphens)
  -- Example: 'my-first-boot-review'
  'YOUR-SLUG-HERE',
  
  -- TITLE: What shows at top of post
  'Your Post Title Here',
  
  -- EXCERPT: Short description for blog home (1-2 sentences)
  'This is a short description that appears on the blog homepage.',
  
  -- CONTENT: Full blog post with markdown
  'Your full blog post content goes here.

## Main Heading

Write your introduction paragraph here. You can use **bold** and *italic* text.

## Another Section

### Subsection Heading

Here are some tips:
- First bullet point
- Second bullet point
- Third bullet point

### Another Subsection

More content here. You can have as many sections as you want.

## Conclusion

Wrap up your post here.

*- Boot Brokers Team*',
  
  -- FEATURED IMAGE: Optional URL to header image
  -- Use NULL if no image, or a URL like:
  -- 'https://images.unsplash.com/photo-1234567890/example.jpg'
  NULL,
  
  -- AUTHOR NAME: Who wrote this
  'Boot Brokers Team',
  
  -- READ TIME: Estimated minutes to read (auto-calculated in admin, manual here)
  5,
  
  -- TAGS: Categories for this post
  ARRAY['General', 'Tips'],
  
  -- STATUS: 'draft', 'published', or 'scheduled'
  'published',
  
  -- PUBLISH DATE: When to publish
  -- NOW() = immediate
  -- '2025-01-15 10:00:00'::timestamptz = specific date/time
  NOW()
);

-- ========================================
-- VERIFICATION QUERY
-- Run this after inserting to verify
-- ========================================
-- SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT 1;
