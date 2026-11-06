import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Privacy Policy | CL Global Media",
  description: "How CL GLOBAL MEDIA LLC handles personal data in connection with its website and business services.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Privacy Policy</h1>
            <div className="mt-10 flex flex-col gap-10 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">1. Who we are</h2>
                <p>CL GLOBAL MEDIA LLC, a New Mexico limited liability company, Entity No. 7521073, mailing address for correspondence only at 99 Wall Street, New York, NY 10005, USA, is the controller of personal data described in this policy. Contact: <a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a>.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">2. Data we collect</h2>
                <p>Contact details (name, business email, telephone, job title, company) you give us by email or the enquiry form; information about your business needed to deliver a Campaign; invoicing and payment details; and basic technical data described in our <Link className="text-foreground underline decoration-primary underline-offset-4" href="/cookie-policy">Cookie Policy</Link>.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">3. How we use it and our legal basis</h2>
                <p>We use personal data to respond to enquiries and prepare proposals (legitimate interests); perform our contract with your organisation (contract or legitimate interests); keep accounting and tax records and meet anti-money laundering and sanctions obligations (legal obligation); and send occasional business updates, which you can opt out of at any time (legitimate interests or consent where required).</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">4. Sharing</h2>
                <p>We share personal data only with Media Owners and production suppliers needed to deliver a Campaign, our IT, email and hosting providers, our professional advisers, banks and payment providers, and authorities where required by law. We do not sell personal data.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">5. International transfers</h2>
                <p>We are based in the United States and our team may work from other countries. Where we transfer personal data from the UK or EEA, we use appropriate safeguards such as the European Commission&apos;s standard contractual clauses and the UK International Data Transfer Addendum, or rely on an adequacy decision.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">6. Retention</h2>
                <p>Enquiry data: 24 months from last contact. Client and contract records: 6 years after the end of the contract, or longer if required by law.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">7. Your rights</h2>
                <p>Depending on where you are, you may have the right to access, correct, delete or restrict use of your data, to object to processing, and to data portability. To exercise them, contact us or use our <Link className="text-foreground underline decoration-primary underline-offset-4" href="/data-request">Data Rights page</Link>. If you are in the UK you may complain to the Information Commissioner&apos;s Office; in the EEA, to your local supervisory authority.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">8. Security</h2>
                <p>We use reasonable technical and organisational measures to protect personal data.</p>
              </section>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-primary">9. Changes</h2>
                <p>We will post any changes on this page. Effective date: November 2026.</p>
              </section>
              <section className="border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold text-foreground">Contact</h2>
                <p>CL GLOBAL MEDIA LLC, a New Mexico limited liability company, Entity No. 7521073.</p>
                <p className="mt-2">Mailing address (correspondence only): 99 Wall Street, New York, NY 10005, USA.</p>
                <p className="mt-2"><a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a></p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
