import type { Metadata } from 'next'
import { GoogleAnalytics } from '@/components/google-analytics'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  )
}
