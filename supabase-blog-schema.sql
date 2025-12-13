-- Blog Posts Table for Admin Portal
-- Run this in your Supabase SQL Editor

create table if not exists blog_posts (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  featured_image text, -- Hero image URL
  author_id uuid references auth.users(id),
  author_name text default 'Boot Brokers Team', -- Display author name
  read_time integer, -- Estimated read time in minutes
  tags text[], -- Array of tags
  status text default 'draft' check (status in ('draft', 'published', 'scheduled')),
  publish_date timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table blog_posts enable row level security;

-- Public can read published posts
create policy "Public can read published posts"
  on blog_posts for select
  to public
  using (
    status = 'published' 
    and (publish_date is null or publish_date <= now())
  );

-- Authenticated users can do everything (for now - you can restrict to admins later)
create policy "Authenticated users can manage posts"
  on blog_posts for all
  to authenticated
  using (true)
  with check (true);

-- Create updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_blog_posts_updated_at
  before update on blog_posts
  for each row
  execute function update_updated_at_column();

-- Index for faster queries
create index if not exists blog_posts_slug_idx on blog_posts(slug);
create index if not exists blog_posts_status_idx on blog_posts(status);
create index if not exists blog_posts_publish_date_idx on blog_posts(publish_date);
create index if not exists blog_posts_tags_idx on blog_posts using gin(tags);

-- Migrate existing data if blog_posts table already exists
-- Add new columns if they don't exist
alter table blog_posts add column if not exists featured_image text;
alter table blog_posts add column if not exists author_name text default 'Boot Brokers Team';
alter table blog_posts add column if not exists read_time integer;
alter table blog_posts add column if not exists tags text[];

-- Update existing posts with default values
update blog_posts set 
  author_name = 'Boot Brokers Team',
  read_time = 5,
  tags = ARRAY['General']
where author_name is null or read_time is null or tags is null;

-- Insert your existing blog posts
insert into blog_posts (slug, title, excerpt, content, status, publish_date) values
(
  'welcome-to-boot-brokers',
  'Welcome to Boot Brokers',
  'We''re building something special for boot enthusiasts. Learn about our mission and what''s coming in 2026.',
  'We''re excited to announce Boot Brokers - a marketplace built by boot enthusiasts, for boot enthusiasts.

## Our Mission

Boot Brokers was created to provide a trusted platform where quality boots can find new owners who will appreciate them. Whether you''re looking for vintage classics, exotic leathers, or everyday work boots, we''re building a community around craftsmanship and quality.

## What''s Coming

### Verified Listings
Every boot listing will include detailed measurements, condition photos, and authenticity checks. No more guessing - you''ll know exactly what you''re getting.

### Expert Reviews
We''ll share boot care tips, brand guides, and restoration advice from experts in the field.

### Community
Connect with fellow boot lovers, share your collection, and discover rare finds.

### Fair Fees
At just 7.75% commission, we offer the lowest rates in the industry. More money stays with sellers, better deals for buyers.

## Join the Waitlist

We''re launching in 2026. Sign up on our homepage to be notified when we go live and get exclusive early access.

## Stay Connected

Follow our blog for updates on:
- Boot care and maintenance tips
- Brand spotlights and history
- Community member stories
- Platform development updates

Thank you for being part of this journey. We can''t wait to see what boots find new homes through our marketplace.

*- The Boot Brokers Team*',
  'published',
  now()
),
(
  'how-to-care-for-leather-boots',
  'How to Care for Leather Boots',
  'Essential tips for keeping your boots looking great for years to come.',
  'Quality boots are an investment. With proper care, they can last decades and develop a beautiful patina. Here''s how to keep them in top condition.

## Daily Care

### Cleaning
- Remove dirt and dust with a soft brush after each wear
- Use a damp cloth for stubborn stains
- Never submerge boots in water

### Storage
- Use boot trees to maintain shape
- Store in a cool, dry place
- Avoid direct sunlight which can fade leather

## Weekly Maintenance

### Conditioning
- Apply leather conditioner every 2-3 weeks
- Use products specific to your leather type
- Don''t over-condition - less is more

### Polishing
- Polish regularly to protect leather
- Match polish to boot color
- Buff with a soft cloth for shine

## Deep Cleaning

### When Needed
- Clean thoroughly every few months
- Use saddle soap for deep cleaning
- Follow up with conditioner

### Dealing with Water
- Blot (don''t rub) if boots get wet
- Stuff with newspaper to absorb moisture
- Let air dry naturally - never use direct heat

## Professional Care

### When to Visit a Cobbler
- Sole replacement
- Heel repair
- Stitching issues
- Deep restoration

## Coming Soon

Boot Brokers will feature a directory of trusted cobblers and leather care specialists. Stay tuned!

*Have boot care questions? We''ll be here to help when we launch in 2026.*',
  'published',
  now()
);
