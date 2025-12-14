-- ========================================
-- Used Cowboy Boots: How to Buy the Perfect Pair Online
-- Auto-generated SQL for Supabase
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
  'how-to-buy-used-cowboy-boots-online',
  'Used Cowboy Boots: How to Buy the Perfect Pair Online',
  'Buying used cowboy boots online can be a steal—or a headache. The difference is whether you know what to check before you click "Buy."',
  'Buying used cowboy boots online can be a steal—or a headache. The difference is whether you know what to check before you click "Buy."

## Start with fit (not the stamped size)

Cowboy boots vary by brand, last, toe shape, and wear. The stamped size is a starting point, but **measurements are what keep you out of return hell**.

**Look for these measurements in every listing:**
- **Insole length (mm)** (best single predictor)
- **Width** (D, EE, etc.)
- **Shaft height** (in)
- **Calf circumference** at the top opening (in)
- **Heel height** (in)

**Pro tip:** If a listing has no insole measurement photo, ask for it—or skip it.

## Use a condition checklist (fast, reliable)

A good listing shows the spots that affect comfort and value.

**Photos you want to see:**
- Both boots (outside + inside)
- Toe close-up (scuffs, deep scratches)
- Heels from the back (heel drag)
- Outsoles (tread life + uneven wear)
- Interior size stamp (readable)
- Maker stamp/branding (readable)
- Any defects close-up

## Know what "normal wear" looks like

Some wear is expected. These are common and usually fine:
- Minor scuffs on the vamp
- Light heel edge rub
- Slight outsole smoothing

These are "price should drop" items:
- Heel caps worn down aggressively
- Dry cracking near flex points
- Loose welt stitching
- Sole separation at toe/arch

These are "walk away" unless you want a project:
- Deep structural cracks
- Broken shank feel (boot collapses)
- Major sole separation
- Severe odor not disclosed

## Authenticity checks that work

Counterfeits exist, and "inspired by" listings waste your time.

**Ask or look for:**
- Maker stamp + size stamp photos
- Serial/model codes (if the brand uses them)
- Close-ups of stitching, welt, and outsole branding
- Original purchase proof (nice-to-have)

If the seller refuses stamp photos, treat it as a no.

## Decide your "return risk" upfront

Buying used boots is easiest when listings provide complete measurements and clear photos. When they do, fit becomes a buyer responsibility, and disputes drop.

## Quick buyer checklist

Before you buy, confirm:
- Insole length (mm) + photo
- Width listed (or clearly marked unknown)
- Outsole photo shows remaining life
- Stamps are readable
- Defects are disclosed and photographed

**Shop listings with complete measurements and stamp photos ? fewer surprises.**',
  'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=1200',
  'Boot Brokers Team',
  8,
  ARRAY['Buying Guide', 'Tips', 'Cowboy Boots'],
  'published',
  NOW()
);

-- ========================================
-- VERIFICATION QUERY
-- ========================================
SELECT slug, title, status, publish_date 
FROM blog_posts 
WHERE slug = 'how-to-buy-used-cowboy-boots-online';
