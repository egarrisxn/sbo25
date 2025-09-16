"use client";

import { useState } from "react";
import {
  ClockIcon,
  MapPinIcon,
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useCalendarEvents } from "@/hooks/use-calendar-events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EventDialog } from "@/components/calendar/event-dialog";
import { cn } from "@/lib/utils";

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
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof events)[number] | undefined
  >();
  const [dialogOpen, setDialogOpen] = useState(false);

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "prev" ? -1 : 1));
    setCurrentDate(newDate);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "stream":
        return "bg-primary text-primary-foreground";
      case "family":
        return "bg-secondary text-secondary-foreground";
      case "content":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "stream":
        return "Stream";
      case "family":
        return "Family";
      case "content":
        return "Content";
      default:
        return "Event";
    }
  };

  const formatEventTime = (event: (typeof events)[number]) => {
    const start = event.start;
    const end = event.end;
    const isAllDay =
      start.getHours() === 0 &&
      start.getMinutes() === 0 &&
      end.getHours() === 23 &&
      end.getMinutes() === 59;
    if (isAllDay) return "All day";
    return `${start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })} - ${end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
  };

  if (error)
    return (
      <div className='grid h-180 place-items-center rounded-2xl border p-6 text-center'>
        <p className='mb-4 text-lg text-destructive'>Error loading events</p>
        <p className='mb-4 text-muted-foreground'>{error}</p>
        <Button onClick={refetch} variant='outline'>
          Retry
        </Button>
      </div>
    );

  if (loading)
    return (
      <div className='grid h-180 place-items-center rounded-2xl border p-6 text-center'>
        <p className='text-muted-foreground'>Loading events...</p>
      </div>
    );

  // Generate all dates of the current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const monthDates = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(year, month, i + 1)
  );

  // Group events by date string
  const eventsByDate = events.reduce(
    (acc, event) => {
      const key = event.start.toDateString();
      if (!acc[key]) acc[key] = [];
      acc[key].push(event);
      return acc;
    },
    {} as Record<string, (typeof events)[number][]>
  );

  return (
    <div className='h-180 rounded-2xl border p-6'>
      {/* Month Navigation */}
      {showMonthNav && (
        <div className='mb-4 flex items-center justify-between'>
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

      {/* Scrollable List */}
      <div
        className='space-y-4 overflow-y-auto pr-2'
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {monthDates.map((date) => {
          const dateKey = date.toDateString();
          const dayEvents = eventsByDate[dateKey] || [];
          const isToday = new Date().toDateString() === dateKey;

          return (
            <div key={dateKey} className='space-y-2'>
              {/* Date header */}
              <div
                className={cn(
                  "flex items-center gap-3 border-b border-border pb-2",
                  isToday && "text-primary"
                )}
              >
                <h3 className='text-lg font-semibold'>
                  {date.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                {isToday && (
                  <Badge variant='secondary' className='rounded-full'>
                    Today
                  </Badge>
                )}
              </div>

              {/* Events for this day */}
              <div className='space-y-2'>
                {dayEvents.length === 0 ? (
                  <p className='text-sm text-muted-foreground'>No events</p>
                ) : (
                  dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className='cursor-pointer rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md'
                      onClick={() => {
                        setSelectedEvent(event);
                        setDialogOpen(true);
                      }}
                    >
                      <div className='mb-2 flex items-center justify-between gap-2'>
                        <h4 className='text-lg font-semibold'>{event.title}</h4>
                        <Badge
                          className={cn(
                            "rounded-full text-xs",
                            getEventTypeColor(event.type)
                          )}
                        >
                          {getEventTypeLabel(event.type)}
                        </Badge>
                      </div>

                      {event.description && (
                        <p className='mb-2 text-sm text-muted-foreground'>
                          {event.description}
                        </p>
                      )}

                      <div className='flex flex-col gap-1 text-sm text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                          <ClockIcon className='h-4 w-4' />{" "}
                          {formatEventTime(event)}
                        </div>
                        {event.location && (
                          <div className='flex items-center gap-1'>
                            <MapPinIcon className='h-4 w-4' /> {event.location}
                          </div>
                        )}
                      </div>

                      {event.url && (
                        <Button variant='ghost' size='sm' className='mt-2 px-0'>
                          <a
                            href={event.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-1 text-primary'
                          >
                            View <ExternalLinkIcon className='h-4 w-4' />
                          </a>
                        </Button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      <EventDialog
        event={selectedEvent}
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setSelectedEvent(undefined);
        }}
      />
    </div>
  );
}
