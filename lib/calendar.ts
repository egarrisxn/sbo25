import type { GoogleCalendarEvent, CalendarEvent } from "@/types";

function categorizeEvent(title: string): CalendarEvent["type"] {
  const lowerTitle = title.toLowerCase();

  if (
    lowerTitle.includes("stream") ||
    lowerTitle.includes("twitch") ||
    lowerTitle.includes("gaming")
  ) {
    return "stream";
  }

  if (
    lowerTitle.includes("family") ||
    lowerTitle.includes("movie") ||
    lowerTitle.includes("dinner")
  ) {
    return "family";
  }

  if (
    lowerTitle.includes("content") ||
    lowerTitle.includes("video") ||
    lowerTitle.includes("planning") ||
    lowerTitle.includes("collab")
  ) {
    return "content";
  }

  return "other";
}

function transformEvents(googleEvents: GoogleCalendarEvent[]): CalendarEvent[] {
  return googleEvents
    .filter((event) => event.status !== "cancelled")
    .map((event) => {
      const start = event.start.dateTime
        ? new Date(event.start.dateTime)
        : new Date(event.start.date + "T00:00:00");

      const end = event.end.dateTime
        ? new Date(event.end.dateTime)
        : new Date(event.end.date + "T23:59:59");

      return {
        id: event.id,
        title: event.summary || "Untitled Event",
        description: event.description,
        start,
        end,
        location: event.location,
        type: categorizeEvent(event.summary || ""),
        url: event.htmlLink,
      };
    });
}

export async function getGoogleCalendarEvents(
  timeMin?: Date,
  timeMax?: Date
): Promise<CalendarEvent[]> {
  const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.warn("Google Calendar API_KEY or CALENDAR_ID not configured");
    return [];
  }

  const params = new URLSearchParams({
    key: API_KEY,
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "100",
  });

  if (timeMin) {
    params.append("timeMin", timeMin.toISOString());
  }
  if (timeMax) {
    params.append("timeMax", timeMax.toISOString());
  }

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    CALENDAR_ID
  )}/events?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Google Calendar API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return transformEvents(data.items || []);
  } catch (error) {
    console.error("Error fetching Google Calendar events:", error);
    throw error;
  }
}
