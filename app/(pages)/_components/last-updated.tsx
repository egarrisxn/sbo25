export default function LastUpdated() {
  const lastUpdated = new Date().toLocaleString();
  return (
    <p className='flex flex-row text-xs font-bold text-muted-foreground md:text-sm'>
      Last Updated:{" "}
      <span className='pl-1 font-medium sm:pl-0.5'>{lastUpdated}</span>
    </p>
  );
}
