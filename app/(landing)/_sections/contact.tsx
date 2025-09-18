import Link from "next/link";
import { MailIcon, MapPinIcon, MessageCircle, MicIcon } from "lucide-react";
import { BlurText, BlurItem } from "@/components/ui/blur";
import { ContactForm } from "@/components/resend/contact-form";

const text = {
  b: `Questions?`,
  h2: `Go ahead and reach out!`,
  p: `I would love to hear from you! Go ahead and fill out the form, shoot over an email with the email below, or reach out in our Discord channel.`,
};

export default function Contact() {
  return (
    <div className='container mx-auto py-24'>
      <div className='mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 px-6 xl:max-w-screen-xl xl:gap-0 2xl:max-w-screen-2xl 2xl:px-0'>
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
        <section className='mx-auto mt-12 grid w-full grid-cols-1 gap-16 md:gap-10 lg:grid-cols-2 xl:px-2 2xl:gap-12 2xl:px-4'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2'>
            <div>
              <div className='flex size-12 items-center justify-center rounded-full bg-blue-500/10 text-primary'>
                <MailIcon />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>Email</h3>
              <p className='my-2.5 text-muted-foreground'>
                Here to answer your questions.
              </p>
              <a
                className='font-medium text-primary'
                href='sway.bae9000@gmail.com'
              >
                sway.bae9000@gmail.com
              </a>
            </div>
            <div>
              <div className='flex size-12 items-center justify-center rounded-full bg-blue-500/10 text-primary'>
                <MessageCircle />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>Chat</h3>
              <p className='my-2.5 text-muted-foreground'>
                Discord is the place to be.
              </p>
              <a className='font-medium text-primary' href='#' target='_blank'>
                Discord Channel
              </a>
            </div>
            <div>
              <div className='flex size-12 items-center justify-center rounded-full bg-blue-500/10 text-primary'>
                <MicIcon />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>Stream</h3>
              <p className='my-2.5 text-muted-foreground'>
                Visit my Twitch to see me live!
              </p>
              <a className='font-medium text-primary' href='#' target='_blank'>
                www.twitch.tv/sway_bae
              </a>
            </div>
            <div>
              <div className='flex size-12 items-center justify-center rounded-full bg-blue-500/10 text-primary'>
                <MapPinIcon />
              </div>
              <h3 className='mt-6 text-xl font-semibold'>Events</h3>
              <p className='my-2.5 text-muted-foreground'>
                Catch me at an event near you.
              </p>
              <Link className='font-medium text-primary' href='/calendar'>
                Calendar Page
              </Link>
            </div>
          </div>
          <BlurItem delay={0.3} className='w-full'>
            <ContactForm />
          </BlurItem>
        </section>
      </div>
    </div>
  );
}
