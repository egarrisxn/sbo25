export default function GradientSection() {
  return (
    <section className='relative mx-8 overflow-hidden rounded-2xl bg-linear-150 from-blue-400 via-purple-300 to-pink-400 py-32'>
      <div className='relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6'>
        <blockquote className='mb-8 text-3xl leading-[1.3] font-medium tracking-tighter lg:text-5xl'>
          The Quality of the sounds is so professional. The app is very
          intuitive. The hardest part is having to choose a final version
        </blockquote>
        <cite className='text-end text-lg font-medium'>— UI BREAKFAST</cite>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-10 left-10 h-20 w-20 rounded-full bg-white/10'></div>
      <div className='absolute right-10 bottom-10 h-32 w-32 rounded-full bg-white/10'></div>
      <div className='absolute top-1/2 right-20 h-16 w-16 rounded-full bg-white/10'></div>
    </section>
  );
}
