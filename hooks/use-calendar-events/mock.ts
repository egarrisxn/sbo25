//! -------------------------------------------------
//! SWITCH WITH use-calendar-events AFTER DEVELOPMENT
//! -------------------------------------------------

"use client";

import { useState, useEffect } from "react";
import type { CalendarEvent, UseCalendarEventsResult } from "@/lib/types";
import { generateMockEvents } from "@/lib/data/mock"; // staticMockEvents

export function useCalendarEvents(currentDate: Date): UseCalendarEventsResult {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        if (process.env.NODE_ENV === "development") {
          //! PICK ONE: Random events or fixed events
          setEvents(generateMockEvents(month, year));
          // setEvents(staticMockEvents);
        } else {
          const response = await fetch(
            `/api/calendar?month=${month}&year=${year}`
          );
          const data = await response.json();

          setEvents(
            data.events.map((e: any) => ({
              ...e,
              start: new Date(e.start),
              end: new Date(e.end),
            }))
          );
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [month, year]);

  return { events, loading, error, refetch: () => {} };
}
