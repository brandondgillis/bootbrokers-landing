# ?? Boot Brokers Landing - Deployment Guide

## ? What's Done

Your landing site is now ready and pushed to GitHub!

**Repo:** https://github.com/brandondgillis/bootbrokers-landing
**Vercel Project:** bootbrokers-landing.vercel.app

## ?? What You Have

### Pages:
- `/` - Coming Soon landing page with email signup
- `/blog` - Blog home with all posts
- `/blog/welcome-to-boot-brokers` - First blog post
- `/blog/how-to-care-for-leather-boots` - Second blog post

### Features:
- ? Beautiful coming soon page (matches your current design)
- ? Blog system with 2 starter posts
- ? Mobile responsive
- ? No database needed
- ? Easy to add new blog posts

## ?? Deploy to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard

2. **Import Your Repo**
   - Click "Add New..." ? "Project"
   - Select your GitHub repo: `bootbrokers-landing`
   - Framework Preset: **Next.js** (should auto-detect)
   - **Important:** No build settings needed - Vercel auto-configures Next.js!
   - Click "Deploy"

3. **Wait for Build** (takes ~2 minutes)

4. **Done!** Your site will be live at:
   - `bootbrokers-landing.vercel.app`

### ? Build Settings (Auto-configured by Vercel):
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (automatic)
- **Install Command:** `npm install`

**No manual configuration needed!** Vercel detects Next.js automatically.

## ?? Point Your Domain

### In Vercel:
1. Go to your project ? Settings ? Domains
2. Add domain: `bootbrokers.co`
3. Follow the DNS instructions

### In Your Domain Registrar (Namecheap/GoDaddy):
1. Add A Record: `@ ? 76.76.21.21`
2. Add CNAME: `www ? cname.vercel-dns.com`

**DNS takes 5-60 minutes to propagate**

## ?? How to Add Blog Posts

Edit: `lib/posts.js`

```javascript
export const posts = [
  {
    slug: 'your-post-url',
    title: 'Your Post Title',
    date: 'January 1, 2025',
    excerpt: 'Short description for the blog home page',
    content: `
Your full blog post content here.

## You can use headings

Regular paragraphs work too.

### Bullet lists:
- Item one
- Item two

[Links work](/) like this.

*Italic text* with asterisks.
    `.trim()
  },
  // ... add more posts here
];
```

Then:
1. Save the file
2. Commit: `git add . && git commit -m "Add new blog post"`
3. Push: `git push origin main`
4. Vercel auto-deploys in ~1 minute!

## ?? Email Signup

**Now using your Supabase database!** ?

Your landing page is connected to the **same Supabase database** as your main marketplace. All waitlist signups go directly to your `waitlist` table.

### How it Works:
1. User enters email on landing page
2. Email is saved to your Supabase `waitlist` table
3. Duplicate emails are handled gracefully
4. Same database as your main app!

### View Waitlist Signups:
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to **Table Editor** ? `waitlist`
4. See all email signups!

### Export Waitlist:
In Supabase dashboard:
1. Go to `waitlist` table
2. Click **Export** ? Download CSV
3. Import to your email platform when ready to launch!

**Benefits:**
- ? No third-party services needed
- ? Unlimited signups (Supabase free tier: 500MB)
- ? Same database as main app
- ? Easy to export
- ? Duplicate email protection built-in

## ?? Customization

### Update Text:
- **Coming Soon Page:** `pages/index.js`
- **Blog Home:** `pages/blog/index.js`
- **Blog Post Template:** `pages/blog/[slug].js`

### Update Styles:
- **Coming Soon:** `styles/ComingSoon.module.css`
- **Blog Home:** `styles/Blog.module.css`
- **Blog Post:** `styles/BlogPost.module.css`

## ?? Quick Start (Local Development)

```bash
cd bootbrokers-landing
npm install
npm run dev
```

Visit: http://localhost:3000

## ?? Next Steps

1. ? Deploy to Vercel
2. ? Point `bootbrokers.co` to Vercel
3. ? Set up email form (Formspree or similar)
4. ? Add more blog posts
5. ? Keep building your main marketplace!

## ?? When Ready to Launch

When your full marketplace is ready:

**Option 1: Redirect**
- Keep landing site at `bootbrokers.co`
- Move marketplace to `app.bootbrokers.co`
- Add redirect button on landing page

**Option 2: Replace**
- Point `bootbrokers.co` to your full marketplace
- Archive landing site

---

## ?? Need Help?

Your landing site is 100% independent from your main marketplace. You can:
- Edit blog posts anytime
- Update design
- Change content
- No risk to main app!

**Your main marketplace continues building at:**
`marketplace-frontend.vercel.app`

---

**Questions? The landing site is simple HTML/CSS/JS - super safe to experiment with!** ??
