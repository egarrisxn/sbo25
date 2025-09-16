import Image from "next/image";
import { Link } from "next-view-transitions";
import { BlurItem, BlurText } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { blogList } from "@/lib/data";

const text = {
  b: `Latest Blog Posts`,
  btn: `Read More`,
};

export default function Blog() {
  return (
    <div className='container mx-auto pt-24'>
      <div className='mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-6 lg:gap-8 xl:max-w-screen-xl xl:gap-0 2xl:max-w-screen-2xl'>
        <section className='order-1 mx-auto flex w-full flex-col justify-center gap-3 p-4 pt-16 md:order-2 lg:gap-5 lg:pt-0 xl:max-w-xl 2xl:max-w-2xl 2xl:px-6'>
          <BlurText
            className='mx-auto flex items-center tracking-wide text-muted-foreground uppercase 2xl:text-lg 2xl:tracking-normal'
            delay={0.1}
          >
            <b>{text.b}</b>
          </BlurText>
          <BlurItem delay={0.2}>
            {blogList.map(({ id, title, href }) => (
              <div
                key={id}
                className='mt-1.5 mb-0.5 border-b border-foreground pb-8 md:pb-4 lg:p-8'
              >
                <Link href={href}>
                  <div className='group flex flex-row justify-between gap-2 font-light tracking-widest md:text-lg'>
                    <div className='p-1'>
                      <p>{id}</p>
                    </div>
                    <div className='flex-1 p-1 group-hover:underline group-hover:underline-offset-4'>
                      <p>{title}</p>
                    </div>
                    <div className='flex items-center p-1'>
                      <ArrowRight
                        width={16}
                        height={16}
                        strokeWidth={1.5}
                        className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </BlurItem>
          <BlurItem
            delay={0.2}
            className='mt-12 flex items-center justify-center lg:mt-12'
          >
            <Link href='/blog'>
              <Button>{text.btn}</Button>
            </Link>
          </BlurItem>
        </section>
        <section className='relative order-2 mx-auto flex w-full justify-center md:order-1 xl:max-w-xl 2xl:max-w-2xl'>
          <Image
            src='/landing/blog-me.png'
            alt='Another cutout photo of Sway'
            width={550}
            height={900}
            className='max-w-80 xs:max-w-96 sm:max-w-full'
          />
        </section>
      </div>
    </div>
  );
}
