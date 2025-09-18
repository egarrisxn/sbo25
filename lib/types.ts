import type { ComponentType, JSX, ReactNode, SVGProps } from "react";

// Actions
export interface ServerActionResult {
  success: boolean | undefined;
  message: string;
}

// Buttons
export interface ScrollButtons {
  targetId: string;
}

// Calendars | Google Calendar
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

// Cards
export interface Cards {
  id: string;
  title: string;
  description: string;
  src?: string;
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

// Icons
export interface Icons extends SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}
export type SocialIcons = ComponentType<Icons>;

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

// Lists
export interface Lists {
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
}
export interface ReusableLists {
  title: string;
  description?: string | ReactNode;
  items?: Lists[];
}

// Socials
export interface Socials {
  id: string;
  title: string;
  href: string;
  username?: string;
  className?: string;
  Icon: SocialIcons;
}

// Spotify
export interface Spotify {
  albumImageUrl: string;
  album: string;
  artist: string;
  songUrl: string;
  title: string;
}
export interface SpotifyPlayer extends Spotify {
  isPlaying: boolean;
}

// Videos | YouTube
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
export interface YouTubeVideo {
  post_id: string;
  title: string;
  url: string;
  published_at: string;
  thumbnail_url: string;
}
