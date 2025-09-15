import Hero from "@/components/landing/hero";
import ScrollDownButton from "@/components/buttons/scroll-down";
import ScrollUpButton from "@/components/buttons/scroll-up";
import About from "@/components/landing/about";
import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <div className='sticky top-0 z-50 w-full bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/60 [&_*]:no-underline'>
        <Navbar />
      </div>
      <main className='bg-linear-90 from-[#00d2ff1a] to-[#ca66fb0d]'>
        <section
          id='hero'
          className='relative z-40 h-screen w-full overflow-hidden'
        >
          <Hero />
          <ScrollDownButton targetId='content' />
        </section>
        <section id='content'>
          <About />
          <ScrollUpButton targetId='hero' />
        </section>
      </main>
      <footer className='flex items-center justify-center'>
        <div className='p-4'>Footer</div>
      </footer>
    </div>
  );
}
