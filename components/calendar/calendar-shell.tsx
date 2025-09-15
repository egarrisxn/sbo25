import type { ReactNode } from "react";
import MonthNavigation from "@/components/calendar/month-navigation";
import { parseCalendarParams, calendarNavigationMeta } from "@/lib/calendar";

import type { Timezone } from "@/types";

export interface CalendarRenderProps {
  year: number;
  month: number;
  timezone: Timezone;
  prev: Date;
  next: Date;
  today: Date;
  title: string;
}

export interface CalendarShellProps {
  searchParams?: Promise<Record<string, string | string[]>>;
  children: (props: CalendarRenderProps) => ReactNode;
}

export default async function CalendarShell({
  searchParams,
  children,
}: CalendarShellProps) {
  const params = (await searchParams) ?? {};
  const now = new Date();

  const { year, month, timezone } = parseCalendarParams(params, now);
  const { prev, next, today, title } = calendarNavigationMeta(year, month, now);

  return (
    <section className='space-y-6 rounded-lg border px-4 py-6'>
      <div className='flex items-center justify-between'>
        <div className='text-xl font-semibold'>{title}</div>
        <MonthNavigation prev={prev} next={next} today={today} />
      </div>

      <div className='max-h-[500px] overflow-y-auto pr-2'>
        {children({ year, month, timezone, prev, next, today, title })}
      </div>
    </section>
  );
}
