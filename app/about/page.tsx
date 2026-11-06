import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Company Profile | CL Global Media",
  description: "Company information and services for CL GLOBAL MEDIA LLC, a corporate sponsorship and outdoor media agency.",
}

const principles = [
  { title: "Campaign planning", text: "We plan and buy outdoor, transport, airport, retail, and digital out-of-home advertising on behalf of business clients." },
  { title: "Media-owner coordination", text: "Advertising placements are arranged through third-party media owners and their appointed representatives." },
  { title: "Corporate sponsorship", text: "We source and arrange corporate sponsorship opportunities through third-party media owners and rights holders." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative flex min-h-[68vh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Contemporary business workspace" fill className="object-cover grayscale" priority />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-primary">Company profile</p>
          <h1 className="max-w-4xl text-balance font-sans text-4xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">Outdoor media and corporate sponsorship, planned around your audience.</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">CL GLOBAL MEDIA LLC is a corporate sponsorship and outdoor media agency that plans and buys outdoor, transport, airport, retail, and digital out-of-home advertising on behalf of business clients through third-party media owners.</p>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <AnimatedSection animation="fade-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-background/60">Corporate overview</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">A focused agency for outdoor media and corporate sponsorship.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">We work with business clients in the United States and United Kingdom, planning and buying advertising through third-party media owners. Placements are subject to media-owner inventory, terms, and availability.</p>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 border-b border-background pb-1 font-medium">Review our services <ArrowRight aria-hidden="true" size={18} /></Link>
          </AnimatedSection>
          <AnimatedSection animation="fade-right">
            <div className="border border-background/20 p-6 md:p-8">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-background/60">Published company information</p>
              <dl className="flex flex-col gap-5">
                <div><dt className="text-sm text-background/60">Legal name</dt><dd className="mt-1 text-xl font-medium">CL GLOBAL MEDIA LLC</dd></div>
                <div><dt className="text-sm text-background/60">Formation</dt><dd className="mt-1">Limited liability company organised under the laws of the State of New Mexico, USA</dd></div>
                <div><dt className="text-sm text-background/60">Entity No.</dt><dd className="mt-1">7521073</dd></div>
                <div><dt className="text-sm text-background/60">Organised</dt><dd className="mt-1">31 January 2024</dd></div>
                <div><dt className="text-sm text-background/60">Chief Executive Officer</dt><dd className="mt-1">Tristan A. Marsh</dd></div>
                <div><dt className="text-sm text-background/60">Markets served</dt><dd className="mt-1">United States and United Kingdom</dd></div>
                <div className="flex gap-3"><Phone aria-hidden="true" size={20} /><div><dt className="sr-only">Phone</dt><dd><a href="tel:+15852150461">+1 (585) 215-0461</a></dd></div></div>
                <div className="flex gap-3"><Mail aria-hidden="true" size={20} /><div><dt className="sr-only">Email</dt><dd><a href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a></dd></div></div>
                <div className="flex gap-3"><MapPin aria-hidden="true" size={20} /><div><dt className="text-sm text-background/60">Mailing address (correspondence only):</dt><dd>99 Wall Street, New York, NY 10005, USA</dd></div></div>
                <div className="flex gap-3"><MapPin aria-hidden="true" size={20} /><div><dt className="text-sm text-background/60">Operating address:</dt><dd>1875 Mission Street, Suites 103-106, San Francisco, CA 94103, USA</dd></div></div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-background/60">Our team works remotely and meets clients by appointment only. CL Global Media is a brand used under licence.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">How we work</p>
            <h2 className="text-balance text-3xl font-semibold text-foreground md:text-5xl">A clear scope, coordinated with media owners.</h2>
          </AnimatedSection>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {principles.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100} className="bg-background p-8 md:min-h-72">
                <p className="text-4xl font-light text-primary">0{index + 1}</p>
                <h3 className="mt-16 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <AnimatedSection animation="fade-left" className="flex gap-5">
            <div><h2 className="text-2xl font-semibold">Leadership</h2><p className="mt-3 leading-relaxed text-muted-foreground">The company is led by Tristan A. Marsh, Chief Executive Officer.</p><Link href="/team" className="mt-5 inline-flex items-center gap-2 text-primary">Meet the new leadership <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </AnimatedSection>
          <AnimatedSection animation="fade-right" className="flex gap-5">
            <div><h2 className="text-2xl font-semibold">Corporate sponsorship</h2><p className="mt-3 leading-relaxed text-muted-foreground">We source and arrange sponsorship opportunities on behalf of business clients through third-party media owners and rights holders.</p><Link href="/services" className="mt-5 inline-flex items-center gap-2 text-primary">View our services <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
