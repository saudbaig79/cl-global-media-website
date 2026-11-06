"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

const tristanPortrait = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-06%20at%208.52.31%20PM-12IBfP8SwHIon9giwx5BUOv4ZxyKbg.jpeg"

export function TeamMembers() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid overflow-hidden border border-border bg-card lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative min-h-[420px] bg-muted sm:min-h-[560px]">
            <Image src={tristanPortrait} alt="Tristan A. Marsh, Chief Executive Officer of CL GLOBAL MEDIA LLC" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-center" unoptimized />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Chief Executive Officer</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">CL GLOBAL MEDIA LLC Appoints Tristan A. Marsh as Chief Executive Officer</h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
              <p>CL Global Media LLC is proud to announce the appointment of Tristan A. Marsh as its new Chief Executive Officer.</p>
              <p>Tristan joins CL Global Media LLC after establishing himself as one of the leading independent operators in the European media industry. Operating at the top of his field, he built a formidable reputation for delivering high-impact advertising campaigns for blue-chip clients across the UK, Europe, and the Middle East.</p>
              <p>Known for his energy, drive, and hands-on leadership, Tristan brings with him not only his blue-chip client portfolio, but a substantial pipeline of work, deep industry relationships, and a culture of relentless execution.</p>
              <p>&ldquo;I&apos;m not here to maintain - I&apos;m here to build,&rdquo; said Marsh. &ldquo;CL Global Media has the talent and the ambition. Now we have the momentum. This is a new chapter, and we&apos;re just getting started.&rdquo;</p>
              <p>Under his leadership, CL GLOBAL MEDIA LLC will enter a new phase of growth - expanding its advertising client roster, scaling its creative and media buying capabilities, and cementing its position as a leading advertising company in the US market.</p>
            </div>
          </div>
        </article>
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mx-auto mt-12 max-w-4xl border-l-2 border-primary pl-6 md:pl-10">
            <h2 className="text-xl font-semibold text-foreground">A message from our CEO</h2>
            <div className="mt-3 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
              <p>I took over as CEO of CL GLOBAL MEDIA LLC after years operating independently at the top of the European media industry. I built my name from scratch - no backing, no shortcuts - just results for blue-chip advertising clients who demand the best.</p>
              <p>Now I&apos;m bringing all of it to America: the clients, the contacts, the work ethic, and the energy.</p>
              <p>My job is simple: take a great American advertising company and make it unstoppable.</p>
              <p>Big plans. Big energy. Let&apos;s gooooooo!!!</p>
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">- Tristan A. Marsh</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
