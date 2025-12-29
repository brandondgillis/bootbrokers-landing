export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-4 font-mono text-lg font-bold tracking-wider">BOOTBROKERS</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The premium marketplace for men&apos;s boots. Coming 2026.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#how-it-works" className="hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Seller Fees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog/list" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BootBrokers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
