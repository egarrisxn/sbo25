"use client";

import * as React from "react";
import { useActionState } from "react";
import { sendNewsletter } from "@/app/_actions/resend";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function AdminNewsletterForm() {
  const [state, formAction] = useActionState(sendNewsletter, {
    success: false,
    message: "",
  });

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-lg font-bold'>Send Newsletter</h2>
      <p className='text-sm text-muted-foreground'>
        Click the button to send the latest newsletter to all subscribers.
      </p>

      <form action={formAction}>
        <Textarea
          id='newsletter'
          name='newsletter'
          rows={18}
          required
          placeholder='Enter your newsletter content here...'
          className='w-full rounded-md border border-gray-300 p-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500'
        />
        <Button
          type='submit'
          disabled={state.message.includes("successfully")} // Prevent multiple sends
          className='w-full'
        >
          Send Newsletter Now
        </Button>
      </form>

      {state.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-600" : "text-destructive"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
