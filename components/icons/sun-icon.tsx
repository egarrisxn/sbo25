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

// "use client";
// import { motion, useAnimation } from "motion/react";

// const pathVariants = {
//   normal: { opacity: 1 },
//   animate: (i: number) => ({
//     opacity: [0, 1],
//     transition: { delay: i * 0.1, duration: 0.3 },
//   }),
// };

// const SunIcon = () => {
//   const controls = useAnimation();

//   return (
//     <div
//       className='flex cursor-pointer items-center justify-center rounded-md p-2 transition-colors duration-200 select-none'
//       onMouseEnter={() => controls.start("animate")}
//       onMouseLeave={() => controls.start("normal")}
//     >
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         width={24}
//         height={24}
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeWidth={2}
//         strokeLinecap='round'
//         strokeLinejoin='round'
//       >
//         <circle cx='12' cy='12' r='4' />
//         {[
//           "M12 2v2",
//           "m19.07 4.93-1.41 1.41",
//           "M20 12h2",
//           "m17.66 17.66 1.41 1.41",
//           "M12 20v2",
//           "m6.34 17.66-1.41 1.41",
//           "M2 12h2",
//           "m4.93 4.93 1.41 1.41",
//         ].map((d, index) => (
//           <motion.path
//             key={d}
//             d={d}
//             animate={controls}
//             variants={pathVariants}
//             custom={index + 1}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// };

// export { SunIcon };
