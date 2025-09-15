import type { Icons } from "@/types";

const MenuIcon = ({ className = "", width = "24", height = "24" }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='-5 -7 24 24'
      className={className}
    >
      <path
        fill='currentColor'
        d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2'
      ></path>
    </svg>
  );
};

export { MenuIcon };
