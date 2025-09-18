interface DividerProps {
  className: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className='h-40 w-full overflow-hidden'>
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
          className={className}
        />
      </svg>
    </div>
  );
}
