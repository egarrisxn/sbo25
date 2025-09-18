"use client";

import { useCalendarEvents } from "@/hooks/use-calendar-events/mock"; //! DEVELOPMENT
// import { useCalendarEvents } from "@/hooks/use-calendar-events"; //! PRODUCTION

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, RefreshCwIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { CalendarList } from "@/components/calendar/calendar-list";

interface LandingCalendarProps {
  initialDate?: Date;
  maxHeight?: number;
  showMonthNav?: boolean;
}

export default function LandingCalendar({
  initialDate,
  maxHeight = 600,
  showMonthNav = true,
}: LandingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const { events, loading, error, refetch } = useCalendarEvents(currentDate);

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "prev" ? -1 : 1));
    setCurrentDate(newDate);
  };

  return (
    <div className='borde-border h-180 rounded-xl border bg-white p-6 shadow-lg dark:bg-muted'>
      {/* Month Navigation */}
      {showMonthNav && (
        <div className='mb-4 flex items-center justify-between'>
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
        <div
          className='space-y-4 overflow-y-auto pr-2'
          style={{ maxHeight: `${maxHeight}px` }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className='space-y-2 pt-1'>
              <Skeleton className='h-8 w-48 animate-pulse' />
              <Skeleton className='h-32 w-full animate-pulse rounded-xl' />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className='grid h-180 place-items-center text-center'>
          <div>
            <p className='mb-2 text-lg text-destructive'>
              Error loading events
            </p>
            <p className='mb-2 text-muted-foreground'>{error}</p>
            <Button onClick={refetch}>
              <RefreshCwIcon className='mr-2 size-4' /> Try Again
            </Button>
          </div>
        </div>
      ) : (
        <div
          className='overflow-y-auto pr-2'
          style={{ maxHeight: `${maxHeight}px` }}
        >
          {/* Calendar list view */}
          <CalendarList
            events={events}
            currentDate={currentDate}
            onDateChange={setCurrentDate}
          />
        </div>
      )}
    </div>
  );
}
