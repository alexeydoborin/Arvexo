import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Cormorant, JetBrains_Mono, Onest } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { LangProvider } from "@/context/LangContext";
import { SEO_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, structuredData } from "@/lib/seo";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-onest",
  display: "swap"
});

const cormorant = Cormorant({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: SEO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Arvexo AI ecosystem"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SEO_IMAGE]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/images/arvexo-apple-icon.png"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EEEBE3"
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get("x-locale") === "ru" ? "ru" : "en";

  return (
    <html
      lang={lang}
      className={`${onest.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-onest), ui-sans-serif, system-ui, -apple-system, sans-serif"
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LangProvider defaultLang="en">
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
        <ScrollAnimator />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=111891901', 'ym');

            ym(111891901, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
          <noscript>
            <div>
              {/* Tracking pixel must remain a plain image so it works without JavaScript. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://mc.yandex.ru/watch/111891901" style={{ position: "absolute", left: "-9999px" }} alt="" />
            </div>
        </noscript>
      </body>
    </html>
  );
}
