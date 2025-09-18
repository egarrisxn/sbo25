"use client";

import { ClockIcon, ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { formatEventTime, getEventLabelColor } from "@/lib/calendar";
import { type CalendarEvent } from "@/lib/types";

interface EventDialogProps {
  event?: CalendarEvent;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function EventDialog({ event, open, onOpenChange }: EventDialogProps) {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='rounded-2xl sm:max-w-[400px]'
        aria-describedby='event-dialog-description'
      >
        <DialogHeader>
          <Badge
            className={cn(
              "ml-[-2px] rounded-full text-xs font-medium",
              getEventLabelColor(event.type)
            )}
          >
            {event.type.toUpperCase()}
          </Badge>
          <DialogTitle className='pt-1 text-xl'>{event.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className='flex items-center gap-2 text-sm text-muted-foreground'>
          <ClockIcon className='size-4' />
          {formatEventTime(event)}
        </DialogDescription>
        <DialogFooter>
          {event.url && (
            <a
              href={event.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-8 items-center gap-1 px-0 text-sm font-medium text-blue-500/80 transition-colors hover:text-blue-500'
            >
              Save to Google Calendar <ExternalLinkIcon className='size-4' />
            </a>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
