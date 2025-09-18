import Black from "@/public/svgs/black.svg";
import White from "@/public/svgs/white.svg";

export function SignatureLogo() {
  return (
    <div className='flex items-center gap-2'>
      <Black className='h-10 w-auto transition-opacity duration-500 md:h-12 dark:hidden' />
      <White className='hidden h-10 w-auto transition-opacity duration-500 md:h-12 dark:block' />
    </div>
  );
}
