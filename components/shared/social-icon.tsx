import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { Socials } from "@/types";

export default function SocialIcon({ title, href, Icon, className }: Socials) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a href={href} aria-label={title}>
          <Icon
            className={`${className} group text-muted-foreground transition-all hover:text-link`}
          />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
