"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";
import type { ScrollButtons } from "@/lib/types";

export function BackToTopButton({ targetId }: ScrollButtons) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className='inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#232326] to-[#353538] px-5 py-2.5 text-sm font-semibold tracking-wide text-gray-50 shadow-[inset_-4px_-4px_4px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_4px_-4px_4px_rgba(0,0,16,0.2),0px_4px_10px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.32)] transition hover:shadow-[inset_-2px_-2px_3px_rgba(0,0,16,0.25),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_2px_-2px_3px_rgba(0,0,16,0.25),0px_3px_8px_rgba(0,0,16,0.2),inset_0px_2px_3px_rgba(0,0,16,0.25),inset_0px_3px_6px_rgba(255,255,255,0.3)] active:shadow-[inset_-2px_-2px_2px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.6),inset_2px_-2px_2px_rgba(0,0,16,0.2),0px_2px_5px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.25)] disabled:cursor-not-allowed disabled:bg-gradient-to-b disabled:from-[#2b2b2d] disabled:to-[#353537] disabled:text-gray-500 disabled:shadow-none'
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

// "use client";

// import useSmoothScroll from "@/hooks/use-smooth-scroll";
// import type { ScrollButtons } from "@/lib/types";

// export function BackToTopButton({ targetId }: ScrollButtons) {
//   const scrollTo = useSmoothScroll();

//   return (
//     <button
//       type='button'
//       onClick={() => scrollTo(targetId)}
//       className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md bg-primary/80 px-3 text-sm font-medium whitespace-nowrap text-primary-foreground/80 transition-all outline-none hover:bg-primary hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
//       aria-label='Scroll to top'
//     >
//       <span className='tracking-tighter uppercase'>Back to top</span>
//       <svg
//         width={24}
//         height={24}
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         xmlns='http://www.w3.org/2000/svg'
//         className='size-3.5'
//       >
//         <path d='M5 15l7-7 7 7' />
//       </svg>
//     </button>
//   );
// }
