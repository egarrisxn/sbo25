"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";
import type { ScrollButtons } from "@/types";

export default function BackToTopButton({ targetId }: ScrollButtons) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md bg-accent/80 px-3 text-sm font-medium whitespace-nowrap text-accent-foreground/80 transition-all outline-none hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      aria-label='Scroll to top'
    >
      <span className='tracking-tighter uppercase'>Back to top</span>
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
        className='size-3.5'
      >
        <path d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
}
