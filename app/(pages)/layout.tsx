import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import PagesFooter from "@/app/(pages)/_components/pages-footer";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <Navbar />
      <main>{children}</main>
      <PagesFooter />
    </div>
  );
}
