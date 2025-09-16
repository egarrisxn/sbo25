"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, RefreshCwIcon } from "lucide-react";
import { useCalendarEvents } from "@/hooks/use-calendar-events";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { DAYS } from "@/lib/data";
import { CalendarGrid } from "@/components/calendar/calendar-grid";
import { CalendarList } from "@/components/calendar/calendar-list";

interface HybridCalendarProps {
  initialDate: Date;
  showMonthNav?: boolean;
}

export default function HybridCalendar({
  initialDate,
  showMonthNav = true,
}: HybridCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const { events, loading, error, refetch } = useCalendarEvents(currentDate);

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "prev" ? -1 : 1));
    setCurrentDate(newDate);
  };

  return (
    <div className='rounded-2xl border bg-white p-6 shadow-lg dark:bg-muted'>
      {/* Month Navigation */}
      {showMonthNav && (
        <div className='mb-6 flex items-center justify-between'>
          <Button
            size='sm'
            onClick={() => navigateMonth("prev")}
            className='rounded-full'
          >
            <ChevronLeftIcon className='size-4' />
          </Button>

          <h2 className='text-2xl font-semibold'>
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <Button
            size='sm'
            onClick={() => navigateMonth("next")}
            className='rounded-full'
          >
            <ChevronRightIcon className='size-4' />
          </Button>
        </div>
      )}

      {/* Loading/Error Handling */}
      {loading ? (
        <>
          {/* Desktop grid skeleton */}
          <div className='hidden lg:block'>
            <div className='p-6'>
              <div className='mb-4 grid grid-cols-7 gap-2'>
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className='py-2 text-center text-sm font-medium text-muted-foreground'
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className='grid grid-cols-7 gap-2'>
                {Array.from({ length: 35 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className='aspect-square w-full animate-pulse rounded-xl'
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Mobile list skeleton */}
          <div className='block space-y-4 lg:hidden'>
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className='space-y-2 pt-1'>
                <Skeleton className='h-8 w-48 animate-pulse' />
                <Skeleton className='h-32 w-full animate-pulse rounded-xl' />
              </div>
            ))}
          </div>
        </>
      ) : error ? (
        <div className='text-center text-destructive'>
          <p>Error loading events</p>
          <Button onClick={refetch} className='mt-2'>
            <RefreshCwIcon className='mr-2 size-4' /> Try Again
          </Button>
        </div>
      ) : (
        <>
          {/* Desktop grid view */}
          <div className='hidden lg:block'>
            <CalendarGrid
              currentDate={currentDate}
              onDateChange={setCurrentDate}
              events={events}
            />
          </div>
          {/* Mobile list view */}
          <div className='block lg:hidden'>
            <CalendarList
              currentDate={currentDate}
              onDateChange={setCurrentDate}
              events={events}
            />
          </div>
        </>
      )}
    </div>
  );
}
