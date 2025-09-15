import { Icons } from "@/types";

const PlusIcon = ({ className = "", width = "24", height = "24" }): Icons => {
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
        strokeWidth={2}
        d='M12 5v14m-7-7h14'
      ></path>
    </svg>
  );
};

export { PlusIcon };
