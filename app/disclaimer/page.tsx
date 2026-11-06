import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Legal Disclaimer | CL Global Media",
  description: "Important information about the CL GLOBAL MEDIA LLC website and its services.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Legal Disclaimer</h1>
            <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Website information</h2>
                <p>This website provides general information about CL GLOBAL MEDIA LLC and its business services. It is not legal, financial, investment, or other professional advice. Information may change and should not be treated as a confirmed offer, booking, or guarantee of media availability.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Media inventory and third parties</h2>
                <p>Advertising inventory and sponsorship rights are owned or controlled by third-party media owners and rights holders. Placements are subject to their availability, approval, terms, and conditions. CL GLOBAL MEDIA LLC plans, negotiates, and arranges bookings on behalf of business clients; it does not claim ownership of media inventory unless a written Proposal expressly says otherwise.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Service agreements</h2>
                <p>A service engagement is formed only under an accepted written Proposal and our <a className="text-foreground underline decoration-primary underline-offset-4" href="/terms-of-business">Terms of Business</a>. Nothing on this website replaces those documents or the applicable terms of a Media Owner.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">External links</h2>
                <p>Links to third-party websites are provided for convenience. CL GLOBAL MEDIA LLC does not control their content, availability, or privacy practices.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
