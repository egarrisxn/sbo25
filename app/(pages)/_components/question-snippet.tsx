import { Link } from "next-view-transitions";

export default function QuestionSnippet() {
  return (
    <>
      <h3 className='mb-3 text-xl font-semibold text-accent-foreground'>
        Questions?
      </h3>

      <p className='text-muted-foreground'>
        Please feel free to visit my{" "}
        <Link
          href='/faq'
          className='text-link underline-offset-4 hover:underline'
        >
          FAQ page
        </Link>
        , reach out through my{" "}
        <Link
          href='/contact'
          className='text-link underline-offset-4 hover:underline'
        >
          Contact page
        </Link>
        , or drop me an email at:{" "}
        <a
          href='mailto:sway.bae9000@gmail.com'
          className='hover:underlin text-link underline-offset-4'
        >
          sway.bae9000@gmail.com
        </a>
        . You can also connect with me on any of my social media platforms
        below!
      </p>
    </>
  );
}
