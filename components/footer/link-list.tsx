import { Link } from "next-view-transitions";
import type { LinkLists } from "@/types";

export default function LinkList({ title, links }: LinkLists) {
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
                className='transition-color mb-4 inline-block hover:text-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                aria-label={`${label} Page`}
                className='transition-color mb-4 inline-block hover:text-link'
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
