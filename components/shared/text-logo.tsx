import { Link } from "next-view-transitions";

export default function TextLogo() {
  return (
    <Link
      href='/'
      className='text-3xl font-black tracking-tighter text-secondary text-shadow-foreground text-shadow-sm dark:text-shadow-background dark:text-shadow-md'
    >
      Sway Bae
    </Link>
  );
}
