import { Link } from "next-view-transitions";

import type { Links } from "@/types";

export default function LinkRenderer({ href, label, icon, external }: Links) {
  const commonClasses = "flex items-center transition-colors hover:text-link";

  const content = icon ? (
    <>
      <span>{label}</span> {icon}
    </>
  ) : (
    label
  );
  return external ? (
    <a
      href={href}
      className={commonClasses}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={commonClasses} aria-label={label}>
      {content}
    </Link>
  );
}
