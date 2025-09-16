import type { ReactNode } from "react";
import PagesNavbar from "@/components/pages/navbar";
import PagesFooter from "@/components/pages/footer";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <PagesNavbar />
      <main>{children}</main>
      <PagesFooter />
    </div>
  );
}
