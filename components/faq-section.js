import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'When will BootBrokers launch?',
    answer:
      "We're planning to launch in early 2026. Join the waitlist to be notified as soon as we go live and get exclusive early access.",
  },
  {
    question: 'What are your seller fees?',
    answer:
      "Our seller fees are significantly lower than traditional marketplaces. Exact pricing will be announced closer to launch, but we're committed to keeping more money in sellers' pockets.",
  },
  {
    question: 'How do you verify listings?',
    answer:
      'Every listing goes through our verification process, including photo authentication, seller history review, and brand/model validation. We take authenticity seriously.',
  },
  {
    question: 'Is there buyer protection?',
    answer:
      'Yes! All purchases include comprehensive buyer protection covering items not as described, non-delivery, and authenticity issues. Your purchase is safe with BootBrokers.',
  },
  {
    question: 'Can I sell used boots?',
    answer:
      'BootBrokers is designed for both new and pre-owned boots. We provide condition guidelines and photography tips to help you create honest, attractive listings.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      "We'll support all major credit cards, debit cards, and digital payment methods. All transactions are secured and processed through industry-leading payment providers.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-muted px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about BootBrokers
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
