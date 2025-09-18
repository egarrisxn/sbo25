import Image from "next/image";

export function FaceLogo() {
  return (
    <div className='flex w-fit flex-col'>
      <Image
        src='/shared/face-icon.png'
        alt='small sway'
        height={100}
        width={100}
        className='z-10 h-14.5 w-fit'
      />
      <p className='mt-[-24] pl-7.5 font-serif text-[4em] leading-14 font-extrabold tracking-[-0.08em] text-muted-foreground text-shadow-2xs text-shadow-white dark:text-shadow-link'>
        Sway Bae
      </p>
    </div>
  );
}
