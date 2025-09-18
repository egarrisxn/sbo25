//! ----------------------------------------
//! USE lib/data & lib/helpers IN PRODUCTION
//! ----------------------------------------

import type { CalendarEvent } from "@/lib/types";

// Mock Titles
const titles = [
  "Family Dinner",
  "Content Recording",
  "Live Stream",
  "Weekend Trip",
  "Workout",
  "Birthday",
  "Study Session",
  "Catch-up Call",
  "Conference",
  "Other Task",
];

const types: CalendarEvent["type"][] = ["stream", "family", "content", "other"];

// Random generator
export function generateMockEvents(
  month: number,
  year: number
): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const numEvents = Math.floor(Math.random() * 15) + 10; // 10–25 events

  for (let i = 0; i < numEvents; i++) {
    const day = Math.floor(Math.random() * 28) + 1; // safe days
    const startHour = Math.floor(Math.random() * 8) + 8; // 8am–4pm
    const start = new Date(year, month, day, startHour, 0);
    const end = new Date(start);
    end.setHours(startHour + 1);

    events.push({
      id: `mock-${year}-${month}-${i}`,
      title: titles[Math.floor(Math.random() * titles.length)],
      type: types[Math.floor(Math.random() * types.length)],
      start,
      end,
      url: Math.random() > 0.7 ? "https://calendar.google.com" : undefined,
    });
  }

  return events;
}

// Static data
export const staticMockEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Weekly Family Dinner",
    type: "family",
    start: new Date(2025, 8, 18, 19, 0),
    end: new Date(2025, 8, 18, 21, 0),
  },
  {
    id: "2",
    title: "Content Recording Session",
    type: "content",
    start: new Date(2025, 8, 20, 10, 0),
    end: new Date(2025, 8, 20, 12, 0),
  },
  {
    id: "3",
    title: "Live Stream: Q&A",
    type: "stream",
    start: new Date(2025, 8, 21, 14, 0),
    end: new Date(2025, 8, 21, 15, 30),
    url: "https://calendar.google.com",
  },
  {
    id: "4",
    title: "Friend's Birthday Party",
    type: "other",
    start: new Date(2025, 8, 24, 18, 0),
    end: new Date(2025, 8, 24, 23, 0),
  },
  {
    id: "5",
    title: "Weekend Trip",
    type: "other",
    start: new Date(2025, 8, 27, 8, 0),
    end: new Date(2025, 8, 27, 20, 0),
  },
];
