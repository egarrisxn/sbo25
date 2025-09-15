import type { Icons } from "@/types";

const MoonIcon = ({ className = "", width = "24", height = "24" }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
    >
      <title>Moon</title>
      <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9' />
      <path d='M20 3v4' />
      <path d='M22 5h-4' />
    </svg>
  );
};

export { MoonIcon };
