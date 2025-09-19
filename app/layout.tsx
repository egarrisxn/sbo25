import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Truculenta } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/app/_providers/theme";
import { TooltipProvider } from "@/app/_providers/tooltip";
import { Toaster } from "@/components/ui/sonner";
// import { CookieBanner } from "@/components/shared/cookie-banner";
// import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const truculenta = Truculenta({
  variable: "--font-trunculenta",
});

export const metadata: Metadata = {
  title: "Sway Bae Official",
  description: "Sway Bae Official",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7f9fe" },
    { media: "(prefers-color-scheme: dark)", color: "#000f19" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <head>
          <meta name='apple-mobile-web-app-title' content='Sway Bae Official' />
          {/* <Script
            id='gtag-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
              gtag('js', new Date());
              gtag('config', 'G-823SZT7XNY', { anonymize_ip: true });
            `,
            }}
          /> */}
        </head>
        <body
          className={`${poppins.variable} ${truculenta.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            {/* <CookieBanner /> */}
            <Toaster richColors position='bottom-center' />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
