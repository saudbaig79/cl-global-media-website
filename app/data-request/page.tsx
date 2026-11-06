import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Data Rights | CL Global Media",
  description: "How to contact CL GLOBAL MEDIA LLC about a personal data rights request.",
}

export default function DataRequestPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Privacy</p>
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Data Rights Request</h1>
            <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
              <p>Depending on where you are, you may have rights to request access to, correction or deletion of your personal data, restriction of or objection to certain processing, or data portability. These rights are subject to applicable law and its exceptions.</p>
              <p>To make a request, email <a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com?subject=Personal%20data%20rights%20request">enquiries@clglobalmedia.com</a> with the words “Personal data rights request” in the subject. Include the right you wish to exercise and enough information for us to locate the relevant correspondence. Please do not send sensitive personal information unless it is necessary for your request.</p>
              <p>We may ask for information needed to verify your identity and understand the request before responding. We will handle requests under the laws that apply to the data and your location. You may also have the right to complain to the relevant privacy regulator.</p>
              <p>For more information, read our <a className="text-foreground underline decoration-primary underline-offset-4" href="/privacy-policy">Privacy Policy</a>.</p>
            </div>
            <div className="mt-10 border border-border bg-card p-6">
              <p className="font-semibold text-foreground">CL GLOBAL MEDIA LLC</p>
              <p className="mt-2 text-muted-foreground">A New Mexico limited liability company, Entity No. 7521073.</p>
              <p className="mt-2 text-muted-foreground">Mailing address (correspondence only): 99 Wall Street, New York, NY 10005, USA.</p>
              <p className="mt-2 text-muted-foreground">Operating address: 1875 Mission Street, Suites 103-106, San Francisco, CA 94103, USA.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
