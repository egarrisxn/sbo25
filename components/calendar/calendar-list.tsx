"use client";

import { ClockIcon, ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  getEventLabelColor,
  getEventLabelType,
  formatEventTime,
} from "@/lib/helpers";
import type { CalendarEvent, CalendarEvents } from "@/types";

export function CalendarList({ currentDate, events }: CalendarEvents) {
  const year = currentDate?.getFullYear() ?? new Date().getFullYear();
  const month = currentDate?.getMonth() ?? new Date().getMonth();

  const lastDay = new Date(year, month + 1, 0).getDate();
  const monthDates = Array.from(
    { length: lastDay },
    (_, i) => new Date(year, month, i + 1)
  );

  const eventsByDate = events.reduce(
    (acc, event) => {
      const dateKey = event.start.toDateString();
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(event);
      return acc;
    },
    {} as Record<string, CalendarEvent[]>
  );

  return (
    <div className='space-y-4'>
      {monthDates.map((dateObj) => {
        const dateKey = dateObj.toDateString();
        const dayEvents = eventsByDate[dateKey] || [];
        const isToday = new Date().toDateString() === dateKey;

        return (
          <div key={dateKey} className='space-y-2 pt-1'>
            {/* Date header */}
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

            {/* Events list */}
            <div className='space-y-2'>
              {dayEvents.length === 0 ? (
                <p className='text-sm text-muted-foreground'>No events</p>
              ) : (
                dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className='rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md'
                  >
                    <div className='mb-2.5 flex items-center justify-between gap-2'>
                      <h4 className='text-[1.175rem] leading-[1.45] font-semibold'>
                        {event.title}
                      </h4>
                      <Badge
                        className={cn(
                          "rounded-full text-xs font-medium",
                          getEventLabelColor(event.type)
                        )}
                      >
                        {getEventLabelType(event.type)}
                      </Badge>
                    </div>

                    <div className='mb-2.5 flex items-center gap-1 text-sm text-muted-foreground'>
                      <ClockIcon className='size-3.5' />
                      {formatEventTime(event)}
                    </div>

                    {event.url && (
                      <a
                        href={event.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex h-8 items-center gap-1 px-0 text-sm font-medium text-blue-500/80 transition-colors hover:text-blue-500'
                      >
                        Save to Google Calendar
                        <ExternalLinkIcon className='size-4' />
                      </a>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
