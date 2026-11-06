import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins'
})

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'CL Global Media | Outdoor Media & Corporate Sponsorship',
    template: '%s | CL Global Media',
  },
  description: 'CL GLOBAL MEDIA LLC is a corporate sponsorship and outdoor media agency that plans and buys outdoor, transport, airport, retail and digital out-of-home advertising on behalf of business clients through third-party media owners.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${inter.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
