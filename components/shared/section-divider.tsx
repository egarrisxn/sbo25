export default function SectionDivider() {
  return (
    <div className='h-32 w-full overflow-hidden'>
      <svg
        viewBox='0 0 1200 200'
        preserveAspectRatio='none'
        className='size-full'
      >
        <path
          d='
            M0,100
            C300,0 900,200 1200,100
          '
          fill='none'
          strokeWidth={3}
          className='stroke-secondary'
        />
      </svg>
    </div>
  );
}
