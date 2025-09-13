import type { Metadata, Viewport } from "next";
import { Poppins, Noto_Serif, Rubik_Doodle_Shadow } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider, TooltipProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const rubik = Rubik_Doodle_Shadow({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  display: "swap",
  variable: "--font-rubik",
});

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "SBO25",
  description: "SBO25",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7f9fe" },
    { media: "(prefers-color-scheme: dark)", color: "#000f19" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${rubik.variable} ${poppins.variable} ${notoSerif.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            <Toaster richColors position='bottom-center' />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
