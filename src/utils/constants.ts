export const CV_URL =
  "https://www.canva.com/design/DAGaHvR1wns/DMFxm8CSmKTY0dsg3PlcOA/view?utm_content=DAGaHvR1wns&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ba4a2834e";

export const CAREER_START_DATE = "2024-01-01";

export interface LinksType {
  href: string;
  name: string;
  iconClass: string;
}
export const NAV_LINKS: LinksType[] = [
  {
    href: "/",
    name: "Home",
    iconClass: "fa-solid fa-house",
  },
  {
    href: "/about",
    name: "About",
    iconClass: "fa-solid fa-address-card",
  },
  {
    href: "/work",
    name: "Work",
    iconClass: "fa-solid fa-briefcase",
  },
  {
    href: "/contact",
    name: "Contact",
    iconClass: "fa-solid fa-envelope",
  },
];

export const SKILLS: string[] = [
  "HTML5",
  "CSS3",
  "Javascript",
  "Typescript",
  "NodeJs",
  "ReactJs",
  "NextJs",
  "ReactRouter",
  "TailwindCSS",
];

interface Project {
  count: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  githubAPILink?: string;
  techs: string[];
}
export const PROJECTS: Project[] = [
  {
    count: "01",
    title: "PrayerTimes",
    description:
      "PrayerTimes is a simple web app that displays accurate daily prayer times for Muslims based on their location.",
    image: "https://via.placeholder.com/",
    liveLink: "https://prayertimesv1.netlify.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/PrayerTimes",
    techs: ["HTML5", "CSS3", "JavaScript", "esbuild"],
  },
  {
    count: "02",
    title: "EGPrices",
    description:
      "EGPrices is a web app that provides real-time updates on gold, silver, and Egyptian pound (EGP) currency rates.",
    image: "https://via.placeholder.com/150",
    liveLink: "https://egypt-prices.netlify.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/EG_Prices",
    githubAPILink: "https://github.com/MAHMOUDGAD123/egPricesApi",
    techs: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "NodeJs",
      "ExpressJs",
      "cheerio",
      "esbuild",
    ],
  },
  {
    count: "03",
    title: "VIDL",
    description:
      "VIDL is a video downloader web app that lets users download videos and entire YouTube playlists.",
    image: "https://via.placeholder.com/150",
    liveLink: "https://vidl-client.vercel.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/vidl-client",
    githubAPILink: "https://github.com/MAHMOUDGAD123/vidl-api",
    techs: ["ReactJs", "React Router", "NodeJs", "ExpressJs", "Vite"],
  },
];

// theme related constants
export const THEME_KEY = "__MG_theme__" as const;
export type ThemeType = "light" | "system" | "dark";
export type ColorSchemeType = "light" | "dark" | "light dark";
export const themesMap = new Map<
  ThemeType,
  {
    cssValue: ColorSchemeType;
    icon: string;
  }
>([
  ["light", { cssValue: "light", icon: "fa-sun" }],
  ["system", { cssValue: "light dark", icon: "fa-desktop" }],
  ["dark", { cssValue: "dark", icon: "fa-moon" }],
]);
