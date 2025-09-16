"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";
import type { ScrollButtons } from "@/types";

export default function ScrollDownButton({ targetId }: ScrollButtons) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className='absolute bottom-5 left-1/2 z-30 -translate-x-1/2 animate-bounce rounded-full p-3 transition-transform hover:scale-110'
      aria-label='Scroll down'
    >
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        xmlns='http://www.w3.org/2000/svg'
        className='size-8 text-white drop-shadow-lg'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </button>
  );
}
