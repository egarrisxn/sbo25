import { Link } from "next-view-transitions";

export default function ContactSnippet() {
  return (
    <>
      <h3 className='mb-3 text-xl font-semibold text-accent-foreground'>
        Contact
      </h3>
      <p className='text-muted-foreground'>
        If you have any questions or concerns, please visit the{" "}
        <Link
          href='/contact'
          className='text-link underline-offset-4 hover:underline'
        >
          Contact Page
        </Link>{" "}
        or send an email to:{" "}
        <a
          href='mailto:sway.bae9000@gmail.com'
          className='text-link underline-offset-4 hover:underline'
        >
          sway.bae9000@gmail.com
        </a>
        .
      </p>
    </>
  );
}
