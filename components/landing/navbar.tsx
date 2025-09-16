import MobileMenu from "@/components/navbar/mobile-menu";
import ThemeToggleButton from "@/components/buttons/theme-toggle";
import DesktopMenu from "@/components/navbar/desktop-menu";
import Signature from "@/components/shared/signature-logo";

export default function LandingNavbar() {
  return (
    <header className='fixed z-30 mx-auto flex w-full items-center bg-background/80 backdrop-blur-md'>
      <nav className='container mx-auto flex max-w-screen-4xl items-center justify-between gap-2 px-4 py-3.5'>
        <section className='flex flex-1 flex-row items-center justify-start gap-2'>
          <MobileMenu />
          <Signature />
        </section>
        <section className='flex flex-1 items-center justify-center'>
          <DesktopMenu />
        </section>
        <section className='flex flex-1 items-center justify-end'>
          <ThemeToggleButton />
        </section>
      </nav>
    </header>
  );
}
