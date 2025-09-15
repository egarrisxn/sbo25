"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { AnimatedSendIcon } from "@/components/icons";

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
        className='relative ml-[-5] flex w-full max-w-xs items-center rounded-full md:max-w-md lg:ml-[-6] lg:w-[18rem]'
      >
        <label htmlFor='newsletter-email' className='sr-only'>
          Email address
        </label>
        <Input
          id='newsletter-email'
          type='email'
          placeholder='email@aol.com'
          className='h-11 rounded-full pr-16 pl-4'
          disabled
        />
        <button
          type='submit'
          className='absolute top-1/2 right-0 -translate-y-1/2 bg-transparent p-4'
          aria-label='Subscribe to newsletter'
          disabled
        >
          <AnimatedSendIcon
            animateOnHover
            className='size-5 text-slate-900/80 hover:text-link'
          />
        </button>
      </form>

      <p className='mt-2 ml-[-5] w-full max-w-xs text-xs text-wrap text-muted-foreground md:max-w-md lg:ml-[-6] lg:w-[18rem]'>
        (Mock form — not connected)
      </p>
    </div>
  );
}

// "use client";

// import { useActionState, useEffect, useRef } from "react";
// import { subscribeToNewsletter } from "@/app/actions/resend";
// import { Input } from "@/components/ui/input";
// import { AnimatedSendIcon } from "@/components/icons";
// import type { FormState } from "@/types";

// export default function NewsletterForm1() {
//   const initialState: FormState = { message: "", success: false };
//   const [state, formAction] = useActionState(
//     subscribeToNewsletter,
//     initialState
//   );
//   const formRef = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     if (state.success) {
//       formRef.current?.reset();
//     }
//   }, [state.success]);

//   return (
//     <div>
//       <form
//         ref={formRef}
//         action={formAction}
//         className='relative ml-[-5] flex w-full max-w-xs items-center rounded-full md:max-w-md lg:ml-[-6] lg:w-[18rem]'
//       >
//         <label htmlFor='newsletter-email' className='sr-only'>
//           Email address
//         </label>
//         <Input
//           type='email'
//           placeholder='email@aol.com'
//           className='h-11 rounded-full pr-16 pl-4'
//         />
//         {/* <input
//           id='newsletter-email'
//           type='email'
//           name='newsletter-email'
//           placeholder='email@hotmail.com'
//           required
//           className='border-input flex h-11 w-full min-w-0 rounded-full border bg-slate-100 py-1 pr-16 pl-4 text-sm text-slate-900 shadow-xs transition-[color,box-shadow] outline-none placeholder:text-sm placeholder:text-slate-500 focus:border-transparent focus-visible:border-link focus-visible:ring-[3px] focus-visible:ring-link/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40'
//         /> */}
//         <button
//           type='submit'
//           className='absolute top-1/2 right-0 -translate-y-1/2 bg-transparent p-4'
//           aria-label='Subscribe to newsletter'
//         >
//           <AnimatedSendIcon
//             animateOnHover
//             className='size-5 text-slate-900/80 hover:text-link'
//           />
//         </button>
//         {state.errors?.email && (
//           <p className='mt-1 ml-[-5] w-full max-w-xs text-xs text-wrap text-destructive md:max-w-md lg:ml-[-6] lg:w-[18rem]'>
//             {state.errors.email.join(", ")}
//           </p>
//         )}
//       </form>

//       {state.message && (
//         <p
//           className={`mt-2 ml-[-5] w-full max-w-xs text-xs text-wrap md:max-w-md lg:ml-[-6] lg:w-[18rem] ${
//             state.success ? "text-green-400" : "text-destructive"
//           }`}
//         >
//           {state.message}
//         </p>
//       )}
//     </div>
//   );
// }
