import LastUpdated from "@/app/(pages)/_components/last-updated";
import ContactSnippet from "@/app/(pages)/_components/contact-snippet";
import { cookieData } from "@/lib/data";

export default function CookiePolicyPage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <section className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-accent-foreground md:mb-4 xl:text-5xl'>
              Cookie Policy
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>

          <article className='mb-10'>
            <h3 className='mb-4 text-2xl font-semibold'>Use of Cookies</h3>
            {cookieData.map((item, index) => (
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
          </article>

          <hr className='mb-6' />

          <ContactSnippet />
        </section>
      </div>
    </div>
  );
}
