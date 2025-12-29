import { Card, CardContent } from '@/components/ui/card'

const buyerSteps = [
  {
    step: '1',
    title: 'Browse & Discover',
    description: 'Search thousands of verified boot listings by category, brand, size, and condition.',
  },
  {
    step: '2',
    title: 'Connect & Negotiate',
    description: 'Message sellers directly, ask questions, and negotiate prices through our secure platform.',
  },
  {
    step: '3',
    title: 'Purchase Securely',
    description: 'Complete your purchase with buyer protection and tracked shipping included.',
  },
]

const sellerSteps = [
  {
    step: '1',
    title: 'Create Your Listing',
    description: 'Upload photos, add detailed specs, and set your price using our seller tools.',
  },
  {
    step: '2',
    title: 'Manage Inquiries',
    description: 'Respond to interested buyers and negotiate offers through secure messaging.',
  },
  {
    step: '3',
    title: 'Ship & Get Paid',
    description: 'Pack your boots, ship with tracking, and receive payment after delivery confirmation.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A straightforward process designed for both buyers and sellers
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">For Buyers</h3>
            <div className="space-y-6">
              {buyerSteps.map((item, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                      <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">For Sellers</h3>
            <div className="space-y-6">
              {sellerSteps.map((item, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-xl font-bold text-accent-foreground">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                      <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
