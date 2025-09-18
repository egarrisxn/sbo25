import { Resend } from "resend";

export const RESEND = new Resend(process.env.RESEND_API_KEY);
export const CONTACT_EMAIL_TO = process.env.CONTACT_FORM_EMAIL_TO;
export const NEWSLETTER_EMAIL_FROM = process.env.NEWSLETTER_FORM_EMAIL_FROM;

export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
export const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
export const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const API_KEY = process.env.YOUTUBE_API_KEY;
export const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://swaybaeofficial.net");
