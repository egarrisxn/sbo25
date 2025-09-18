"use server";

import { API_KEY, CHANNEL_ID } from "@/lib/env";
import type { YouTubeVideo } from "@/lib/types";

export async function getLatestYouTube(): Promise<YouTubeVideo[] | null> {
  if (!API_KEY || !CHANNEL_ID) {
    console.error("YouTube API Key or Channel ID is missing.");
    return null;
  }

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4&type=video`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `YouTube API request failed with status: ${response.status}`
      );
    }
    const data = await response.json();

    return data.items.map((item: any) => ({
      post_id: item.id.videoId,
      title: item.snippet.title,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      published_at: item.snippet.publishedAt,
      thumbnail_url: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
}
