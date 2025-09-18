import type { ReactNode } from "react";
import { ScrollUpButton } from "@/app/(landing)/_components/scroll-up";
import { Navbar } from "@/components/navbar";
import LandingFooter from "@/app/(landing)/_components/landing-footer";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <header className='fixed z-30 mx-auto flex w-full items-center bg-background/80 backdrop-blur-md'>
        <Navbar />
      </header>
      <main>{children}</main>
      <LandingFooter />
      <ScrollUpButton targetId='hero' />
    </div>
  );
}
