import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Providers from "@/components/ProgressBarProvider";
import { Github, Instagram, Laptop } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "AI Career coach for professional success with SarthiAi .",
  icons: [{ rel: "icon", url: "/sarthi1.png" }],
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
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />

              <footer className="bg-muted/50 py-4">
                <div className="container mx-auto px-4 text-center text-gray-200 ">
                  <p>Made with 💗 by Saurabh</p>
                </div>
                <div className="mt-4 flex justify-center items-center gap-4 ">
                  <Link target="_blank" href="https://www.instagram.com/ig_saurabh.x/">
                    <Instagram size={36} className="text-pink-600 hover:fill-pink-500 hover:text-sky-600 transition-all duration-300" />
                  </Link>
                  <Link target="_blank" href="https://saurabh-portfoilio.vercel.app/">
                    <Laptop size={36} className="text-cyan-600 hover:fill-cyan-500 hover:text-gray-600 transition-all duration-300" />
                  </Link>
                  <Link target="_blank" href="https://github.com/deadeye03">
                    <Github size={36} className="text-indigo-300" />
                  </Link>
                </div>
              </footer>
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
