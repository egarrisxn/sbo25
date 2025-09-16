import {
  BlueskyIcon,
  DiscordIcon,
  InstagramIcon,
  RssIcon,
  SpotifyIcon,
  TiktokIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import type { Links, Socials, Cards, Blog } from "@/types";

// Shared Social Data
export const socialData: Socials[] = [
  {
    id: "twitch",
    title: "Twitch",
    username: "@sway_bae",
    href: "https://www.twitch.tv/sway_bae",
    Icon: TwitchIcon,
  },
  {
    id: "youtube",
    title: "YouTube",
    username: "@swaybae",
    href: "https://www.youtube.com/@swaybae",
    Icon: YoutubeIcon,
  },
  {
    id: "tiktok",
    title: "TikTok",
    username: "@swaybae.tv",
    href: "https://www.tiktok.com/@swaybae.tv",
    Icon: TiktokIcon,
  },
  {
    id: "twitter",
    title: "X",
    username: "@swaybae",
    href: "https://x.com/swaybae",
    Icon: TwitterIcon,
  },
  {
    id: "bluesky",
    title: "Bluesky",
    username: "@swaybae.bsky.social",
    href: "https://bsky.app/profile/swaybae.bsky.social",
    Icon: BlueskyIcon,
  },
  {
    id: "instagram",
    title: "Instagram",
    username: "@swaybae.tv",
    href: "https://www.instagram.com/swaybae.tv",
    Icon: InstagramIcon,
  },
  {
    id: "discord",
    title: "Discord",
    username: "swaybae",
    href: "https://discord.com/invite/K73uN9k",
    Icon: DiscordIcon,
  },
  {
    id: "spotify",
    title: "Spotify",
    username: "Swaybae",
    href: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
    Icon: SpotifyIcon,
  },
];

// Navbar Links
export const navLinks: Links[] = [
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "https://shop.swaybae.net/", label: "Merch", external: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Footer Links
export const footerLinksOne: Links[] = [
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "https://shop.swaybae.net/", label: "Merch", external: true },
];
export const footerLinksTwo: Links[] = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media Kit" },
  { href: "/faq", label: "FAQs" },
];
export const sharedFooterLinks: Links[] = [
  { href: "/accessibility", label: "Accessibility" },
  { href: "/cookies", label: "Cookies" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  {
    href: "/rss.xml",
    label: "RSS",
    external: true,
    icon: <RssIcon width='12px' height='12px' />,
  },
];

// Landing Tweet Grid
export const tweetGrid: string[] = [
  "1853868717450686778",
  "1849671142249746535",
  "1845928542020030506",
];

// Landing Merch Cards
export const merchCards: Cards[] = [
  {
    id: "Water Bottle",
    title: "Water Bottle",
    description: "Stay Wet!",
    src: "/landing/merch/bottle.webp",
  },
  {
    id: "Dad Cap",
    title: "Dad Cap",
    description: "Stay Shaded!",
    src: "/landing/merch/cap.webp",
  },
  {
    id: "Long Sleeve",
    title: "Long Sleeve",
    description: "Stay Covered!",
    src: "/landing/merch/ls.webp",
  },
  {
    id: "Crewneck",
    title: "Crewneck",
    description: "Warm Up!",
    src: "/landing/merch/crew.webp",
  },
  {
    id: "Hoodie",
    title: "Hoodie",
    description: "Most Comfortable!",
    src: "/landing/merch/hood.webp",
  },
  {
    id: "T-Shirt",
    title: "T-Shirt",
    description: "Ultra Fashion!",
    src: "/landing/merch/ss.webp",
  },
];

// Landing Blog List
export const blogList: Blog[] = [
  {
    id: "#2",
    title: "The best FREE Ways to Support Your Favorite Content Creators!",
    href: "#",
  },
  {
    id: "#1",
    title: "Sway Starts a BLOG!",
    href: "#",
  },
];

// Landing Photo Grid
export const photoGrid: string[] = [
  "/landing/photo-grid/1.jpg",
  "/landing/photo-grid/2.jpg",
  "/landing/photo-grid/3.jpg",
  "/landing/photo-grid/4.jpg",
  "/landing/photo-grid/5.jpg",
  "/landing/photo-grid/6.jpg",
  "/landing/photo-grid/7.jpg",
  "/landing/photo-grid/8.jpg",
  "/landing/photo-grid/9.jpg",
];

// Calendar Data
export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
