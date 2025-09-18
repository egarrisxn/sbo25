import type { ButtonHTMLAttributes } from "react";

type DropdownButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DropdownToggle({ className, ...props }: DropdownButtonProps) {
  return (
    <button
      className={`group inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md border-2 border-border bg-primary/90 text-primary-foreground shadow-sm transition-all ${className ?? ""}`}
      // border border-primary-foreground bg-primary shadow-xs
      {...props}
    >
      <svg
        width={16}
        height={16}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path
          d='M4 12L20 12'
          className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
        />
        <path
          d='M4 12H20'
          className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
        />
        <path
          d='M4 12H20'
          className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
        />
      </svg>
    </button>
  );
}
