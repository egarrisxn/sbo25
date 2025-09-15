import { BlurItem, BlurText } from "@/components/ui/blur";
import { Video } from "@/components/ui/video";
import { Button } from "@/components/ui/button";

const text = {
  b: `Watch and learn`,
  h2: `Get inspired by my YouTube channel!`,
  p: `I post weekly content, including short form and long form videos. Make sure to like and subscribe to the channel to stay in the loop on all the updates!`,
  smBtn: `Subscribe!`,
  lgBtn: `Subscribe!`,
};

export default function YouTube() {
  return (
    <div className='bg-muted'>
      <div className='container mx-auto py-24'>
        <div className='mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:place-items-start xl:max-w-screen-xl 2xl:max-w-screen-2xl 2xl:place-items-center'>
          <section className='order-1 mx-auto flex w-full flex-col justify-center gap-1 lg:order-2 lg:mt-4 lg:gap-3 xl:max-w-xl 2xl:max-w-2xl'>
            <BlurText
              className='pb-1 tracking-wide text-muted-foreground uppercase'
              delay={0.01}
            >
              <b>{text.b}</b>
            </BlurText>
            <BlurText
              className='pb-3 font-serif text-4xl font-bold lg:text-5xl 2xl:text-6xl'
              delay={0.2}
            >
              <h2>{text.h2}</h2>
            </BlurText>
            <BlurText
              className='pb-3 font-light lg:text-lg xl:text-xl 2xl:text-2xl'
              delay={0.03}
            >
              <p>{text.p}</p>
            </BlurText>
            <BlurItem delay={0.3} className='hidden lg:block'>
              <a
                href='https://www.youtube.com/swaybaetv'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button>{text.lgBtn}</Button>
              </a>
            </BlurItem>
          </section>
          <section className='order-2 mx-auto flex w-full flex-col justify-center gap-1 lg:order-1 xl:max-w-xl 2xl:max-w-2xl'>
            <div className='relative mx-auto h-fit w-full max-w-xl overflow-hidden 2xl:max-w-2xl'>
              <Video
                className='block'
                videoAnimationStyle='from-center'
                videoSrc='https://www.youtube-nocookie.com/embed/CxDM2AicCME?si=AjzmdEHuw8ZOXTEW'
                thumbnailSrc='/landing/youtube-me.webp'
                thumbnailAlt='Alt Video'
              />
            </div>
            <BlurItem delay={0.3} className='mx-auto mt-14 lg:hidden'>
              <a
                href='https://www.youtube.com/swaybaetv'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Button size='sm'>{text.smBtn}</Button>
              </a>
            </BlurItem>
          </section>
        </div>
      </div>
    </div>
  );
}
