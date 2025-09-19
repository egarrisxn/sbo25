// //! --------------------------
// //! SWAP BUTTONS IN PRODUCTION
// //! --------------------------

// "use client";

// import { useRef } from "react";
// import { Input } from "@/components/ui/input";
// import { AnimatedSendIcon } from "@/components/icons";

// export function NewsletterForm() {
//   const formRef = useRef<HTMLFormElement>(null);

//   return (
//     <div>
//       <form
//         ref={formRef}
//         onSubmit={(e) => e.preventDefault()}
//         className='relative ml-[-5] flex w-full max-w-xs items-center rounded-full md:max-w-md lg:ml-[-6] lg:w-[18rem]'
//       >
//         <label htmlFor='newsletter-email' className='sr-only'>
//           Email address
//         </label>
//         <Input
//           id='newsletter-email'
//           type='email'
//           placeholder='email@aol.com'
//           className='h-11 rounded-full pr-16 pl-4'
//           disabled
//         />
//         <button
//           type='submit'
//           className='absolute top-1/2 right-0 -translate-y-1/2 bg-transparent p-4'
//           aria-label='Subscribe to newsletter'
//           disabled
//         >
//           <AnimatedSendIcon
//             animateOnHover
//             className='size-5 text-slate-900/80 hover:text-link'
//           />
//         </button>
//       </form>

//       <p className='mt-2 ml-[-5] w-full max-w-xs text-xs text-wrap text-muted-foreground md:max-w-md lg:ml-[-6] lg:w-[18rem]'>
//         (Mock form — not connected)
//       </p>
//     </div>
//   );
// }

"use client";

import { useActionState, useEffect, useRef } from "react";
import { subscribeToNewsletter } from "@/app/_actions/resend";
import { Input } from "@/components/ui/input";
import { AnimatedSendIcon } from "@/components/icons";
import type { FormState } from "@/lib/types";

export function NewsletterForm() {
  const initialState: FormState = { message: "", success: false };
  const [state, formAction] = useActionState(
    subscribeToNewsletter,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div>
      <form
        ref={formRef}
        action={formAction}
        className='relative ml-[-5] flex w-full max-w-xs flex-col items-center rounded-full md:max-w-md lg:ml-[-6] lg:w-[18rem]'
      >
        <label htmlFor='newsletter-email' className='sr-only'>
          Email address
        </label>
        <Input
          type='email'
          placeholder='email@aol.com'
          className='h-11 rounded-full border-2 border-shaded-foreground/70 bg-foreground/30 pr-16 pl-4 placeholder:text-shaded-foreground/60 dark:bg-transparent'
        />
        <button
          type='submit'
          className='absolute top-1/2 right-0 -translate-y-1/2 bg-transparent px-4'
          aria-label='Subscribe to newsletter'
        >
          <AnimatedSendIcon
            animateOnHover
            className='size-5 text-shaded-foreground hover:text-primary'
          />
        </button>
      </form>
      {state.errors?.email && (
        <p className='mt-1.5 ml-[-5] w-full max-w-xs pl-2 text-xs leading-tight tracking-tight text-destructive md:max-w-md lg:ml-[-6] lg:w-[18rem]'>
          {state.errors.email.join(", ")}
        </p>
      )}
      {state.message && (
        <p
          className={`mt-0.5 ml-[-5] w-full max-w-xs pl-2 text-xs leading-tight tracking-tight text-wrap md:max-w-md lg:ml-[-6] lg:w-[18rem] ${
            state.success ? "text-green-400" : "text-destructive"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
