"use client";

import { useState, useEffect, useRef } from "react";
import type { CalendarEvent, UseCalendarEventsResult } from "@/types";

type EventsCache = Record<string, CalendarEvent[]>;

export function useCalendarEvents(currentDate: Date): UseCalendarEventsResult {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cacheRef = useRef<EventsCache>({});
  const fetchRef = useRef<(() => Promise<void>) | undefined>(undefined);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const key = `${year}-${month}`;

  const fetchEventsForMonth = async (fetchMonth: number, fetchYear: number) => {
    const cacheKey = `${fetchYear}-${fetchMonth}`;
    if (cacheRef.current[cacheKey]) return;

    try {
      const response = await fetch(
        `/api/calendar?month=${fetchMonth}&year=${fetchYear}`
      );
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to fetch events");

      const transformedEvents: CalendarEvent[] = data.events.map(
        (event: any) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        })
      );

      cacheRef.current[cacheKey] = transformedEvents;
    } catch (err) {
      console.error("Error prefetching calendar events:", err);
    }
  };

  fetchRef.current = async () => {
    setLoading(true);
    setError(null);

    if (cacheRef.current[key]) {
      setEvents(cacheRef.current[key]);
      setLoading(false);
    } else {
      try {
        await fetchEventsForMonth(month, year);
        setEvents(cacheRef.current[key] || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    fetchEventsForMonth(prevMonth, prevYear);
    fetchEventsForMonth(nextMonth, nextYear);
  };

  useEffect(() => {
    fetchRef.current?.();
  }, [key]);

  return {
    events,
    loading,
    error,
    refetch: () => fetchRef.current?.(),
  };
}
