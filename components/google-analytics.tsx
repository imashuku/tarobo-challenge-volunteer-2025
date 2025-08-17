'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim()

  if (!gaId) {
    console.log('GA: No measurement ID found')
    return null
  }
  
  // デバッグ用（後で削除）
  console.log('GA: Measurement ID:', JSON.stringify(gaId))
  console.log('GA: Environment:', process.env.NODE_ENV)

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}