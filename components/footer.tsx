import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Leadership" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Use" },
  { href: "/terms-of-business", label: "Terms of Business" },
  { href: "/cancellation-refund-policy", label: "Cancellation/Refund" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Legal Disclaimer" },
  { href: "/accessibility-statement", label: "Accessibility" },
  { href: "/data-request", label: "Data Rights" },
]

const services = [
  "Outdoor media planning and buying",
  "Transport advertising",
  "Airport advertising",
  "Retail advertising",
  "Digital out-of-home advertising",
  "Corporate sponsorship",
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="relative size-12">
                <Image src="/images/logo.png" alt="CL Global Media logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-semibold text-white"><span className="text-[#d4af37]">CL</span> Global Media</span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Corporate sponsorship and outdoor media agency planning and buying outdoor, transport, airport, retail, and digital out-of-home advertising for business clients through third-party media owners.
            </p>
            <div className="flex flex-col gap-2 text-xs leading-relaxed text-white/70">
              <p>CL GLOBAL MEDIA LLC is a limited liability company organised under the laws of the State of New Mexico, USA.</p>
              <p>Entity No. 7521073.</p>
              <p>CL Global Media is a brand used under licence.</p>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="mb-6 text-lg font-semibold text-white">Quick Links</h2>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#d4af37]">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-[#d4af37]/50" />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Our Services</h2>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service} className="inline-flex items-start gap-2 text-sm text-white/60">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[#d4af37]/50" />{service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-semibold text-white">Contact Us</h2>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li>
                <a href="tel:+15852150461" className="flex items-start gap-3 transition-colors hover:text-[#d4af37]">
                  <Phone aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />+1 (585) 215-0461
                </a>
              </li>
              <li>
                <a href="mailto:enquiries@clglobalmedia.com" className="flex items-start gap-3 break-all transition-colors hover:text-[#d4af37]">
                  <Mail aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />enquiries@clglobalmedia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />
                <span><strong className="block text-white">Mailing address (correspondence only)</strong>CL GLOBAL MEDIA LLC<br />99 Wall Street<br />New York, NY 10005<br />USA</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />
                <span><strong className="block text-white">Operating address</strong>1875 Mission Street, Suites 103-106<br />San Francisco, CA 94103<br />USA</span>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/50">Our team works remotely and meets clients by appointment only.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal Documents &amp; Policies</h2>
          <nav aria-label="Legal documents">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-[#d4af37]">
                    <span aria-hidden="true" className="size-1 rounded-full bg-[#d4af37]/30" />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/40">&copy; 2026 CL GLOBAL MEDIA LLC.</p>
        </div>
      </div>
    </footer>
  )
}
