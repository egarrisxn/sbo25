"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, RefreshCwIcon } from "lucide-react";
import { useCalendarEvents } from "@/hooks/use-calendar-events";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  const [isDesktop, setIsDesktop] = useState(false);

  const { events, loading, error, refetch } = useCalendarEvents(currentDate);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "prev" ? -1 : 1));
    setCurrentDate(newDate);
  };

  return (
    <div className='container mx-auto max-w-7xl p-6'>
      <div className='mb-8'>
        <h1 className='mb-2 text-4xl font-bold text-foreground'>My Calendar</h1>
        <p className='text-lg text-muted-foreground'>
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <Card className='rounded-2xl border-0 bg-card p-6 shadow-lg'>
        {/* Month Navigation */}
        {showMonthNav && (
          <div className='mb-6 flex items-center justify-between'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => navigateMonth("prev")}
              className='rounded-xl'
            >
              <ChevronLeftIcon className='h-4 w-4' />
            </Button>

            <h2 className='text-2xl font-semibold'>
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <Button
              variant='outline'
              size='sm'
              onClick={() => navigateMonth("next")}
              className='rounded-xl'
            >
              <ChevronRightIcon className='h-4 w-4' />
            </Button>
          </div>
        )}

        {/* Loading/Error Handling */}
        {loading ? (
          <p className='text-center text-muted-foreground'>Loading events...</p>
        ) : error ? (
          <div className='text-center text-destructive'>
            <p>Error loading events</p>
            <Button onClick={refetch} className='mt-2'>
              <RefreshCwIcon className='mr-2 h-4 w-4' /> Try Again
            </Button>
          </div>
        ) : isDesktop ? (
          <CalendarGrid
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            events={events}
          />
        ) : (
          <CalendarList
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            events={events}
          />
        )}
      </Card>
    </div>
  );
}
