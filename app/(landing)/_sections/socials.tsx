import { SocialCard } from "@/app/(landing)/_components/social-card";
import { socialData } from "@/lib/data";

export default function Socials() {
  return (
    <section className='bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950'>
      <div className='space-y-4 py-12 md:space-y-6 md:p-14 lg:pb-16 xl:pt-[4.5rem] xl:pb-20 2xl:space-y-6'>
        <h5 className='text-center text-xs font-semibold text-white uppercase md:text-sm lg:text-base'>
          Lets get social
        </h5>
        <div className='flex flex-wrap items-center justify-center gap-4 px-4 sm:gap-6 md:gap-8 md:px-8 2xl:px-0'>
          {socialData.map((social) => (
            <SocialCard key={social.id} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
