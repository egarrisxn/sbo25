import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <Card className='rounded-3xl bg-muted px-2 pb-4 shadow-none md:px-4 md:pb-8'>
      <CardHeader>
        <CardTitle className='text-2xl'>Contact Me!</CardTitle>
        <CardDescription>I typeiclly respond with 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className='grid gap-6'>
          <div>
            <Label htmlFor='name' className='mb-2'>
              Name
            </Label>
            <Input
              type='text'
              name='name'
              placeholder='Name'
              className='bg-white shadow-none'
            />
          </div>

          <div>
            <Label htmlFor='email' className='mb-2'>
              Email
            </Label>
            <Input
              type='email'
              name='email'
              placeholder='Email'
              className='bg-white shadow-none'
            />
          </div>

          <div>
            <Label htmlFor='message' className='mb-2'>
              Message
            </Label>
            <Textarea
              id='message'
              name='message'
              rows={30}
              placeholder='Message'
              className='h-full bg-white shadow-none'
            />
          </div>

          <Button disabled size='lg' className='mt-4 w-full uppercase'>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

// "use client";

// import { useFormStatus } from "react-dom";
// import { useActionState, useEffect, useRef } from "react";
// import { sendContactMessage } from "@/app/actions/resend";
// import { Card, CardContent } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import type { FormState } from "@/types";

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       type='submit'
//       disabled={pending}
//       size='lg'
//       className='col-span-2 mt-4 w-full uppercase'
//     >
//       {pending ? "Submitting..." : "Submit"}
//     </Button>
//   );
// }

// export default function ContactForm1() {
//   const initialState: FormState = { message: "", success: false };
//   const [state, formAction] = useActionState(sendContactMessage, initialState);
//   const formRef = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     if (state.success) {
//       formRef.current?.reset();
//     }
//   }, [state.success]);

//   return (
//     <Card className='rounded-3xl bg-blue-500/10 shadow-none'>
//       <CardContent className='p-6 md:p-10'>
//         <form
//           ref={formRef}
//           action={formAction}
//           className='grid gap-x-8 gap-y-5 md:grid-cols-2'
//         >
//           <div className='col-span-2 sm:col-span-1'>
//             <Label htmlFor='name' className='mb-1'>
//               Name
//             </Label>

//             <Input
//               type='text'
//               name='name'
//               placeholder='Name'
//               className='bg-white shadow-none'
//             />

//             {state.errors?.name && (
//               <p className='mt-1 text-xs text-red-500'>
//                 {state.errors.name.join(", ")}
//               </p>
//             )}
//           </div>

//           <div className='col-span-2 sm:col-span-1'>
//             <Label htmlFor='email' className='mb-1'>
//               Email
//             </Label>

//             <Input
//               type='email'
//               name='email'
//               placeholder='Email'
//               className='bg-white shadow-none'
//             />

//             {state.errors?.email && (
//               <p className='mt-1 text-xs text-red-500'>
//                 {state.errors.email.join(", ")}
//               </p>
//             )}
//           </div>

//           <div className='col-span-2'>
//             <Label htmlFor='message' className='mb-1'>
//               Message
//             </Label>

//             <Textarea
//               id='message'
//               name='message'
//               rows={18}
//               required
//               placeholder='Message'
//               className='bg-white shadow-none'
//             />

//             {state.errors?.message && (
//               <p className='mt-1 text-xs text-red-500'>
//                 {state.errors.message.join(", ")}
//               </p>
//             )}
//           </div>
//           <SubmitButton />
//         </form>
//         {state.message && (
//           <p
//             className={`mt-4 text-center text-sm ${state.success ? "text-green-600" : "text-red-600"}`}
//           >
//             {state.message}
//           </p>
//         )}
//       </CardContent>
//     </Card>
//   );
// }
