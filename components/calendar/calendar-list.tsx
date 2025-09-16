"use client";

import { ClockIcon, MapPinIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type CalendarEvent } from "@/types";

interface CalendarListProps {
  events: CalendarEvent[];
  currentDate?: Date;
  onDateChange?: (date: Date) => void;
}

export function CalendarList({ events }: CalendarListProps) {
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

  const formatEventTime = (event: CalendarEvent) => {
    const start = event.start;
    const end = event.end;
    const isAllDay =
      start.getHours() === 0 &&
      start.getMinutes() === 0 &&
      end.getHours() === 23 &&
      end.getMinutes() === 59;
    if (isAllDay) return "All day";
    const startTime = start.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const endTime = end.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${startTime} - ${endTime}`;
  };

  // Group events by date
  const eventsByDate = events.reduce(
    (acc, event) => {
      const dateKey = event.start.toDateString();
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(event);
      return acc;
    },
    {} as Record<string, CalendarEvent[]>
  );

  const sortedDates = Object.keys(eventsByDate).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  if (sortedDates.length === 0)
    return (
      <p className='py-12 text-center text-muted-foreground'>
        No events this month
      </p>
    );

  return (
    <div className='space-y-6'>
      {sortedDates.map((dateKey) => {
        const dayEvents = eventsByDate[dateKey];
        const dateObj = new Date(dateKey);
        const isToday = new Date().toDateString() === dateObj.toDateString();

        return (
          <div key={dateKey} className='space-y-3'>
            {/* Date Header */}
            <div
              className={cn(
                "flex items-center gap-3 border-b border-border pb-2",
                isToday && "text-primary"
              )}
            >
              <h3 className='text-lg font-semibold'>
                {dateObj.toLocaleDateString("en-US", {
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

            {/* Events for this date */}
            <div className='space-y-3'>
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className='rounded-xl border border-border bg-card p-4 transition-shadow duration-200 hover:shadow-md'
                >
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1 space-y-2'>
                      <div className='flex items-center gap-3'>
                        <h4 className='font-semibold text-foreground'>
                          {event.title}
                        </h4>
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
                        <p className='text-sm leading-relaxed text-muted-foreground'>
                          {event.description}
                        </p>
                      )}

                      <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                          <ClockIcon className='h-4 w-4' />
                          {formatEventTime(event)}
                        </div>
                        {event.location && (
                          <div className='flex items-center gap-1'>
                            <MapPinIcon className='h-4 w-4' />
                            {event.location}
                          </div>
                        )}
                      </div>
                    </div>

                    {event.url && (
                      <Button
                        variant='ghost'
                        size='sm'
                        asChild
                        className='rounded-lg'
                      >
                        <a
                          href={event.url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLinkIcon className='h-4 w-4' />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
