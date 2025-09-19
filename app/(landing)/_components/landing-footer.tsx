import { SpotifyNowPlaying } from "@/app/(landing)/_components/spotify-now-playing";
import { LinkList } from "@/components/shared/link-list";
import { LinkRenderer } from "@/components/shared/link-renderer";
import { FaceLogo } from "@/components/shared/face-logo";
import { SocialIcon } from "@/components/shared/social-icon";
import { CopyrightText } from "@/components/shared/copyright-text";
import { NewsletterForm } from "@/components/resend/newsletter-form";
import { BackToTopButton } from "@/app/(landing)/_components/back-to-top";
import {
  footerLinksOne,
  footerLinksTwo,
  sharedFooterLinks,
  socialData,
} from "@/lib/data";

export default function LandingFooter() {
  return (
    <footer className='pt-6 md:px-6 md:pb-6'>
      <div className="z-0 mx-auto w-full max-w-screen-5xl rounded-t-3xl bg-shaded bg-[url('/grainy.png')] bg-repeat pt-6 md:rounded-3xl md:pt-12 md:pb-6 md:shadow-lg">
        <div className='px-4 pt-16 pb-12 sm:px-6 lg:px-8 xl:px-16 2xl:px-24'>
          <div className='flex flex-wrap gap-10 lg:justify-between lg:gap-0'>
            <section className='order-2 mb-2 flex w-[75%] flex-col gap-16 md:order-1 md:mb-8 lg:mb-0 lg:w-[30%] lg:gap-18 xl:w-[25%]'>
              <div className='order-2 md:order-1 lg:mt-[-24]'>
                <FaceLogo />
              </div>
              <div className='order-1 md:order-2'>
                <SpotifyNowPlaying />
              </div>
            </section>

            <section className='order-1 flex w-full flex-col gap-8 text-shaded-foreground md:order-2 md:flex-row md:justify-between md:gap-0 lg:w-[65%] xl:w-[60%]'>
              <LinkList title='Quick Links' links={footerLinksOne} />
              <LinkList title='More Links' links={footerLinksTwo} />
              <div className='order-1 mb-8 md:order-2 lg:mb-0'>
                <h4 className='mb-6 text-sm font-medium'>Newsletter</h4>
                <p className='mb-1.5 text-sm'>
                  Subscribe for the <span className='font-bold'>latest</span>{" "}
                  updates!
                </p>

                <NewsletterForm />

                <div className='hidden flex-row items-center gap-4 text-shaded-foreground lg:mt-9 lg:flex'>
                  {socialData.map(({ id, title, href, className, Icon }) => (
                    <SocialIcon
                      key={id}
                      id={id}
                      title={title}
                      href={href}
                      Icon={Icon}
                      className={`group transition-color size-4.5 text-shaded-foreground hover:text-link lg:size-5 ${className ?? ""}`}
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

        <section className='flex flex-col flex-wrap items-center justify-center gap-4 border-t pt-8 pb-2 text-shaded-foreground lg:flex-row lg:justify-between lg:gap-0 lg:px-8 xl:px-16 2xl:px-24'>
          <ul className='flex flex-wrap items-center gap-1 lg:gap-1.5'>
            {sharedFooterLinks.map(({ href, label, icon, external }, i) => (
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
                {i < sharedFooterLinks.length - 1 && label !== "RSS" && (
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
    </footer>
  );
}
