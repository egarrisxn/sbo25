import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LastUpdated from "@/app/(pages)/_components/last-updated";
import ContactSnippet from "@/app/(pages)/_components/contact-snippet";
import { faqList } from "@/lib/data";

export default function FAQPage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <section className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-accent-foreground md:mb-4 xl:text-5xl'>
              FAQs
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>

          <article className='mb-10'>
            <h3 className='mb-4 text-2xl font-semibold'>
              Frequently Asked Questions
            </h3>
            <p className='mb-6 text-muted-foreground'>
              Here you&apos;ll find answers to some of the most common questions
              I get. If you don&apos;t see your question answered below, feel
              free to reach out for further assistance. I am here to help! Text
              text text we need more text here.
            </p>

            <div>
              <Accordion
                defaultValue='item-0'
                type='single'
                collapsible
                className='w-full space-y-2'
              >
                {faqList.map(({ title, description }, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className='p-1'
                  >
                    <AccordionTrigger className='text-base font-semibold'>
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className='font-medium text-primary'>
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>

          <hr className='mb-6' />

          <ContactSnippet />
        </section>
      </div>
    </div>
  );
}

// export default function FAQPage() {
//   return (
//     <section className='min-h-screen w-full'>
//       <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-5xl xl:px-0'>
//         <div className='mx-auto grid grid-cols-1 items-center'>
//           <h1 className='text-accent-foreground mb-2 font-serif text-[1.5rem] font-bold leading-snug md:mb-4 xl:text-[2.0rem] xl:leading-none'>
//             Frequently Asked Questions
//           </h1>
//           <div className='text-muted-foreground mb-6 text-xs md:text-sm'>
//             FAQ Stuff
//           </div>

//           <p className='text-muted-foreground mb-8 max-w-5xl leading-relaxed xl:text-[1.25rem]'>
//             Here you&apos;ll find answers to some of the most common questions I
//             get. If you don&apos;t see your question answered below, feel free
//             to reach out for further assistance. I am here to help! Text text
//             text we need more text here.
//           </p>
//         </div>

//         <div className='mb-10'>
//           <Accordion
//             defaultValue='item-0'
//             type='single'
//             collapsible
//             className='w-full space-y-2'
//           >
//             {faqList.map(({ title, description }, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`item-${index}`}
//                 className='p-1'
//               >
//                 <AccordionTrigger className='text-base font-semibold xl:text-lg'>
//                   {title}
//                 </AccordionTrigger>
//                 <AccordionContent className='text-primary font-medium xl:text-base'>
//                   {description}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>

//         <hr />

//         <div className='mt-10 md:px-2'>
//           <ContactSnippet />
//         </div>
//       </div>
//     </section>
//   );
// }
