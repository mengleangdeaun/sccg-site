import type { Metadata } from "next"
import { Geist_Mono, Kantumruy_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const kantumruyPro = Kantumruy_Pro({
  subsets: ["khmer"],
  variable: "--font-khmer",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Add this metadata export
export const metadata: Metadata = {
  metadataBase: new URL("https://www.scc-group.asia"),
  title: {
    default: "SCC Group | Heat Insulation & Construction Materials",
    template: "%s | SCC Group" // This will make page titles look like "About | SCC Group"
  },
  description: "SCC Group provides high-quality products that solve core infrastructure problems in Cambodia, specializing in heat protection window films, rockwool, and heat protective paints.",
  openGraph: {
    title: "SCC Group | High-Quality Products & Services",
    description: "Contributing to the development of Cambodia since 2007 by importing and distributing premium heat insulation and construction materials.",
    url: "https://www.scc-group.asia",
    siteName: "SCC Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/DNA.jpg", 
        width: 1200,
        height: 630,
        alt: "SCC Group Cambodia",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SCC Group | Heat Insulation & Construction Materials",
    description: "Specializing in heat protection window films, acoustic foam, and construction materials in Cambodia.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", kantumruyPro.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}