"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { withParams } from "@/lib/calendar";

type MonthNavigationProps = {
  prev: Date;
  next: Date;
  today: Date;
};

export default function MonthNavigation({
  prev,
  next,
  today,
}: MonthNavigationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigate = (target: Date) => {
    const current = new URLSearchParams(searchParams.toString());
    router.replace(
      withParams(current, {
        year: target.getUTCFullYear(),
        month: target.getUTCMonth(),
      }),
      { scroll: false }
    );
  };

  return (
    <div className='isolate flex -space-x-px'>
      <Button
        variant='outline'
        size='sm'
        className='rounded-r-none focus:z-10'
        onClick={() => handleNavigate(prev)}
      >
        Prev
      </Button>
      <Button
        variant='outline'
        size='sm'
        className='rounded-none focus:z-10'
        onClick={() => handleNavigate(today)}
      >
        Current
      </Button>
      <Button
        variant='outline'
        size='sm'
        className='rounded-l-none focus:z-10'
        onClick={() => handleNavigate(next)}
      >
        Next
      </Button>
    </div>
  );
}
