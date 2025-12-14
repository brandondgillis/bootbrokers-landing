// ========================================
// JS to SQL Blog Post Converter
// Usage: node convert-js-to-sql.js
// ========================================

const fs = require('fs');
const path = require('path');

// PUT YOUR BEAUTIFUL JS POST HERE
const beautifulPost = {
  slug: 'example-post',
  title: 'Example Post Title',
  excerpt: 'Short excerpt here',
  content: `
## Introduction

Your beautiful content here with all the formatting.

### Section
- Bullet 1
- Bullet 2

More content...
  `.trim(),
  featured_image: 'https://example.com/image.jpg',
  author_name: 'Boot Brokers Team',
  read_time: 5,
  tags: ['Example', 'Tutorial'],
  status: 'published'
};

// CONVERT TO SQL
function escapeSQL(str) {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

function arrayToSQL(arr) {
  if (!arr || arr.length === 0) return 'ARRAY[]::text[]';
  return `ARRAY[${arr.map(item => escapeSQL(item)).join(', ')}]`;
}

const sql = `
-- Auto-generated SQL from beautiful-post.js
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
  ${escapeSQL(beautifulPost.slug)},
  ${escapeSQL(beautifulPost.title)},
  ${escapeSQL(beautifulPost.excerpt)},
  ${escapeSQL(beautifulPost.content)},
  ${beautifulPost.featured_image ? escapeSQL(beautifulPost.featured_image) : 'NULL'},
  ${escapeSQL(beautifulPost.author_name)},
  ${beautifulPost.read_time || 5},
  ${arrayToSQL(beautifulPost.tags)},
  ${escapeSQL(beautifulPost.status)},
  NOW()
);

-- Verify insertion
SELECT * FROM blog_posts WHERE slug = ${escapeSQL(beautifulPost.slug)};
`;

// Save to file
fs.writeFileSync('generated-blog-post.sql', sql.trim());

console.log('? SQL generated successfully!');
console.log('?? File: generated-blog-post.sql');
console.log('\n?? Next steps:');
console.log('1. Open Supabase SQL Editor');
console.log('2. Copy contents of generated-blog-post.sql');
console.log('3. Paste and run');
console.log('4. Your post is live! ??');
