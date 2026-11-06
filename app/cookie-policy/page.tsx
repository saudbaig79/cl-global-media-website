import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Cookie Policy | CL Global Media",
  description: "How CL GLOBAL MEDIA LLC uses cookies and similar technologies on its website.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Cookie Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: [DATE OF PUBLICATION]</p>
            <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Cookies and similar technologies</h2>
                <p>Cookies are small files stored by a website in your browser. CL GLOBAL MEDIA LLC does not currently use advertising cookies, social-media retargeting pixels, or an on-site account or preference system. This website uses Vercel Web Analytics to measure site traffic.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Analytics</h2>
                <p>Vercel describes Web Analytics as using a short-lived hash derived from incoming requests rather than relying on third-party cookies; its documentation says that hash is discarded after 24 hours. Analytics data is used to understand site usage, not to deliver targeted advertising. Vercel&apos;s processing is subject to its own privacy information and current service configuration.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Your choices</h2>
                <p>You can manage or delete cookies using your browser settings. Blocking cookies may affect functionality provided by the browser or hosting services. The website does not currently provide an on-site cookie preference control. If our use of cookies or similar technologies changes, we will update this policy and provide any consent choices required by applicable law before using non-essential technologies that require consent.</p>
              </section>
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-primary">Contact</h2>
                <p>For questions about this policy or personal data, contact CL GLOBAL MEDIA LLC at <a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a>. See our <a className="text-foreground underline decoration-primary underline-offset-4" href="/privacy-policy">Privacy Policy</a> for more information.</p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
