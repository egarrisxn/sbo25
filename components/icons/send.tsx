import type { Icons } from "@/types";

const SendIcon = ({ className = "", width = "24", height = "24" }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
    >
      <title>Send</title>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='m6 12l-3 9l18-9L3 3zm0 0h6'
      ></path>
    </svg>
  );
};

export { SendIcon };
