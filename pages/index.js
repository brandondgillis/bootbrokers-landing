import Head from 'next/head'
import { HeroSection } from '@/components/hero-section'
import { ValuePropsSection } from '@/components/value-props-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSafetySection } from '@/components/trust-safety-section'
import { CategoriesSection } from '@/components/categories-section'
import { WaitlistSection } from '@/components/waitlist-section'
import { FAQSection } from '@/components/faq-section'
import { FooterSection } from '@/components/footer-section'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Boot Brokers - Premium Marketplace for Men&apos;s Boots | Coming 2026</title>
        <meta
          name="description"
          content="The premier marketplace for quality men&apos;s boots. Buy and sell your boots, your way! Coming 2026."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <HeroSection />
        <ValuePropsSection />
        <HowItWorksSection />
        <TrustSafetySection />
        <CategoriesSection />
        <WaitlistSection />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  )
}
