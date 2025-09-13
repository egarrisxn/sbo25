import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className='p-2 backdrop-blur-md'>
      <div className='flex items-center p-2'>
        <div className='flex flex-1 items-center justify-start text-[1.35rem] font-extrabold tracking-tighter'>
          Sway Bae
        </div>
        <nav className='flex flex-1 items-center justify-center gap-8'>
          <div>Nav</div>
        </nav>
        <div className='flex flex-1 items-center justify-end'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
