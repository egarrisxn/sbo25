import { Icons } from "@/types";

const PlayIcon = ({
  className = "",
  width = "24",
  height = "24",
  strokeWidth = "2",
}: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
        d='m6 3l14 9l-14 9z'
      ></path>
    </svg>
  );
};

export { PlayIcon };
