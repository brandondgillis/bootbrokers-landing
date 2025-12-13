import Head from 'next/head';
import styles from '../styles/ComingSoon.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Boot Brokers - Coming 2026</title>
        <meta name="description" content="The premier marketplace for quality boots. Buy and sell your boots, your way! Coming 2026." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.comingSoon}>
        <div className={styles.comingSoonContent}>
          {/* Logo */}
          <h1 className={styles.logo}>BOOT BROKERS</h1>
          
          {/* Tagline */}
          <p className={styles.tagline}>Where craftsmanship trades hands.</p>
          
          {/* Coming Soon */}
          <div className={styles.comingYear}>COMING 2026</div>
          
          {/* Description */}
          <p className={styles.description}>
            The premier marketplace for quality boots. Buy and sell your boots, your way!
          </p>
          
          {/* Email Signup */}
          <div className={styles.waitlistSection}>
            <h2>Join the Waitlist</h2>
            <p className={styles.waitlistSubtitle}>
              Be the first to know when we launch. Get exclusive early access.
            </p>
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className={styles.waitlistForm}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitBtn}>
                Notify Me
              </button>
            </form>
          </div>
          
          {/* Social proof */}
          <div className={styles.socialProof}>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>7.75%</div>
              <div className={styles.proofLabel}>Lowest Commissions</div>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>100%</div>
              <div className={styles.proofLabel}>Boot Enthusiast Made</div>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>24/7</div>
              <div className={styles.proofLabel}>Support</div>
            </div>
          </div>

          {/* Blog Link */}
          <div className={styles.blogLink}>
            <a href="/blog">Read our blog ?</a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className={styles.comingSoonFooter}>
          <p>&copy; {new Date().getFullYear()} Boot Brokers &middot; Built with craftsmanship</p>
        </footer>
      </div>
    </>
  );
}
