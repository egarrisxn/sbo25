import type { CalendarEvent } from "@/types";

export const getEventLabelType = (type: string) => {
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

export const getEventLabelColor = (type: string) => {
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

export const formatEventTime = (event: CalendarEvent) => {
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
