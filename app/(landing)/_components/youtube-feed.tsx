import { getLatestYouTube } from "@/app/_actions/youtube";

export async function YouTubeFeed() {
  const youtubeData = await getLatestYouTube();

  if (!youtubeData || youtubeData.length === 0) {
    return (
      <p className='text-center text-gray-500'>
        Failed to load YouTube feed or no videos found.
      </p>
    );
  }

  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {youtubeData.map((video) => (
        <li
          key={video.post_id}
          className='flex flex-col rounded-xl border border-border bg-white p-2 shadow-lg dark:rounded-none dark:border-transparent dark:bg-transparent dark:shadow-none'
        >
          <a
            href={video.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block'
          >
            {video.thumbnail_url && (
              <img
                src={video.thumbnail_url}
                alt='Video thumbnail'
                className='mb-2 w-full rounded-t-lg dark:rounded-none'
              />
            )}
            <h3 className='mb-2 line-clamp-2 text-base font-bold'>
              {video.title}
            </h3>
            <p className='text-xs'>
              {new Date(video.published_at).toLocaleDateString()}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
