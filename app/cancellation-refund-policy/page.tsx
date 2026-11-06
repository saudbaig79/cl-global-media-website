import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Cancellation Policy | CL Global Media",
  description: "Cancellation terms for business campaigns arranged by CL GLOBAL MEDIA LLC.",
}

export default function CancellationRefundPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Cancellation and Refund Policy</h1>
            <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Business campaign bookings</h2>
                <p>CL GLOBAL MEDIA LLC supplies services to business clients only. Campaign bookings are arranged with third-party media owners and are subject to the availability and cancellation terms of the relevant Media Owner.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Cancellation after acceptance</h2>
                <p>Cancellation after a Proposal has been accepted is subject to the Media Owner&apos;s cancellation terms. The client is responsible for any cancellation charges imposed by the Media Owner and for our Fees for work already completed, as set out in the accepted Proposal and our <Link className="text-foreground underline decoration-primary underline-offset-4" href="/terms-of-business">Terms of Business</Link>.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Changes and refunds</h2>
                <p>Requested changes must be agreed in writing and may change the Fees, Media Costs, or booking availability. Any refund or credit depends on amounts recovered from the Media Owner and the terms of the relevant Proposal. No fixed cancellation window or guaranteed refund applies unless it is expressly stated in the Proposal or required by law.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Contact</h2>
                <p>For a booking enquiry, contact <a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a> and include the relevant Proposal or Campaign reference.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
