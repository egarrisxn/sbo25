import { Link } from "next-view-transitions";
import { BlurItem, BlurText } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";
import LandingCalendar from "@/components/calendar/landing-calendar";

const text = {
  b: `Stay up to date`,
  h2: `Check what is next on the calendar!`,
  p: `I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than it was.`,
};

export default function CalendarSection() {
  return (
    <div className='container mx-auto py-24'>
      <div className='mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:place-items-start xl:max-w-screen-xl 2xl:place-items-center 2xl:gap-16 2xl:px-0'>
        <section className='order-1 mx-auto flex w-full flex-col justify-center gap-1 lg:order-2 lg:mt-4 lg:gap-3 xl:max-w-xl 2xl:mt-0'>
          <BlurText
            delay={0.1}
            className='pb-1 tracking-wide text-muted-foreground uppercase'
          >
            <b>{text.b}</b>
          </BlurText>
          <BlurText
            delay={0.2}
            className='pb-3 font-serif text-4xl font-bold lg:text-5xl 2xl:text-6xl'
          >
            <h2>{text.h2}</h2>
          </BlurText>
          <BlurText
            delay={0.3}
            className='pb-3 font-light lg:text-lg xl:text-xl 2xl:text-2xl'
          >
            <p>{text.p}</p>
          </BlurText>
          <BlurItem delay={0.3}>
            <Link href='/calendar'>
              <Button size='lg'>Check Schedule</Button>
            </Link>
          </BlurItem>
        </section>
        <section className='order-2 mx-auto flex w-full flex-col justify-center lg:order-1 xl:max-w-xl'>
          <LandingCalendar />
        </section>
      </div>
    </div>
  );
}
