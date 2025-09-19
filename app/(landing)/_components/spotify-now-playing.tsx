import { SpotifyColored } from "@/components/icons";

export function SpotifyNowPlaying() {
  return (
    <div className='flex flex-col text-white/80'>
      <SpotifyColored className='z-10 size-8' />
      <a
        href='#'
        className='group flex w-full max-w-sm flex-1 flex-row md:max-w-lg lg:max-w-none'
      >
        <p className='mt-[-8] pl-7 text-sm tracking-tight whitespace-normal'>
          Currently listening to{" "}
          <span className='font-medium transition-all group-hover:text-green-500'>
            &quot;This is simply mock data right now&quot;
          </span>{" "}
          by <span className='font-medium'>Dr. Mock & The Data</span>.
        </p>
      </a>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { SpotifyColored } from "@/components/icons";
// import { getNowPlayingItem } from "@/app/_actions/spotify";
// import type { SpotifyPlayer } from "@/lib/types";

// export function SpotifyNowPlaying() {
//   const [loading, setLoading] = useState(true);
//   const [result, setResult] = useState<SpotifyPlayer | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const nowPlayingItem = await getNowPlayingItem();
//         setResult(nowPlayingItem);
//       } catch (error) {
//         console.error("Error fetching now playing item:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       {loading || !result ? (
//         <h3 className='grow font-medium tracking-tight text-white'>
//           Loading..
//         </h3>
//       ) : (
//         <div className='flex flex-row text-white'>
//           <div className='flex w-fit pt-0.5'>
//             <SpotifyColored className='h-4' />
//           </div>
//           {result.isPlaying ? "" : "Currently Offline"}
//           {result.isPlaying && (
//             <a
//               href={result.songUrl}
//               target='_blank'
//               rel='noopener noreferrer'
//               className='group flex w-full flex-1 flex-row'
//             >
//               <p className='text-sm tracking-tight whitespace-normal'>
//                 Currently listening to{" "}
//                 <span className='font-medium transition-all group-hover:text-green-500'>
//                   {`"${result.title}"`}{" "}
//                 </span>
//                 by <span className='font-medium'> {result.artist}</span>.
//               </p>
//             </a>
//           )}
//         </div>
//       )}
//     </>
//   );
// }
