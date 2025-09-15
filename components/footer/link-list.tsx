import { Link } from "next-view-transitions";

import type { LinkLists } from "@/types";

export default function LinkList({ title, links }: LinkLists) {
  const commonClasses = "hover:text-link mb-4 inline-block transition-color";

  return (
    <section>
      <h4 className='mb-6 text-sm font-medium'>{title}</h4>
      <ul>
        {links.map(({ href, label, external }) => (
          <li key={label} className='text-sm'>
            {external ? (
              <a
                href={href}
                aria-label={`${label} Page`}
                className={commonClasses}
                target='_blank'
                rel='noopener noreferrer'
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                aria-label={`${label} Page`}
                className={commonClasses}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
