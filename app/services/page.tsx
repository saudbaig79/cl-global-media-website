import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, MapPin, Monitor, Plane, ShoppingBag, TrainFront } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Services | CL Global Media",
  description: "Outdoor media planning, advertising buying, and corporate sponsorship for business clients in the United States and United Kingdom.",
}

const formats = [
  { icon: MapPin, title: "Outdoor and roadside", text: "Classic billboards, premium digital roadside sites, street-level digital displays, and other outdoor formats offered by media owners." },
  { icon: TrainFront, title: "Transport", text: "Bus, rail, metro, tram, and other transport advertising placements arranged through operators and their media partners." },
  { icon: Plane, title: "Airport", text: "Airport advertising opportunities planned and booked through third-party media owners." },
  { icon: ShoppingBag, title: "Retail", text: "Retail and in-store advertising placements, subject to media-owner inventory and availability." },
  { icon: Monitor, title: "Digital out-of-home", text: "Digital outdoor advertising placements, arranged through third-party media owners." },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative overflow-hidden bg-black py-28 md:py-36">
        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Urban outdoor media environment" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-primary">Business services</p>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold text-white md:text-6xl">Outdoor media and corporate sponsorship.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">CL GLOBAL MEDIA LLC plans and buys outdoor, transport, airport, retail, and digital out-of-home advertising on behalf of business clients through third-party media owners. We serve business clients in the United States and United Kingdom.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground">Discuss a campaign<ArrowRight aria-hidden="true" size={18} /></Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Advertising formats</p>
            <h2 className="text-balance text-3xl font-semibold text-foreground md:text-5xl">Planning and buying placements through media owners.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">The inventory, availability, terms, and final placement are controlled by the relevant third-party media owner or rights holder.</p>
          </AnimatedSection>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {formats.map((format, index) => (
              <AnimatedSection key={format.title} animation="fade-up" delay={index * 80} className="bg-card p-8 md:min-h-64">
                <format.icon aria-hidden="true" className="size-7 text-primary" />
                <h3 className="mt-10 text-xl font-semibold text-foreground">{format.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{format.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[.8fr_1.2fr] lg:px-8">
          <AnimatedSection animation="fade-left">
            <Building aria-hidden="true" className="size-8 text-primary" />
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-background/60">Corporate sponsorship</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Sourcing and arranging sponsorship opportunities.</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-right">
            <p className="text-lg leading-relaxed text-background/75">We source and arrange corporate sponsorship opportunities for business clients through third-party media owners and rights holders. Opportunities, terms, and availability are determined by the relevant partner.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-background pb-1 font-medium">Contact us about sponsorship<ArrowRight aria-hidden="true" size={18} /></Link>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}
