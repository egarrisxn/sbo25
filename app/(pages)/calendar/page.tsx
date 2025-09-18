import HybridCalendar from "@/components/calendar/hybrid-calendar";

export default function ClientCalendarPage() {
  return (
    <section className='min-h-screen w-full bg-linear-90 from-[#00d2ff1a] to-[#ca66fb0d] py-12'>
      <div className='container mx-auto my-24 grid max-w-2xl grid-cols-1 items-center px-4 lg:max-w-7xl xl:px-0'>
        <HybridCalendar initialDate={new Date()} showMonthNav={true} />
      </div>
    </section>
  );
}
