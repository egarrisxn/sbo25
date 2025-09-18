import Image from "next/image";
import LastUpdated from "@/app/(pages)/_components/last-updated";
import ContactSnippet from "@/app/(pages)/_components/contact-snippet";

export default function MediaKit2Page() {
  return (
    <section className='min-h-screen w-full pt-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <div className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-accent-foreground md:mb-4 xl:text-5xl'>
              Media Kit
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </div>

          <p className='mb-10 text-muted-foreground'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim ,{" "}
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link underline-offset-4 hover:underline'
            >
              <em>Random Link Example</em>
            </a>{" "}
            id est laborum.
          </p>

          <div className='mb-10'>
            <h2 className='mb-0.5 font-medium text-accent-foreground'>
              Approved Photos
            </h2>
            <p className='mb-6 text-muted-foreground italic'>
              You are free to use these photos digitally as long as you send me
              a link at:{" "}
              <a
                href='mailto:sway.bae9000@gmail.com'
                className='text-link underline-offset-4 hover:underline'
              >
                sway.bae9000@gmail.com
              </a>{" "}
              and let me know where they are being used.
            </p>

            <div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <div>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'
                >
                  <Image
                    src='/grid/1.jpg'
                    width={300}
                    height={450}
                    alt='alt 1'
                    className='rounded-lg border-2'
                  />
                </a>
                <h5 className='mt-1 text-sm'>Description</h5>
              </div>
              <div>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'
                >
                  <Image
                    src='/grid/2.jpg'
                    width={300}
                    height={450}
                    alt='Alt 2'
                    className='rounded-lg border-2'
                  />
                </a>
                <h5 className='mt-1 text-sm'>Description</h5>
              </div>
              <div>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'
                >
                  <Image
                    src='/grid/5.jpg'
                    width={300}
                    height={450}
                    alt='Alt 3'
                    className='rounded-lg border-2'
                  />
                </a>
                <h5 className='mt-1 text-sm'>Description</h5>
              </div>
              <div>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'
                >
                  <Image
                    src='/grid/6.jpg'
                    width={300}
                    height={450}
                    alt='Alt 4'
                    className='rounded-lg border-2'
                  />
                </a>
                <h5 className='mt-1 text-sm'>Description</h5>
              </div>
            </div>
          </div>

          <hr className='mb-6' />

          <ContactSnippet />
        </div>
      </div>
    </section>
  );
}
