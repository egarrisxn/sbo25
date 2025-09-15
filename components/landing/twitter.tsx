import { BlurText } from "@/components/ui/blur";
import { Tweets } from "@/components/ui/tweets";

import { tweetGrid } from "@/lib/data";

const text = {
  b: `Keeping It Social`,
  h2: `Follow me on my adventures!`,
  p: `I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than I found it..`,
};

export default function Twitter() {
  return (
    <div className='container mx-auto py-24'>
      <div className='mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-6 px-6 xl:max-w-screen-xl 2xl:max-w-screen-2xl 2xl:px-0'>
        <section className='mx-auto flex w-full flex-col gap-1 lg:gap-3 lg:px-2 2xl:px-4'>
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
            className='max-w-6xl pb-3 font-light lg:text-lg xl:text-xl 2xl:text-2xl'
          >
            <p>{text.p}</p>
          </BlurText>
        </section>
        <section>
          <Tweets tweets={tweetGrid} />
        </section>
      </div>
    </div>
  );
}
