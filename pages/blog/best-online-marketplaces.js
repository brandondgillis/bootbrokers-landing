import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/UltimateGuide.module.css';

export default function BestOnlineMarketplaces() {
  return (
    <>
      <Head>
        <title>The Best Online Marketplaces to Buy and Sell Used Boots - Boot Brokers</title>
        <meta name="description" content="An honest comparison of popular platforms for buying and selling used boots online--eBay, Poshmark, Mercari, Depop, and more. Learn the fees, protection policies, and frustrations sellers face." />
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
          <h1>The Best Online Marketplaces to Buy and Sell Used Boots (and why they&apos;re still frustrating)</h1>
          <p className={styles.intro}>
            Buying used boots online can be an incredible deal. Selling used boots online can be a great side hustle. The problem is the big general marketplaces weren&apos;t built for boots--and it shows in the places that matter most: fees, disputes, scams, and time-wasting buyers.
          </p>
          <p className={styles.intro}>
            This page is intentionally blunt. It&apos;s a comparison of popular platforms people use to buy and sell secondhand boots--and the common headaches they create--plus what Boot Brokers (coming soon) is being built to fix: boot-first trust + boot-first listing + lowest fees.
          </p>
        </header>

        <section className={styles.section}>
          <h2>The ugly truth: most marketplaces optimize for volume, not trust</h2>
          <p>If you&apos;ve ever sold boots online, you&apos;ve probably run into at least one of these:</p>
          
          <ul>
            <li><strong>Fees that take a real bite</strong> out of your sale price (sometimes on shipping and taxes too).</li>
            <li><strong>&quot;Not as described&quot; disputes</strong> that can force a return even when you feel you listed honestly. (Platforms usually design protection around buyer confidence first.)</li>
            <li><strong>Scam attempts,</strong> especially on local / off-platform payment situations.</li>
            <li><strong>Time-wasters:</strong> lowballing, ghosting, no-shows (most common on local pickup platforms where there&apos;s minimal friction to message you).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Marketplace-by-marketplace: what makes them painful for boot buyers and sellers</h2>

          <h3>eBay</h3>
          <p><strong>The hook:</strong> huge audience and strong search intent.</p>
          <p><strong>The pain:</strong></p>
          <ul>
            <li><strong>Fees:</strong> eBay&apos;s final value fees vary by category and are calculated on the total amount of the sale (including shipping, sales tax, and other applicable fees).</li>
            <li><strong>Disputes/returns:</strong> purchases can fall under the eBay Money Back Guarantee; &quot;not as described&quot; issues trigger a return workflow that sellers have to respond to.</li>
            <li><strong>Seller protection exists,</strong> but it&apos;s not automatic: eBay describes scenarios like false &quot;not as described&quot; claims and what they may do if they determine a claim was false.</li>
          </ul>
          <p className={styles.proTip}><strong>Boot-specific frustration:</strong> boots get buried in noise, and casual sellers often omit the exact details boot buyers actually need (measurements, outsole wear, width, last, etc.).</p>

          <h3>Poshmark</h3>
          <p><strong>The hook:</strong> easy listing, easy shipping, massive fashion traffic.</p>
          <p><strong>The pain:</strong></p>
          <ul>
            <li><strong>Fees:</strong> Poshmark&apos;s commission is 20% on sales of $15+ (and a flat fee on cheaper sales).</li>
            <li><strong>Buyer protection framing:</strong> Posh Protect centers refunds when an item never ships or &quot;does not match the listing description,&quot; otherwise sales are final.</li>
          </ul>
          <p className={styles.proTip}><strong>Boot-specific frustration:</strong> serious boot buyers want outsole photos, measurements, and construction details; fashion platforms often encourage &quot;vibe listings&quot; instead of specs.</p>

          <h3>Mercari</h3>
          <p><strong>The hook:</strong> fast, app-first, broad audience.</p>
          <p><strong>The pain:</strong></p>
          <ul>
            <li><strong>Fees and friction moved around:</strong> starting January 6, 2025, Mercari states sellers pay a flat 10% selling fee and buyers pay a flat 3.6% Buyer Protection fee, with no additional payment processing fee.</li>
            <li><strong>Returns can be platform-decided:</strong> Mercari notes that if a buyer feels the item isn&apos;t as described, they can request a return and Mercari determines whether it&apos;s accepted.</li>
            <li><strong>Buyer protection window:</strong> Mercari states buyers have 72 hours to report &quot;not as described.&quot;</li>
          </ul>
          <p className={styles.proTip}><strong>Boot-specific frustration:</strong> that 72-hour &quot;inspection window&quot; is great for honest buyers--and a headache when sellers worry about wear, swaps, or subjective claims.</p>

          <h3>Depop</h3>
          <p><strong>The hook:</strong> discovery-driven; great for trend boots and younger buyers.</p>
          <p><strong>The pain:</strong></p>
          <ul>
            <li><strong>Fees are confusing</strong> unless you read the fine print: Depop explains that in the US/UK there are no selling fees, but there are payment processing fees, and buyers may pay a marketplace fee at checkout (shown during checkout).</li>
            <li><strong>Protection policy exists:</strong> Depop states buyers can get a refund for items that don&apos;t arrive, arrive damaged, or are &quot;significantly not as described,&quot; if reported within a window they describe.</li>
          </ul>
          <p className={styles.proTip}><strong>Boot-specific frustration:</strong> boots are fit-sensitive; &quot;significantly not as described&quot; can become an argument about expectations if listings are not extremely precise.</p>

          <h3>Etsy (only if the boots are truly vintage)</h3>
          <p><strong>The hook:</strong> vintage buyers pay for uniqueness and story.</p>
          <p><strong>The pain:</strong></p>
          <ul>
            <li><strong>Fees add up:</strong> Etsy charges a $0.20 listing fee per listing (and additional fee components apply depending on what you use).</li>
            <li><strong>Case/refund programs:</strong> Etsy describes purchase protection programs (including how some cases can be handled/refunded under program requirements).</li>
          </ul>
          <p className={styles.proTip}><strong>Boot-specific frustration:</strong> if your boots aren&apos;t genuinely vintage, you&apos;re fighting the wrong audience.</p>

          <h3>Facebook Marketplace (local pickup)</h3>
          <p><strong>The hook:</strong> no shipping, fast cash, huge local reach.</p>
          <p><strong>The pain:</strong></p>
          <ul>
            <li><strong>Scams are common enough</strong> that Meta publishes scam guidance; the FTC also warns about common tactics like fake payments and off-platform manipulation.</li>
            <li><strong>Flakiness is a feature:</strong> low friction means lots of &quot;Is this available?&quot; messages, ghosting, and no-shows.</li>
          </ul>
          <p className={styles.proTip}><strong>Boot-specific frustration:</strong> boots require trust and detail; local pickup often becomes a negotiation circus.</p>
        </section>

        <section className={styles.section}>
          <h2>Why these platforms feel especially bad for boots</h2>
          <p>Boots are not like t-shirts or generic sneakers. A boot purchase depends on specifics that most marketplaces don&apos;t force sellers to provide:</p>
          <ul>
            <li>Width (D/EE/etc.)</li>
            <li>Measurements (insole/outsole)</li>
            <li>Outsole wear + heel wear</li>
            <li>Leather condition (creases vs cracks)</li>
            <li>Construction (resoleable or not)</li>
          </ul>
          <p>General marketplaces are built for anything--so the buyer experience becomes &quot;hunt and hope,&quot; and the seller experience becomes &quot;answer the same 12 questions forever.&quot;</p>
        </section>

        <section className={styles.section}>
          <h2>What Boot Brokers is being built to fix (coming soon)</h2>
          <p>Boot Brokers isn&apos;t &quot;another place to list stuff.&quot; It&apos;s a marketplace designed around the exact failure points above:</p>
          
          <div className={styles.callout}>
            <ul>
              <li><strong>Lowest fees</strong> (by design--the platform shouldn&apos;t win more than the seller does)</li>
              <li><strong>Boot-first listing requirements</strong> (outsole photo, size tag, measurements, condition fields)</li>
              <li><strong>Boot-first buyer confidence</strong> (clear condition standards and structured listings)</li>
              <li><strong>Reduced scam surface area</strong> (no off-platform payment games; fewer loopholes)</li>
              <li><strong>Less flakiness</strong> (marketplace expectations built around real buyers who are there to buy boots, not browse)</li>
            </ul>
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
