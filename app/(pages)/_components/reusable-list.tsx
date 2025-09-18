import { Link } from "next-view-transitions";
import type { ReusableLists } from "@/lib/types";

export default function ReusableList({
  title,
  description,
  items = [],
}: ReusableLists) {
  const filteredItems = items.filter(
    (item) => item.title || item.description || item.link
  );

  return (
    <div className='mb-8'>
      <h3 className='mb-4 text-2xl font-semibold text-accent-foreground'>
        {title}
      </h3>
      {description && (
        <p className='mb-6 text-base leading-relaxed text-muted-foreground'>
          {description}
        </p>
      )}
      {filteredItems.length > 0 && (
        <ul className='mb-6 ml-8 list-disc space-y-2'>
          {filteredItems.map((item, index) => (
            <li key={index} className='leading-relaxed'>
              {item.title && <strong>{item.title}: </strong>}
              {item.link ? (
                item.link.startsWith("/") ? (
                  <Link
                    href={item.link}
                    className='text-link underline-offset-4 hover:underline'
                  >
                    {item.linkText || item.title || item.link}
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-link underline-offset-4 hover:underline'
                  >
                    {item.linkText || item.title || item.link}
                  </a>
                )
              ) : (
                <span className='text-muted-foreground'>
                  {item.description}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
