import { MobileMenu } from "@/components/navbar/mobile-menu";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { DesktopMenu } from "@/components/navbar/desktop-menu";
import { SignatureLogo } from "@/components/shared/signature-logo";

export function Navbar() {
  return (
    <nav className='container mx-auto flex max-w-screen-4xl items-center justify-between gap-2 px-4 py-3.5'>
      <section className='flex flex-1 flex-row items-center justify-start gap-2'>
        <MobileMenu />
        <SignatureLogo />
      </section>
      <section className='flex flex-1 items-center justify-center'>
        <DesktopMenu />
      </section>
      <section className='flex flex-1 items-center justify-end'>
        <ThemeToggle />
      </section>
    </nav>
  );
}
