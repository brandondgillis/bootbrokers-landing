import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/BlogList.module.css';

export default function BlogList() {
  const guides = [
    {
      title: 'The Ultimate Guide to Buying Used Boots Online',
      description: 'Learn how to buy used boots online with confidence. Complete guide covering fit, condition checks, authenticity, pricing, and what to ask before buying.',
      href: '/blog/ultimate-boot-buying-guide',
      readTime: '15 min read'
    },
    {
      title: 'The Best Online Marketplaces to Buy and Sell Used Boots',
      description: 'An honest comparison of eBay, Poshmark, Mercari, Depop, and more. Learn the fees, protection policies, and frustrations each platform creates for boot sellers.',
      href: '/blog/best-online-marketplaces',
      readTime: '10 min read'
    },
    {
      title: 'Boot Brokers Standards',
      description: 'The listing requirements, condition standards, and buyer protections that make Boot Brokers different. Learn our photo requirements, measurements, and transparency standards.',
      href: '/blog/boot-brokers-standards',
      readTime: '8 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Boot Brokers Blog - Boot Brokers</title>
        <meta name="description" content="Expert guides on buying quality boots online. Learn everything you need to know about fit, condition, authenticity, and pricing." />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            BOOT BROKERS
          </Link>
          <Link href="https://www.bootbrokers.co" className={styles.homeLink}>
            Home
          </Link>
        </div>
      </nav>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Boot Brokers Blog</h1>
          <p className={styles.subtitle}>Expert advice for finding quality boots online</p>
        </header>

        <div className={styles.guidesGrid}>
          {guides.map((guide, index) => (
            <article key={index} className={styles.guideCard}>
              <Link href={guide.href} className={styles.guideLink}>
                <h2>{guide.title}</h2>
                <p className={styles.description}>{guide.description}</p>
                <div className={styles.meta}>
                  <span className={styles.readTime}>{guide.readTime}</span>
                  <span className={styles.arrow}>&rarr;</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <footer className={styles.footer}>
          <Link href="/" className={styles.cta}>
            Back to Home
          </Link>
          <p>&copy; {new Date().getFullYear()} Boot Brokers &middot; Built for craftsmanship</p>
        </footer>
      </div>
    </>
  );
}
