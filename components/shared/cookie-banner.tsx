"use client";

import { useCookies } from "@/hooks/use-cookies";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const { consent, setConsent, loading } = useCookies();

  if (loading || consent !== null) return null;

  return (
    <div className='fixed right-0 bottom-0 left-0 z-50 mx-auto my-4 max-w-fit sm:left-auto sm:mr-6'>
      <div className='flex flex-row items-center justify-between gap-2 rounded border border-gray-200 bg-white px-4 py-3 shadow-md dark:border-gray-600 dark:bg-black'>
        <p className='mr-3 text-sm'>
          This site uses cookies. See our{" "}
          <a href='/privacy' className='underline'>
            Privacy Policy
          </a>
          .
        </p>
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => setConsent(false)}>
            Decline
          </Button>
          <Button onClick={() => setConsent(true)}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
