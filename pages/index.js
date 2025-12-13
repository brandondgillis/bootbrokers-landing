import Head from 'next/head';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import styles from '../styles/ComingSoon.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: email.toLowerCase().trim() });
      
      if (error) {
        if (error.code === '23505') {
          setStatus('success');
          setMessage("You're already on the list! We'll notify you when we launch.");
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage("Thanks! We'll notify you when Boot Brokers launches.");
        setEmail('');
      }
    } catch (err) {
      console.error('Waitlist error:', err);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

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
            
            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={styles.emailInput}
                disabled={status === 'submitting' || status === 'success'}
                required
              />
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === 'submitting' || status === 'success'}
              >
                {status === 'submitting' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Notify Me'}
              </button>
            </form>
            
            {message && (
              <div className={`${styles.message} ${styles[status]}`}>
                {message}
              </div>
            )}
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
