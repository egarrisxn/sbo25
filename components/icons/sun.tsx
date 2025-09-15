import type { Icons } from "@/types";

const SunIcon = ({ className = "", width = "24", height = "24" }: Icons) => {
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
      <title>Sun</title>
      <path d='M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4' />
      <path d='M12 2v2' />
      <path d='M12 20v2' />
      <path d='m4.9 4.9 1.4 1.4' />
      <path d='m17.7 17.7 1.4 1.4' />
      <path d='M2 12h2' />
      <path d='M20 12h2' />
      <path d='m6.3 17.7-1.4 1.4' />
      <path d='m19.1 4.9-1.4 1.4' />
    </svg>
  );
};

export { SunIcon };
