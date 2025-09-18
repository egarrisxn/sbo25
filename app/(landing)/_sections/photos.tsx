import Image from "next/image";
import { BlurItem } from "@/components/ui/blur";
import { photoGrid } from "@/lib/data";

export default function Photos() {
  return (
    <div className='container mx-auto pt-24'>
      <div className='max-w-sceen-lg mx-auto w-full px-6 xl:max-w-screen-3xl 2xl:px-0'>
        <div className='grid grid-cols-1'>
          <div className='columns-2 gap-4 md:columns-3 md:gap-6'>
            {photoGrid.map((src, idx) => (
              <BlurItem key={src} delay={0.25 + idx * 0.05}>
                <Image
                  className='mb-4 rounded-lg border object-contain shadow-lg md:mb-6'
                  src={src}
                  alt={`Public photo ${idx + 1}`}
                  width={800}
                  height={600}
                />
              </BlurItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
