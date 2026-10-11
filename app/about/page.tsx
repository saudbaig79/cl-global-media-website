import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, FileCheck2, Mail, MapPin, Phone, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Company information, leadership, services, and operating approach for CL GLOBAL MEDIA LLC.",
}

const principles = [
  { title: "Clear scope", text: "Campaign requirements, formats, locations, and deliverables are defined before work begins." },
  { title: "Responsible coordination", text: "A named team coordinates planning, creative requirements, and campaign communication." },
  { title: "Direct communication", text: "Prospective clients and counterparties can contact the company using the published details below." },
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
          <h1 className="max-w-4xl text-balance font-sans text-4xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">Media planning and advertising services, presented with clarity.</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">CL GLOBAL MEDIA LLC provides outdoor and place-based advertising capabilities across roadside, transport, airport, retail, and digital formats.</p>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <AnimatedSection animation="fade-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-background/60">Corporate overview</p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">A practical partner for campaign planning and delivery.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">The company provides planning and coordination services for clients seeking outdoor and place-based advertising solutions across roadside, transport, airport, retail, and digital formats.</p>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 border-b border-background pb-1 font-medium">Review our capabilities <ArrowRight aria-hidden="true" size={18} /></Link>
          </AnimatedSection>
          <AnimatedSection animation="fade-right">
            <div className="border border-background/20 p-6 md:p-8">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-background/60">Published company information</p>
              <dl className="flex flex-col gap-6">
                <div><dt className="text-sm text-background/60">Legal name</dt><dd className="mt-1 text-xl font-medium">CL GLOBAL MEDIA LLC</dd></div>
                <div><dt className="text-sm text-background/60">Leadership</dt><dd className="mt-1">CL Global Media Team, Company Leadership</dd></div>
                <div className="flex gap-3"><Phone aria-hidden="true" size={20} /><div><dt className="sr-only">Phone</dt><dd><a href="tel:+15852150461">+1 (585) 215-0461</a></dd></div></div>
                <div className="flex gap-3"><Mail aria-hidden="true" size={20} /><div><dt className="sr-only">Email</dt><dd><a href="mailto:enquiries@clglobalmedia.com">enquiries@clglobalmedia.com</a></dd></div></div>
                <div className="flex gap-3"><MapPin aria-hidden="true" size={20} /><div><dt className="sr-only">Address</dt><dd>99 Wall Street, New York 10005, USA</dd></div></div>
              </dl>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">How we engage</p>
            <h2 className="text-balance text-3xl font-semibold text-foreground md:text-5xl">A transparent working process.</h2>
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
          <AnimatedSection animation="fade-left" className="flex gap-5"><Users className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><h2 className="text-2xl font-semibold">Named leadership</h2><p className="mt-3 leading-relaxed text-muted-foreground">Our published leadership team is accountable for personnel, sales, customer service, design, and company direction.</p><Link href="/team" className="mt-5 inline-flex items-center gap-2 text-primary">Meet the team <ArrowRight size={18} aria-hidden="true" /></Link></div></AnimatedSection>
          <AnimatedSection animation="fade-right" className="flex gap-5"><FileCheck2 className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><h2 className="text-2xl font-semibold">Private due diligence</h2><p className="mt-3 leading-relaxed text-muted-foreground">Corporate and KYB information is handled directly with authorized counterparties during formal onboarding and due-diligence processes. Confidential records are not published on this website.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-primary">Contact the company <ArrowRight size={18} aria-hidden="true" /></Link></div></AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
