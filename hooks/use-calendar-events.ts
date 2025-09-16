"use client";

import { useState, useEffect } from "react";
import type { CalendarEvent, UseCalendarEventsResult } from "@/types";

export function useCalendarEvents(currentDate: Date): UseCalendarEventsResult {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);

      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();

      const response = await fetch(`/api/calendar?month=${month}&year=${year}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch events");
      }

      // Transform date strings back to Date objects
      const transformedEvents = data.events.map((event: any) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));

      setEvents(transformedEvents);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching calendar events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [currentDate.getMonth(), currentDate.getFullYear()]);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
}
