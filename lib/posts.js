// Blog posts data
// Add new posts here - they'll automatically appear on the blog

export const posts = [
  {
    slug: 'welcome-to-boot-brokers',
    title: 'Welcome to Boot Brokers',
    date: 'December 13, 2024',
    excerpt: "We're building something special for boot enthusiasts. Learn about our mission and what's coming in 2026.",
    content: `
We're excited to announce Boot Brokers - a marketplace built by boot enthusiasts, for boot enthusiasts.

## Our Mission

Boot Brokers was created to provide a trusted platform where quality boots can find new owners who will appreciate them. Whether you're looking for vintage classics, exotic leathers, or everyday work boots, we're building a community around craftsmanship and quality.

## What's Coming

### Verified Listings
Every boot listing will include detailed measurements, condition photos, and authenticity checks. No more guessing - you'll know exactly what you're getting.

### Expert Reviews
We'll share boot care tips, brand guides, and restoration advice from experts in the field.

### Community
Connect with fellow boot lovers, share your collection, and discover rare finds.

### Fair Fees
At just 7.75% commission, we offer the lowest rates in the industry. More money stays with sellers, better deals for buyers.

## Join the Waitlist

We're launching in 2026. [Sign up on our homepage](/) to be notified when we go live and get exclusive early access.

## Stay Connected

Follow our blog for updates on:
- Boot care and maintenance tips
- Brand spotlights and history
- Community member stories
- Platform development updates

Thank you for being part of this journey. We can't wait to see what boots find new homes through our marketplace.

*- The Boot Brokers Team*
    `.trim()
  },
  {
    slug: 'how-to-care-for-leather-boots',
    title: 'How to Care for Leather Boots',
    date: 'December 14, 2024',
    excerpt: 'Essential tips for keeping your boots looking great for years to come.',
    content: `
Quality boots are an investment. With proper care, they can last decades and develop a beautiful patina. Here's how to keep them in top condition.

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
- Don't over-condition - less is more

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
- Blot (don't rub) if boots get wet
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

*Have boot care questions? We'll be here to help when we launch in 2026.*
    `.trim()
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}
