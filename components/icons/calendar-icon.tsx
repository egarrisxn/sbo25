import { Icons } from "@/types";

const CalendarIcon = ({
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
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  );
};

export { CalendarIcon };
