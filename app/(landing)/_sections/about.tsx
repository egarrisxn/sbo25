import Image from "next/image";
import { Link } from "next-view-transitions";
import { BlurText, BlurItem } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";

const text = {
  b: `HEYA!`,
  h2: `I'm Sway.`,
  p: `I'm a Full-Time Content Creator, currently partnered with Twitch and YouTube, streaming and releasing videos throughout the week. I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than I found it.`,
  btn: `Learn more`,
};

export default function About() {
  return (
    <div className='container mx-auto pt-24'>
      <div
        id='about'
        className='mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-6 lg:gap-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl'
      >
        <section className='mx-auto flex w-full flex-col justify-center gap-3 pt-16 lg:gap-5 lg:pt-0 xl:max-w-xl 2xl:max-w-2xl'>
          <BlurText
            delay={0.1}
            className='text-xl tracking-wide text-muted-foreground uppercase md:text-lg lg:text-2xl'
          >
            <b>{text.b}</b>
          </BlurText>
          <BlurText
            delay={0.2}
            className='pb-4 font-serif text-6xl font-black tracking-tight md:text-7xl lg:text-9xl lg:leading-none'
          >
            <h2>{text.h2}</h2>
          </BlurText>
          <BlurText
            delay={0.3}
            className='pb-3 font-light md:text-lg lg:text-xl 2xl:text-2xl'
          >
            <p>{text.p}</p>
          </BlurText>
          <BlurItem delay={0.2}>
            <Link href='/about'>
              <Button size='lg'>{text.btn}</Button>
            </Link>
          </BlurItem>
        </section>
        <section className='mx-auto flex w-full justify-center xl:max-w-xl 2xl:max-w-2xl'>
          <Image
            src='/landing/about-me.png'
            alt='A cutout photo of Sway'
            width={640}
            height={1320}
            className='max-w-80 xs:max-w-96 sm:max-w-full'
          />
        </section>
      </div>
    </div>
  );
}
