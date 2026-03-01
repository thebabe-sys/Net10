import type { Metadata } from 'next'
import { Footer } from './components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Net110 - Courier Logistics Solutions for Nigeria',
  description: 'Fast, reliable, and affordable logistics and courier services for Nigeria and beyond. Air freight, sea freight, and ground transport solutions.',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
