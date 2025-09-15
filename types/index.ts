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
export type GCalEventRaw = {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  htmlLink?: string;
  start: { date?: string; dateTime?: string };
  end: { date?: string; dateTime?: string };
};
export type CalEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  url?: string;
  location?: string;
  description?: string;
};
export type DaySegment = {
  day: string;
  event: CalEvent;
  isStart: boolean;
  isEnd: boolean;
};
export const TIMEZONES = ["utc", "local"] as const;
export type Timezone = (typeof TIMEZONES)[number];
