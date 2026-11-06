import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Accessibility Statement | CL Global Media",
  description: "Accessibility information and contact details for the CL GLOBAL MEDIA LLC website.",
}

export default function AccessibilityStatement() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Accessibility Statement</h1>
            <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Our approach</h2>
                <p>CL GLOBAL MEDIA LLC aims to make this website usable by as many people as possible. We continue to review its content and presentation, but we do not claim that the website conforms to a particular accessibility standard or has been independently audited.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Feedback and assistance</h2>
                <p>If you encounter an accessibility barrier or need information in another format, contact us at <a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com?subject=Website%20accessibility">enquiries@clglobalmedia.com</a>. Please describe the page and the assistance you need so we can respond.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
