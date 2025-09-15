import Image from "next/image";

export default function Hero() {
  return (
    <div id='hero'>
      <Image
        src='/landing/hero/desktop.png'
        alt='Fallback image for desktop video'
        className='absolute inset-0 hidden size-full object-cover md:block'
        height={1440}
        width={2560}
        priority
      />
      <Image
        src='/landing/hero/mobile.png'
        alt='hero photo'
        className='absolute inset-0 block size-full object-cover md:hidden'
        height={1920}
        width={1080}
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
      <div className='absolute z-30 flex size-full items-center justify-center pb-36 text-center sm:pb-24 md:pb-16 lg:pb-24'>
        <p className='font-serif text-6xl leading-none font-bold text-white text-shadow-black text-shadow-lg'>
          Hero
        </p>
      </div>
    </div>
  );
}
