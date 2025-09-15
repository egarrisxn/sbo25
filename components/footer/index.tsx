import SpotifyFiller from "@/components/footer/spotify-now-playing";
import NewsletterForm from "@/components/footer/newsletter-form";
import LinkList from "@/components/footer/link-list";
import LinkRenderer from "@/components/shared/link-renderer";
import FaceLogo from "@/components/shared/face-logo";
import SocialIcon from "@/components/shared/social-icon";
import CopyrightText from "@/components/shared/copyright-text";
import BackToTopButton from "@/components/buttons/back-to-top";

import {
  footerLinksOne,
  footerLinksTwo,
  footerLinksThree,
  socialData,
} from "@/lib/data";

export default function Footer() {
  return (
    <div className='mx-auto w-full max-w-screen-5xl rounded-3xl bg-muted pt-12 pb-6'>
      <div className='px-4 pt-16 pb-12 sm:px-6 lg:px-8 xl:px-16 2xl:px-24'>
        <div className='flex flex-wrap gap-10 lg:justify-between lg:gap-0'>
          <section className='order-2 mb-2 flex w-[75%] flex-col gap-16 md:order-1 md:mb-8 lg:mb-0 lg:w-[30%] lg:gap-18 xl:w-[25%]'>
            <div className='order-2 md:order-1 lg:mt-[-24]'>
              <FaceLogo />
            </div>
            <div className='order-1 md:order-2'>
              <SpotifyFiller />
              {/* <SpotifyNowPlaying /> */}
            </div>
          </section>

          <section className='order-1 flex w-full flex-col gap-8 md:order-2 md:flex-row md:justify-between md:gap-0 lg:w-[65%] xl:w-[60%]'>
            <LinkList title='Quick Links' links={footerLinksOne} />
            <LinkList title='More Links' links={footerLinksTwo} />
            <div className='order-1 mb-8 md:order-2 lg:mb-0'>
              <h4 className='mb-6 text-sm font-medium'>Newsletter</h4>
              <p className='text-sm'>
                Subscribe for the <span className='font-bold'>latest</span>{" "}
                updates!
              </p>
              <p className='mb-1.5 text-xs text-foreground/60 italic'>
                Unsubscribe any time.
              </p>
              <NewsletterForm />

              <div className='hidden flex-row items-center gap-4 lg:mt-9 lg:flex'>
                {socialData.map(({ id, title, href, className, Icon }) => (
                  <SocialIcon
                    key={id}
                    id={id}
                    title={title}
                    href={href}
                    Icon={Icon}
                    className={`size-4.5 lg:size-5 ${className ?? ""}`}
                  />
                ))}
              </div>
              <div className='hidden md:mt-11 md:flex lg:mt-13 lg:mr-1 lg:justify-end'>
                <BackToTopButton targetId='hero' />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className='flex flex-col flex-wrap items-center justify-center gap-4 border-t pt-8 pb-2 lg:flex-row lg:justify-between lg:gap-0 lg:px-8 xl:px-16 2xl:px-24'>
        <ul className='flex flex-wrap items-center gap-1 lg:gap-1.5'>
          {footerLinksThree.map(({ href, label, icon, external }, i) => (
            <li
              key={label}
              className='flex items-center text-xs font-medium tracking-tight lg:text-base'
            >
              <LinkRenderer
                href={href}
                label={label}
                icon={icon}
                external={external}
              />
              {i < footerLinksThree.length - 1 && label !== "RSS" && (
                <span className='pl-1 lg:pl-1.5' aria-hidden='true'>
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className='flex flex-row items-center gap-3 lg:hidden'>
          {socialData.map(({ id, title, href, className, Icon }) => (
            <SocialIcon
              key={id}
              id={id}
              title={title}
              href={href}
              Icon={Icon}
              className={`size-4 ${className ?? ""}`}
            />
          ))}
        </div>
        <p className='text-xs font-medium tracking-tight lg:text-base'>
          <CopyrightText />
        </p>
      </section>
    </div>
  );
}
