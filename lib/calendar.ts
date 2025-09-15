import type { GCalEventRaw, CalEvent, DaySegment } from "@/types";

//! HELPERS

export function withParams(
  current: URLSearchParams,
  next: Record<string, string | number | undefined | null>
) {
  const query = new URLSearchParams(current.toString());
  for (const [key, value] of Object.entries(next)) {
    if (value === undefined || value === null) query.delete(key);
    else query.set(key, String(value));
  }
  return `?${query.toString()}`;
}

export function padNumbers(n: number): string {
  return String(n).padStart(2, "0");
}

export function readInteger(raw: string | null, fallback: number): number {
  if (!raw) return fallback;
  const parsed = parseInt(raw, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function dayKeyFromUTCDate(date: Date): string {
  return `${date.getUTCFullYear()}-${padNumbers(date.getUTCMonth() + 1)}-${padNumbers(date.getUTCDate())}`;
}

export function utcDateFromDayKey(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function monthStartUTC(year: number, month: number): Date {
  return new Date(Date.UTC(year, month, 1));
}

export function monthEndExclusiveUTC(year: number, month: number): Date {
  return new Date(Date.UTC(year, month + 1, 1));
}

export function buildMonthMatrix(
  year: number,
  month: number,
  startOnMonday = false
) {
  const monthStart = monthStartUTC(year, month);
  const monthEndExclusive = monthEndExclusiveUTC(year, month);

  const firstDayOfWeek = monthStart.getUTCDay();
  const dayOffset = startOnMonday ? (firstDayOfWeek + 6) % 7 : firstDayOfWeek;

  const gridStartDate = new Date(monthStart);
  gridStartDate.setUTCDate(monthStart.getUTCDate() - dayOffset);

  const cells = [];
  for (let integer = 0; integer < 42; integer++) {
    const currentDate = new Date(gridStartDate);
    currentDate.setUTCDate(gridStartDate.getUTCDate() + integer);
    cells.push({
      date: currentDate,
      inMonth: currentDate >= monthStart && currentDate < monthEndExclusive,
    });
  }
  return cells;
}

export function visibleRangeForMonth(
  year: number,
  month: number,
  startOnMonday = false
) {
  const matrix = buildMonthMatrix(year, month, startOnMonday);
  const firstVisibleDate = matrix[0].date;
  const lastVisibleDateExclusive = new Date(
    matrix[41].date.getTime() + 24 * 60 * 60 * 1000
  );
  return {
    start: firstVisibleDate,
    end: lastVisibleDateExclusive,
  };
}

export function splitEventByDay(event: CalEvent): DaySegment[] {
  const segments: DaySegment[] = [];
  const current = new Date(event.start);
  const end = new Date(event.end);

  while (current < end) {
    const key = dayKeyFromUTCDate(current);
    const isStart = current.getTime() === event.start.getTime();
    const next = new Date(current);
    next.setUTCDate(current.getUTCDate() + 1);
    const isEnd = next >= end;

    segments.push({ day: key, event, isStart, isEnd });
    current.setUTCDate(current.getUTCDate() + 1);
  }

  return segments;
}

export function parseCalendarParams(
  params: Record<string, string | string[]>,
  now: Date = new Date()
) {
  const year = readInteger(
    Array.isArray(params.year) ? params.year[0] : params.year,
    now.getUTCFullYear()
  );

  const month = Math.max(
    0,
    Math.min(
      11,
      readInteger(
        Array.isArray(params.month) ? params.month[0] : params.month,
        now.getUTCMonth()
      )
    )
  );

  const timezone =
    ((Array.isArray(params.timezone) ? params.timezone[0] : params.timezone) as
      | "utc"
      | "local") ?? "utc";

  return { year, month, timezone };
}

export function calendarNavigationMeta(
  year: number,
  month: number,
  now: Date = new Date()
) {
  const prev = new Date(Date.UTC(year, month - 1, 1));
  const next = new Date(Date.UTC(year, month + 1, 1));
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));

  const title = new Date(Date.UTC(year, month, 1)).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return { prev, next, today, title };
}

function normalize(raw: GCalEventRaw): CalEvent {
  const allDay = !!raw.start.date;

  if (allDay) {
    return {
      id: raw.id,
      title: raw.summary,
      start: new Date(raw.start.date! + "T00:00:00Z"),
      end: new Date(raw.end.date! + "T00:00:00Z"),
      allDay,
      url: raw.htmlLink,
      location: raw.location,
      description: raw.description,
    };
  }

  return {
    id: raw.id,
    title: raw.summary,
    start: new Date(raw.start.dateTime!),
    end: new Date(raw.end.dateTime!),
    allDay,
    url: raw.htmlLink,
    location: raw.location,
    description: raw.description,
  };
}

export async function fetchEventsForRange({
  timeMin,
  timeMax,
}: {
  timeMin: Date;
  timeMax: Date;
}): Promise<CalEvent[]> {
  const url = new URL(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      process.env.GOOGLE_CALENDAR_ID +
      "/events"
  );
  url.searchParams.set("key", process.env.GOOGLE_CALENDAR_API_KEY ?? "");
  url.searchParams.set("timeMin", timeMin.toISOString());
  url.searchParams.set("timeMax", timeMax.toISOString());
  url.searchParams.set("singleEvents", "true");
  url.searchParams.set("orderBy", "startTime");

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch calendar events");

  const json = (await res.json()) as { items: GCalEventRaw[] };
  return json.items.map(normalize);
}
