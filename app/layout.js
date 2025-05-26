import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

import { Github, Instagram, Laptop, Linkedin } from "lucide-react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from "@/components/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SarthiAi - Your AI Career Coach for Professional Success",
  description:
    "Boost your career with SarthiAi, the leading AI-powered career coach. Get personalized guidance, professional growth strategies, and achieve success in your career journey.",
  icons: [{ rel: "icon", url: "/sarthi1.png" }],
  keywords: [
    "SarthiAi",
    "ats score",
    "AI career coach",
    "professional success",
    "career growth",
    "job guidance",
    "ats score checker",
    "resume builder",
    "career development",
    "AI coaching",
  ],
  openGraph: {
    title: "SarthiAi - AI Career Coach for Professional Success",
    description:
      "Achieve your career goals with SarthiAi's personalized AI-driven coaching and career development strategies.",
    url: "https://sarthi-ai.click",
    siteName: "SarthiAi",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "SarthiAi - AI Career Coach",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sarthi-ai.click",
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/sarthi1.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"

          >

            <Header />
            <main className="min-h-screen">
              <Providers>
                {children}


              </Providers>
            </main>
            <Analytics />
            <SpeedInsights />
            <Toaster richColors />

            <footer className="bg-muted/50 py-4">
              <div className="container mx-auto px-4 text-center text-gray-200 ">
                <p>Made with 💗 by Saurabh</p>
              </div>
              <div className="mt-4 flex justify-center items-center gap-4 ">
                <Link target="_blank" href="https://www.linkedin.com/in/saurabh-kr-a99236264/">
                  <Linkedin size={36} className="text-pink-600 hover:fill-pink-500 hover:text-sky-600 transition-all duration-300" />
                </Link>
                {/* <Link target="_blank" href="https://www.instagram.com/ig_saurabh.x/">
                    <Instagram size={36} className="text-pink-600 hover:fill-pink-500 hover:text-sky-600 transition-all duration-300" />
                  </Link> */}
                <Link target="_blank" href="https://saurabh-portfoilio.vercel.app/">
                  <Laptop size={36} className="text-cyan-600 hover:fill-cyan-500 hover:text-gray-600 transition-all duration-300" />
                </Link>
                <Link target="_blank" href="https://github.com/deadeye03">
                  <Github size={36} className="text-indigo-300" />
                </Link>
              </div>
            </footer>

          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
