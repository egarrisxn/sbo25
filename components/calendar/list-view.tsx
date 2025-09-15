import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  // fetchEventsForRange, //! UNCOMMENT OUT FOR PRODUCTION
  // visibleRangeForMonth, //! UNCOMMENT OUT FOR PRODUCTION
  splitEventByDay,
  dayKeyFromUTCDate,
  utcDateFromDayKey,
} from "@/lib/calendar";

import { UTC, mockEvents } from "@/lib/data";

import type { Timezone, DaySegment } from "@/types";

type ListViewProps = {
  year: number;
  month: number;
  timezone?: Timezone;
};

export default async function ListView({
  year,
  month,
  timezone = "utc",
}: ListViewProps) {
  //! UNCOMMENT OUT FOR PRODUCTION
  // const { start, end } = visibleRangeForMonth(year, month);
  // const events = await fetchEventsForRange({ timeMin: start, timeMax: end });

  //! MOCK DATA FOR DEVELOPMENT
  const events = mockEvents;

  const todayKey = dayKeyFromUTCDate(new Date());
  const dayMap = new Map<string, DaySegment[]>();

  for (const event of events) {
    for (const segment of splitEventByDay(event)) {
      const date = utcDateFromDayKey(segment.day);
      if (date.getUTCFullYear() === year && date.getUTCMonth() === month) {
        const bucket = dayMap.get(segment.day) ?? [];
        bucket.push(segment);
        dayMap.set(segment.day, bucket);
      }
    }
  }

  const DAYS: string[] = [];
  const first = new Date(Date.UTC(year, month, 1));
  const endExclusive = new Date(Date.UTC(year, month + 1, 1));
  for (
    let date = new Date(first);
    date < endExclusive;
    date.setUTCDate(date.getUTCDate() + 1)
  ) {
    DAYS.push(dayKeyFromUTCDate(date));
  }

  const formatter =
    timezone === "local"
      ? new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit" })
      : UTC;

  return (
    <>
      {DAYS.map((day) => {
        const isToday = day === todayKey;
        const label = new Date(`${day}T00:00:00Z`).toLocaleDateString(
          undefined,
          {
            weekday: "short",
            month: "short",
            day: "numeric",
            timeZone: "UTC",
          }
        );

        const segments: DaySegment[] = (dayMap.get(day) ?? []).sort(
          (a, b) =>
            Number(b.event.allDay) - Number(a.event.allDay) ||
            a.event.start.getTime() - b.event.start.getTime()
        );

        return (
          <Card
            key={day}
            aria-current={isToday ? "date" : undefined}
            className={`mr-1 rounded-lg border-none transition-colors hover:bg-gray-50 ${isToday ? "bg-blue-50" : ""}`}
          >
            <CardHeader
              className={`px-3 py-2 ${isToday ? "font-bold text-blue-800" : "text-gray-900"}`}
            >
              <CardTitle className='text-sm font-medium'>{label}</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
              {segments.length === 0 ? (
                <div className='px-3 py-2 text-xs text-gray-400'>No events</div>
              ) : (
                <ul>
                  {segments.map((segment, index) => {
                    const { event } = segment;
                    const segStart = segment.isStart
                      ? event.start
                      : utcDateFromDayKey(day);
                    const segEnd = segment.isEnd
                      ? event.end
                      : new Date(
                          segStart.getTime() + 24 * 60 * 60 * 1000 - 1000
                        );
                    const displayTime = event.allDay
                      ? "All-day"
                      : `${formatter.format(segStart)} - ${formatter.format(segEnd)}`;

                    return (
                      <li key={`${event.id}-${day}`}>
                        <div className='flex items-center justify-between gap-4 px-3 py-2'>
                          <div className='min-w-0'>
                            <div className='truncate text-sm font-medium'>
                              {event.title}
                            </div>
                            {event.location && (
                              <div className='truncate text-xs text-muted-foreground'>
                                {event.location}
                              </div>
                            )}
                          </div>
                          <div className='shrink-0 text-xs text-muted-foreground'>
                            {displayTime}
                          </div>
                        </div>
                        {event.description && (
                          <p className='line-clamp-2 px-3 pb-2 text-xs text-muted-foreground'>
                            {event.description}
                          </p>
                        )}
                        {event.url && (
                          <div className='px-3 pb-3'>
                            <a
                              href={event.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-xs text-blue-600 hover:underline'
                            >
                              Open in Google Calendar
                            </a>
                          </div>
                        )}
                        {index < segments.length - 1 && <Separator />}
                      </li>
                    );
                  })}
                </ul>
              )}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
