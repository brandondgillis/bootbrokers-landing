import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/UltimateGuide.module.css';

export default function BootBrokersStandards() {
  return (
    <>
      <Head>
        <title>Boot Brokers Standards - Boot Brokers</title>
        <meta name="description" content="Learn the listing requirements, condition standards, and buyer protections that make Boot Brokers different. Complete photo requirements, measurements, and transparency standards." />
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

      <article className={styles.guide}>
        <header className={styles.header}>
          <h1>Boot Brokers Standards</h1>
          <p className={styles.intro}>
            Most marketplaces treat boots like just another listing. Boot Brokers is being built around one idea: reduce uncertainty to near-zero for buyers, and protect good sellers by making listings complete, honest, and verifiable from the start.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Required listing essentials (non-negotiable)</h2>
          <p>Every listing must include:</p>

          <h3>1) Proof of size + width</h3>
          <ul>
            <li>Photo of the size tag/stamp/printing showing size and width (D, E, EE, etc.)</li>
            <li>If the boot has no tag, seller must provide a clear photo of the marking (or note &quot;no tag&quot; and provide measurements)</li>
          </ul>

          <h3>2) Outsole + heel wear verification</h3>
          <ul>
            <li>Full outsole photo (straight-on)</li>
            <li>Heel wear close-up (straight-on)</li>
            <li>Any sole separation must be clearly shown</li>
          </ul>

          <h3>3) Measurements that prevent fit regret</h3>
          <ul>
            <li>Insole length heel-to-toe (or interior footbed measurement)</li>
            <li>Outsole length + outsole width at widest point</li>
            <li>Shaft height (for western/engineer/tall boots) when relevant</li>
          </ul>

          <h3>4) Condition transparency</h3>
          <p>Close-ups of:</p>
          <ul>
            <li>Toe/vamp creasing</li>
            <li>Any cracks, cuts, deep scuffs, stains</li>
            <li>Heel counter condition</li>
            <li>Interior photos showing lining condition (especially heel lining)</li>
          </ul>

          <h3>5) The &quot;what you&apos;re buying&quot; shot list</h3>
          <p><strong>Minimum photo set (10 photos):</strong></p>
          <ol>
            <li>3/4 front-left</li>
            <li>3/4 front-right</li>
            <li>Outer side profile</li>
            <li>Inner side profile</li>
            <li>Back/heel</li>
            <li>Top-down</li>
            <li>Outsole (full)</li>
            <li>Heel wear close-up</li>
            <li>Size tag/marking</li>
            <li>Flaws (close-up)</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Structured fields (so buyers can filter like adults)</h2>
          <p>Boot Brokers listings require standardized fields that most marketplaces ignore:</p>
          
          <div className={styles.callout}>
            <ul>
              <li><strong>Brand</strong></li>
              <li><strong>Model</strong> (if known)</li>
              <li><strong>Style</strong> (Chelsea / service / work / cowboy / etc.)</li>
              <li><strong>Size + width</strong></li>
              <li><strong>Leather type</strong> (full-grain / suede / roughout / etc.)</li>
              <li><strong>Color</strong></li>
              <li><strong>Sole type</strong> (lug / leather / wedge / etc.)</li>
              <li><strong>Construction</strong> (welted / stitchdown / Blake / cemented / unknown)</li>
              <li><strong>Condition grade</strong> (see below)</li>
              <li><strong>Measurements</strong> (auto-highlighted in the listing)</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Condition grades (clear, consistent, enforceable)</h2>
          <p>To stop &quot;excellent condition&quot; from meaning nothing:</p>

          <div className={styles.faq}>
            <h3>New / Unworn</h3>
            <p>No wear; may be tried on indoors</p>

            <h3>Like New</h3>
            <p>Minimal wear; outsole shows almost no use</p>

            <h3>Excellent</h3>
            <p>Light wear; no structural issues; clean uppers</p>

            <h3>Good</h3>
            <p>Visible wear; still solid; flaws disclosed</p>

            <h3>Fair</h3>
            <p>Heavy wear; priced accordingly; may need repair soon</p>

            <h3>Project / Needs Repair</h3>
            <p>Issues clearly stated (sole separation, deep cracks, missing hardware, etc.)</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Anti-scam basics built into the marketplace</h2>
          <p>Boot Brokers is being designed to reduce the usual nonsense:</p>
          <ul>
            <li>No pressure to move off-platform for payment</li>
            <li>Clear listing requirements reduce &quot;not as described&quot; ambiguity</li>
            <li>Listings with missing proof photos or incomplete fields don&apos;t publish</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Seller-friendly clarity (less drama, fewer disputes)</h2>
          <p>Because listings are standardized:</p>
          <ul>
            <li><strong>Buyers know what they&apos;re getting</strong> before they buy</li>
            <li><strong>Sellers spend less time</strong> answering the same questions</li>
            <li><strong>Disputes are based on defined standards,</strong> not subjective expectations</li>
          </ul>
          
          <div className={styles.callout}>
            <p><strong>The result:</strong> A marketplace where complete listings are the norm, not the exception. Where buyers can shop with confidence and sellers can list without drama.</p>
          </div>
        </section>

        <footer className={styles.guideFooter}>
          <Link href="/" className={styles.cta}>
            Join the Waitlist
          </Link>
          <p>&copy; {new Date().getFullYear()} Boot Brokers &middot; Built for craftsmanship</p>
        </footer>
      </article>
    </>
  );
}
