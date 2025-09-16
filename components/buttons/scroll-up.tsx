"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";
import type { ScrollButtons } from "@/types";

export default function ScrollUpButton({ targetId }: ScrollButtons) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className='fixed right-4 bottom-4 z-10 cursor-pointer rounded-full bg-white p-3 text-foreground shadow-lg transition-transform hover:scale-110 dark:bg-black dark:shadow-none'
      aria-label='Scroll up'
    >
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
        className='size-6 text-foreground'
      >
        <path d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
}
