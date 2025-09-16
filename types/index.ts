import type { JSX, ComponentType, SVGProps } from "react";

// Links
export interface Links {
  href: string;
  label: string;
  external?: boolean;
  icon?: JSX.Element;
}
export interface LinkLists {
  title: string;
  links: Links[];
}
export interface Blog {
  id: string;
  title: string;
  href: string;
}

// Icons
export interface Icons extends SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}
export type SocialIcons = ComponentType<Icons>;

// Socials
export interface Socials {
  id: string;
  title: string;
  href: string;
  username?: string;
  className?: string;
  Icon: SocialIcons;
}

// Cards
export interface Cards {
  id: string;
  title: string;
  description: string;
  src?: string;
}

// Buttons
export interface ScrollButtons {
  targetId: string;
}

// Forms
export interface FormState {
  message: string;
  errors?: Record<string, string[] | undefined>;
  success: boolean | undefined;
}
export type FormResult =
  | { success: true; res: unknown }
  | { success: false; err: unknown };

// Videos
export type VideoAnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";
export interface VideoAnimationVariants {
  initial: { [key: string]: string | number };
  animate: { [key: string]: string | number };
  exit: { [key: string]: string | number };
}

// Calendar
export interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  location?: string;
  status: string;
  htmlLink: string;
  colorId?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
  type: "stream" | "family" | "content" | "other";
  url?: string;
}

export interface CalendarEvents {
  currentDate: Date;
  events: CalendarEvent[];
  onDateChange: (date: Date) => void;
}

export interface UseCalendarEventsResult {
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}
