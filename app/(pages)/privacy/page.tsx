import { Link } from "next-view-transitions";
import LastUpdated from "@/app/(pages)/_components/last-updated";
import ReusableList from "@/app/(pages)/_components/reusable-list";
import ContactSnippet from "@/app/(pages)/_components/contact-snippet";
import {
  privacyGeneralInfo,
  privacyRights,
  privacyThirdPartyServices,
  privacyUsage,
} from "@/lib/data";

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <section className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-accent-foreground md:mb-4 xl:text-5xl'>
              Privacy Policy
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>
          <article className='mb-10'>
            <ReusableList
              title='Information We Collect'
              description='We may gather the following types of information:'
              items={privacyGeneralInfo}
            />

            <ReusableList
              title='How We Use Your Information'
              description='The information collected may be utilized for:'
              items={privacyUsage}
            />

            <div className='mb-10'>
              <h3 className='mb-4 text-2xl font-semibold'>Use of Cookies</h3>
              {privacyThirdPartyServices.map((item, index) => (
                <p
                  key={index}
                  className='mb-6 text-base leading-relaxed text-muted-foreground'
                >
                  {item.link ? (
                    <>
                      <span className='font-medium'>{item.title}:</span>{" "}
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary underline-offset-4 hover:text-primary/80 hover:underline'
                      >
                        {item.linkText}
                      </a>
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              ))}
            </div>

            <ReusableList
              title='Cookies and Tracking'
              description={
                <>
                  Please see our{" "}
                  <Link
                    href='/cookies'
                    className='text-primary underline-offset-4 hover:text-primary/80 hover:underline'
                  >
                    Cookie Policy
                  </Link>{" "}
                  for more information.
                </>
              }
            />

            <ReusableList
              title='Security'
              description='We take appropriate measures to protect your information from unauthorized access or alteration, disclosure, or destruction.'
            />

            <ReusableList
              title='Your Rights'
              description='You have the right to:'
              items={privacyRights}
            />

            <ReusableList
              title='Changes to This Policy'
              description="We may update this privacy policy as our website grows or legal
            requirements change. When we do, we'll update the “Last
            Updated” date at the top of this page. Significant changes will be
            clearly communicated on the website."
            />
          </article>
          <hr className='mb-6' />

          <ContactSnippet />
        </section>
      </div>
    </div>
  );
}
