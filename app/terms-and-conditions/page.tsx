import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Website Terms of Use | CL Global Media",
  description: "Terms for using the CL GLOBAL MEDIA LLC website.",
}

const sections = [
  { title: "1. About these terms", text: "The website at www.clglobalmedia.com (the \"Site\") is operated by CL GLOBAL MEDIA LLC, a New Mexico limited liability company, Entity No. 7521073 (\"we\", \"us\", or \"our\"). These Website Terms of Use (\"Terms\") apply when you access or use the Site. By using the Site, you agree to these Terms. If you do not agree, do not use the Site." },
  { title: "2. Access to the Site", text: "We grant you a limited, non-exclusive, non-transferable and revocable right to use the Site in connection with evaluating or obtaining our services. You must not use the Site unlawfully, interfere with its operation or security, or reproduce or commercially exploit Site content except as permitted by law or by our written permission. We may modify, suspend or discontinue the Site." },
  { title: "3. Intellectual property", text: "Content on the Site is owned by us or used by us under licence, except for material belonging to third parties. The CL GLOBAL MEDIA name and logo are used under licence. These Terms do not transfer ownership or grant you rights in any intellectual property beyond the limited right to access the Site described above." },
  { title: "4. Third-party services and media inventory", text: "The Site may refer to third-party media owners, rights holders or providers. Their inventory, services and terms are controlled by those third parties and remain subject to availability. Links to third-party websites are provided for convenience; we do not control their content or policies." },
  { title: "5. Business services", text: "Our services are supplied only under our Terms of Business." },
  { title: "6. Site information", text: "The Site is provided for general information about our company and services. It is not legal, financial or professional advice, and information on the Site does not itself form a service contract. Any service engagement is subject to a written Proposal and our Terms of Business. Nothing in these Terms limits liability that cannot lawfully be limited." },
  { title: "7. Governing law", text: "These Terms are governed by the law of the State of New Mexico. The courts of the State of New Mexico have exclusive jurisdiction, subject to any mandatory rights that apply to you by law." },
]

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Website Terms of Use</h1>
            <p className="mt-4 text-sm text-muted-foreground">Version 1.1, last updated November 2026</p>
            <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-2xl font-semibold text-primary">{section.title}</h2>
                  <p>{section.title === "5. Business services" ? <>Our services are supplied only under our <Link className="text-foreground underline decoration-primary underline-offset-4" href="/terms-of-business">Terms of Business</Link>.</> : section.text}</p>
                </section>
              ))}
              <section className="border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold text-foreground">Contact</h2>
                <p>CL GLOBAL MEDIA LLC, a New Mexico limited liability company, Entity No. 7521073.</p>
                <p className="mt-2">Mailing address (correspondence only): 99 Wall Street, New York, NY 10005, USA.</p>
                <p className="mt-2">Operating address: 1875 Mission Street, Suites 103-106, San Francisco, CA 94103, USA.</p>
                <p className="mt-2"><a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a></p>
                <p className="mt-2">The CL GLOBAL MEDIA name and logo are used under licence.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
