import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      {/* Header */}
      <Navbar />

      {/* Main */}
      <main className='flex items-center justify-center border-y-2'>
        <h1 className='font-heading text-5xl'>Main</h1>
      </main>

      {/* Footer */}
      <footer className='flex items-center justify-center p-2'>
        <div className='p-2'>Footer</div>
      </footer>
    </div>
  );
}
