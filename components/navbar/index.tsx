import MobileMenu from "@/components/navbar/mobile-menu";
import ThemeToggleButton from "@/components/buttons/theme-toggle";
import DesktopMenu from "@/components/navbar/desktop-menu";
import TextLogo from "@/components/shared/text-logo";

export default function Navbar() {
  return (
    // <header className='sticky top-0 z-50 w-full bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/60 [&_*]:no-underline'>
    <nav className='container mx-auto flex max-w-screen-4xl items-center justify-between gap-2 p-4'>
      <section className='flex flex-1 flex-row items-center justify-start gap-2'>
        <MobileMenu />
        <TextLogo />
      </section>
      <section className='flex flex-1 items-center justify-center'>
        <DesktopMenu />
      </section>
      <section className='flex flex-1 items-center justify-end'>
        <ThemeToggleButton />
      </section>
    </nav>
  );
}
