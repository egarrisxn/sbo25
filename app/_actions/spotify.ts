"use server";

import {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  TOKEN_ENDPOINT,
  NOW_PLAYING_ENDPOINT,
} from "@/lib/env";
import type { SpotifyPlayer } from "@/lib/types";

async function getAccessToken() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new Error("Missing Spotify credentials");
  }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to get access token: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function getNowPlayingItem(): Promise<SpotifyPlayer> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      // Add caching, if needed.
      // next: { revalidate: 30 }
    });

    if (response.status === 204 || response.status > 400) {
      return {
        isPlaying: false,
        albumImageUrl: "",
        album: "",
        artist: "",
        songUrl: "",
        title: "",
      };
    }

    const nowPlayingData = await response.json();
    const song = nowPlayingData.item;

    return {
      isPlaying: nowPlayingData.is_playing,
      albumImageUrl: song.album.images[0].url,
      album: song.album.name,
      artist: song.artists.map((a: any) => a.name).join(", "),
      songUrl: song.external_urls.spotify,
      title: song.name,
    };
  } catch (error) {
    console.error("Error fetching now playing item:", error);
    return {
      isPlaying: false,
      albumImageUrl: "",
      album: "",
      artist: "",
      songUrl: "",
      title: "",
    };
  }
}
