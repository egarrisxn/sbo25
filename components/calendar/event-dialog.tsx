"use client";

import { ClockIcon, MapPinIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { type CalendarEvent } from "@/types";

interface EventDialogProps {
  event?: CalendarEvent;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function EventDialog({ event, open, onOpenChange }: EventDialogProps) {
  if (!event) return null;

  const isAllDay =
    event.start.getHours() === 0 &&
    event.start.getMinutes() === 0 &&
    event.end.getHours() === 23 &&
    event.end.getMinutes() === 59;

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const getTypeColor = (type: string) => {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='rounded-2xl sm:max-w-[400px]'
        aria-describedby='event-dialog-description'
      >
        <DialogHeader>
          <DialogTitle className='text-xl'>{event.title}</DialogTitle>
        </DialogHeader>

        <div id='event-dialog-description' className='space-y-4 pt-2'>
          <Badge
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              getTypeColor(event.type)
            )}
          >
            {event.type.toUpperCase()}
          </Badge>

          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <ClockIcon className='h-4 w-4' />
            {isAllDay
              ? "All Day"
              : `${formatTime(event.start)} - ${formatTime(event.end)}`}
          </div>

          {event.location && (
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <MapPinIcon className='h-4 w-4' />
              {event.location}
            </div>
          )}

          {event.description && (
            <p className='text-sm text-muted-foreground'>{event.description}</p>
          )}

          {event.url && (
            <a
              href={event.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-primary underline'
            >
              View in Google Calendar
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
