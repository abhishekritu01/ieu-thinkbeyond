import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEU",
  description: "IEU - Hands-On School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag for Ads */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17086159771"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17086159771');
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Custom Click + Form Tracking */}
        <Script
          id="custom-event-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                if (e.target.closest('a[href*="register"]')) {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17086159771/Y5PnCOmaxc4aEJu3qNM_'
                  });
                }
                if (e.target.closest('a[href*="/wa.me/+918951258207"]')) {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17086159771/bvKqCOaaxc4aEJu3qNM_'
                  });
                }
                if (
                  e.target.closest('button') &&
                  e.target.innerText.toLowerCase().includes('register now')
                ) {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17086159771/LoObCOOaxc4aEJu3qNM_'
                  });
                }
              });

              document.addEventListener('submit', function(e) {
                gtag('event', 'form_submit', {
                  send_to: 'AW-17086159771/FORM_SUBMIT_EVENT_ID'
                });
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
