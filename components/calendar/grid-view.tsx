import {
  fetchEventsForRange,
  buildMonthMatrix,
  visibleRangeForMonth,
  splitEventByDay,
  dayKeyFromUTCDate,
} from "@/lib/calendar";

import { DAYS, UTC } from "@/lib/data";

import type { Timezone, DaySegment } from "@/types";

type GridViewProps = {
  year: number;
  month: number;
  timezone?: Timezone;
  startOnMonday?: boolean;
  maxShownPerDay?: number;
};

export default async function GridView({
  year,
  month,
  timezone = "utc",
  startOnMonday = false,
  maxShownPerDay = 3,
}: GridViewProps) {
  const { start, end } = visibleRangeForMonth(year, month, startOnMonday);
  const events = await fetchEventsForRange({ timeMin: start, timeMax: end });

  const todayKey = dayKeyFromUTCDate(new Date());
  const dayMap = new Map<string, DaySegment[]>();

  for (const event of events) {
    for (const segment of splitEventByDay(event)) {
      const key = segment.day;
      if (key >= dayKeyFromUTCDate(start) && key < dayKeyFromUTCDate(end)) {
        const bucket = dayMap.get(key) ?? [];
        bucket.push(segment);
        dayMap.set(key, bucket);
      }
    }
  }

  const cells = buildMonthMatrix(year, month, startOnMonday);

  const formatter =
    timezone === "local"
      ? new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit" })
      : UTC;

  return (
    <>
      <div className='rounded border'>
        <div className='grid grid-cols-7'>
          {DAYS.map((label) => (
            <div key={label} className='border-b p-2 text-xs font-medium'>
              {label}
            </div>
          ))}

          {cells.map(({ date, inMonth }, index) => {
            const dayKey = dayKeyFromUTCDate(date);
            const isToday = dayKey === todayKey;
            const dayNum =
              timezone === "local" ? date.getDate() : date.getUTCDate();

            const segments: DaySegment[] = (dayMap.get(dayKey) ?? []).sort(
              (a, b) =>
                Number(b.event.allDay) - Number(a.event.allDay) ||
                a.event.start.getTime() - b.event.start.getTime()
            );

            const shown = segments.slice(0, maxShownPerDay);
            const overflow = Math.max(0, segments.length - shown.length);

            return (
              <div
                key={index}
                className={`min-h-28 border-t p-2 ${
                  inMonth
                    ? "bg-white dark:bg-inherit"
                    : "bg-gray-50/60 text-gray-400 dark:bg-gray-900/50"
                } ${isToday ? "rounded bg-blue-100 font-bold" : ""}`}
                aria-current={isToday ? "date" : undefined}
              >
                <div className='mb-1 text-xs font-medium'>{dayNum}</div>
                <div className='flex flex-col gap-1'>
                  {shown.map((segment) => {
                    const { event } = segment;
                    const pill = event.allDay
                      ? "All-day"
                      : formatter.format(event.start);

                    const rounded =
                      !segment.isStart && !segment.isEnd
                        ? "rounded-none"
                        : segment.isStart && segment.isEnd
                          ? "rounded"
                          : segment.isStart
                            ? "rounded-r-none"
                            : "rounded-l-none";

                    return (
                      <a
                        key={`${event.id}-${dayKey}`}
                        href={event.url ?? "#"}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`truncate rounded ${rounded} border px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800`}
                        title={event.title}
                      >
                        <span className='mr-2 inline-block text-[10px] opacity-70'>
                          {pill}
                        </span>
                        <span className='truncate'>{event.title}</span>
                      </a>
                    );
                  })}

                  {overflow > 0 && (
                    <details className='text-xs'>
                      <summary
                        aria-label={`+${overflow} more events`}
                        className='cursor-pointer text-blue-600 select-none hover:underline'
                      >
                        +{overflow} more
                      </summary>
                      <div className='mt-1 flex flex-col gap-1'>
                        {segments.slice(maxShownPerDay).map((segment) => {
                          const { event } = segment;
                          const pill = event.allDay
                            ? "All-day"
                            : formatter.format(event.start);
                          return (
                            <a
                              key={`${event.id}-${dayKey}-more`}
                              href={event.url ?? "#"}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='truncate rounded border px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800'
                              title={event.title}
                            >
                              <span className='mr-2 inline-block text-[10px] opacity-70'>
                                {pill}
                              </span>
                              <span className='truncate'>{event.title}</span>
                            </a>
                          );
                        })}
                      </div>
                    </details>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
