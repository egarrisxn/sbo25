import Hero from "@/app/(landing)/_sections/hero";
import About from "@/app/(landing)/_sections/about";
import YouTube from "@/app/(landing)/_sections/youtube";
import Twitter from "@/app/(landing)/_sections/twitter";
import Calendar from "@/app/(landing)/_sections/calendar";
import Merch from "@/app/(landing)/_sections/merch";
import Blog from "@/app/(landing)/_sections/blog";
import Socials from "@/app/(landing)/_sections/socials";
import Contact from "@/app/(landing)/_sections/contact";
import Photos from "@/app/(landing)/_sections/photos";
import Divider from "@/app/(landing)/_components/divider";

export default function LandingPage() {
  return (
    <div className='bg-linear-90 from-[#00d2ff1a] to-[#ca66fb0d]'>
      <Hero />
      <About />
      <YouTube />
      <Twitter />
      <Divider className='stroke-secondary' />
      <Calendar />
      <Divider className='stroke-accent' />
      <Merch />
      <Divider className='stroke-primary' />
      <Blog />
      <Socials />
      <Contact />
      <Photos />
    </div>
  );
}
