import {
  BlueskyIcon,
  DiscordIcon,
  InstagramIcon,
  SpotifyIcon,
  TiktokIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import type {
  Blog,
  Cards,
  Links,
  Lists,
  ReusableLists,
  Socials,
} from "@/lib/types";

// Social Data
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

// FAQ Data
export const faqList: Lists[] = [
  {
    title: "Do you offer teleportation services?",
    description: "Only on Tuesdays, and only if Mercury is in retrograde.",
  },
  {
    title: "What's the return policy on bad life choices?",
    description:
      "We accept returns within 30 years with proof of receipt and a therapist's note.",
  },
  {
    title: "Can I pay in hugs?",
    description: "Yes, but only if your hugs are IRS-approved.",
  },
  {
    title: "Is it true your CEO is a raccoon in a trench coat?",
    description:
      "We can neither confirm nor deny, but he does love dumpsters and quarterly reports.",
  },
  {
    title: "What happens if I press this big red button?",
    description:
      "You gain temporary invisibility, but only when no one is looking.",
  },
  {
    title: "Can this software help me find true love?",
    description:
      "Absolutely! As long as your true love is fast-loading dashboards.",
  },
  {
    title: "Do you offer tech support for emotional breakdowns?",
    description:
      "Yes, our support team will send memes and virtual snacks within 15 minutes.",
  },
  {
    title: "Is there a secret menu?",
    description:
      "Yes. Just whisper 'enchanted spreadsheet' to your mouse and wait for the magic.",
  },
];

// Terms of Service Data
export const termsOfServiceList: ReusableLists[] = [
  {
    title: "Introduction",
    description:
      'Welcome to swaybae.net (the "Site"). By accessing or using this Site, you agree to be bound by these Terms of Use. Please read them carefully.',
    items: [],
  },
  {
    title: "1. Intellectual Property",
    description:
      "All content on this Site, including text, images, videos, logos, and other materials, is the property of Swaybae or its content partners unless otherwise noted. You may view and share content for personal, non-commercial use only.",
    items: [
      {
        description:
          "Reproduce, distribute, or modify content without prior written permission.",
      },
      {
        description:
          "Use content in a way that harms the reputation of the Site or its creators.",
      },
    ],
  },
  {
    title: "2. User Conduct",
    description:
      "When interacting with the Site or its features (including mailing lists or embedded content), you agree to:",
    items: [
      {
        description: "Provide truthful and respectful information.",
      },
      {
        description:
          "Avoid posting unlawful, defamatory, abusive, or harmful content.",
      },
      {
        description: "Not impersonate others or engage in disruptive behavior.",
      },
      {
        description:
          "User-generated content may be reviewed and approved before public display.",
      },
    ],
  },
  {
    title: "3. Embedded Content and Third-Party Services",
    description:
      "The Site includes embedded content from third parties such as Twitch, YouTube, and X (formerly Twitter). These platforms may collect data as per their own policies. The Site is not responsible for third-party content or data collection.",
    items: [
      {
        description:
          "We also use third-party services for analytics and mailing lists, which operate under their own privacy and data policies.",
      },
    ],
  },
  {
    title: "4. Mailing List",
    description:
      "By subscribing to our mailing list, you consent to receive emails from us. You may unsubscribe at any time using the link in the email footer.",
    items: [],
  },
  {
    title: "5. Media Kit Usage",
    description:
      "The media kit is provided for business partners and sponsors. Use of the materials requires explicit permission and compliance with provided guidelines.",
    items: [],
  },
  {
    title: "6. Disclaimers and Limitation of Liability",
    description:
      'The Site and its content are provided "as is" without warranties. We do not guarantee uninterrupted access or error-free operation.',
    items: [
      {
        description:
          "To the fullest extent permitted by law, we disclaim liability for damages arising from use or inability to use the Site.",
      },
    ],
  },
  {
    title: "7. Changes to Terms",
    description:
      "We may update these Terms at any time. Changes will be posted here with the updated date.",
    items: [],
  },
  {
    title: "8. Governing Law",
    description:
      "These Terms are governed by the laws of the jurisdiction where the Site owner operates.",
    items: [],
  },
];

// Privacy Policy Data
export const privacyGeneralInfo: Lists[] = [
  {
    title: "Analytics Information",
    description:
      "We collect anonymized data about how users interact with the site, including page visits and device/browser type. This helps us improve the experience and content.",
  },
  {
    title: "Embedded Content",
    description:
      "We display embedded content such as YouTube videos, Twitch streams, and X (Twitter) posts. These services may collect usage data according to their own privacy policies.",
  },
  {
    title: "Mailing List Information",
    description:
      "If you subscribe to our mailing list, we collect your email address to send updates, announcements, or special content. You can unsubscribe at any time.",
  },
  {
    title: "Contact Information",
    description:
      "If you contact us via email or a contact form, we may collect your name and email address in order to respond.",
  },
];
export const privacyUsage: Lists[] = [
  {
    description:
      "Improving the site experience based on anonymous usage analytics.",
  },
  {
    description:
      "Embedding and displaying media from platforms like Twitch and YouTube.",
  },
  {
    description:
      "Sending occasional email updates to mailing list subscribers.",
  },
  {
    description:
      "Responding to questions, requests, or feedback sent through contact forms or email.",
  },
  {
    description:
      "Enhancing viewer interactivity with stream-related features, such as live polls or embedded chat widgets.",
  },
];
export const privacyThirdPartyServices: Lists[] = [
  {
    title: "YouTube",
    link: "https://policies.google.com/privacy",
    linkText: "Privacy Policy Page",
  },
  {
    title: "Twitch",
    link: "https://www.twitch.tv/p/legal/privacy-notice/",
    linkText: "Privacy Policy Page",
  },
  {
    title: "X (formerly Twitter)",
    link: "https://twitter.com/en/privacy",
    linkText: "Privacy Policy Page",
  },
  {
    title: "Google Analytics",
    link: "https://policies.google.com/privacy",
    linkText: "Privacy Policy Page",
  },
  {
    title: "Mailing List Provider",
    description:
      "Our mailing list is managed by a third-party email service. Your email address is securely stored and only used for communication you've opted into.",
  },
];
export const privacyRights: Lists[] = [
  { description: "Request access to any personal information we may hold" },
  { description: "Ask us to correct or delete your information" },
  { description: "Unsubscribe from our mailing list at any time" },
];

// Cookies Data
export const cookieData: Lists[] = [
  {
    description:
      "This Cookie Policy explains what cookies are, how we use them, what types of cookies we place, the information they collect, and how that information is used. It also outlines how you can manage your cookie preferences. Cookies are small text files stored on your device when you visit a website. They hold limited information that helps the site function properly, keep it secure, improve your browsing experience, and provide insights into how the website is performing and where it can be improved.",
  },
  {
    description:
      "Like most websites, we use both first-party and third-party cookies for different purposes. First-party cookies are essential for the basic operation of our website. They do not collect personally identifiable information. Third-party cookies help us understand how visitors use the site, measure performance, maintain security, deliver relevant advertisements, and generally enhance your experience. They also make future visits faster and more efficient.",
  },
  {
    description:
      "You can review or change your cookie preferences at any time by selecting Cookie Settings. This allows you to update your choices or withdraw consent immediately. Most browsers also allow you to block or delete cookies through their settings. The links below explain how to manage cookies in the major browsers:",
  },
  {
    title: "Chrome",
    link: "https://support.google.com/accounts/answer/32050",
    linkText: "Support Page",
  },
  {
    title: "Safari",
    link: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
    linkText: "Support Page",
  },
  {
    title: "Firefox",
    link: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
    linkText: "Support Page",
  },
  {
    title: "Internet Explorer",
    link: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
    linkText: "Support Page",
  },
  {
    description:
      "For other browsers, please consult the official support documentation.",
  },
];

export const accessibilityData = `Sway Bae Official is committed to making our website's content accessible and user friendly to everyone. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at sway.bae9000@gmail.com with “Disabled Access” in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at sway.bae9000@gmail.com with “Disabled Access” in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly. `;
