import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import YouTube from "@/components/landing/youtube";
import Twitter from "@/components/landing/twitter";
import Calendar from "@/components/landing/calendar";
import Merch from "@/components/landing/merch";
import Blog from "@/components/landing/blog";
import Socials from "@/components/landing/socials";
import Contact from "@/components/landing/contact";
import Photos from "@/components/landing/photos";
import ScrollDownButton from "@/components/buttons/scroll-down";
import ScrollUpButton from "@/components/buttons/scroll-up";
import SectionDivider from "@/components/shared/section-divider";

export default function LandingPage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain bg-linear-90 from-[#00d2ff1a] to-[#ca66fb0d]'>
      <header className='fixed z-30 mx-auto flex w-full items-center bg-background/80 backdrop-blur-md'>
        <Navbar />
      </header>

      <main>
        <section className='relative z-40 h-screen w-full overflow-hidden bg-background'>
          <Hero />
          <ScrollDownButton targetId='about' />
        </section>

        <section>
          <About />
          <YouTube />
          <Twitter />
          <SectionDivider />
          <Calendar />
          <SectionDivider />
          <Merch />
          <SectionDivider />
          <Blog />
          <Socials />
          <Contact />
          <Photos />
          <ScrollUpButton targetId='hero' />
        </section>
      </main>

      <footer className='w-full p-5'>
        <Footer />
      </footer>
    </div>
  );
}
