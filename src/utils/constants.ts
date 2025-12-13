import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faBriefcase,
  faDesktop,
  faEnvelope,
  faHouse,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const CV_URL =
  "https://www.canva.com/design/DAGmJWORj-4/wik8CUrZ8TJbhmbQ4ubAaA/view?utm_content=DAGmJWORj-4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2feec78070";

export const CAREER_START_DATE = "2025-01-01";

export interface LinksType {
  href: string;
  name: string;
  icon: IconDefinition;
}
export const NAV_LINKS: LinksType[] = [
  {
    href: "/",
    name: "Home",
    icon: faHouse,
  },
  {
    href: "/about",
    name: "About",
    icon: faAddressCard,
  },
  {
    href: "/work",
    name: "Work",
    icon: faBriefcase,
  },
  {
    href: "/contact",
    name: "Contact",
    icon: faEnvelope,
  },
];

export const SKILLS: string[] = [
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Javascript",
  "Typescript",
  "VueJs",
  "NuxtJs",
  "ReactJs",
  "NextJs",
  "NodeJs",
  // "ReactRouter",
  "Vite",
];

interface Project {
  count: string;
  title: string;
  description: string;
  liveLink: string;
  linkReplace: boolean;
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
    liveLink: "https://prayertimesv1.netlify.app/",
    linkReplace: false,
    githubLink: "https://github.com/MAHMOUDGAD123/PrayerTimes",
    techs: ["HTML5", "CSS3", "JavaScript", "esbuild"],
  },
  {
    count: "02",
    title: "EGPrices",
    description:
      "EGPrices is a web app that provides real-time updates on gold, silver, and Egyptian pound (EGP) currency rates.",
    liveLink: "https://egypt-prices.netlify.app/",
    linkReplace: false,
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
      "Vite",
    ],
  },
  {
    count: "03",
    title: "VIDL",
    description:
      "VIDL is a video downloader web app that lets users download videos and entire YouTube playlists.",
    liveLink: "https://vidl-client.vercel.app/",
    linkReplace: false,
    githubLink: "https://github.com/MAHMOUDGAD123/vidl-client",
    githubAPILink: "https://github.com/MAHMOUDGAD123/vidl-api",
    techs: ["ReactJs", "React Router", "NodeJs", "ExpressJs", "Vite"],
  },
  {
    count: "04",
    title: "MG-Portfolio",
    description:
      "This is a simple, customizable portfolio website for showcasing your work and skills.",
    liveLink: "/",
    linkReplace: true,
    githubLink: "https://github.com/MAHMOUDGAD123/Portfolio",
    techs: [
      "ReactJs",
      "NodeJs",
      "NextJs",
      "TailwindCSS",
      "playwright",
      "sweetalert2",
      "zod",
      "web3forms",
    ],
  },
  {
    count: "05",
    title: "SPA",
    description:
      "This SPA is built with plain JavaScript. It uses a custom router for client-side navigation and renders views dynamically without any frameworks.",
    liveLink: "https://mg-spa-app.netlify.app/",
    linkReplace: false,
    githubLink: "https://github.com/MAHMOUDGAD123/spa-app",
    techs: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Vite"],
  },
  {
    count: "06",
    title: "Vue-Playground",
    description:
      "A simple Vue.js app for testing components, tools, and libraries.",
    liveLink: "https://vue-js-playground.vercel.app/",
    linkReplace: false,
    githubLink: "https://github.com/MAHMOUDGAD123/VueJS-Playground",
    techs: ["VueJs", "vue-router", "pinia", 'vuex', '...'],
  },
];

interface CardInfo {
  title: string;
  img: string;
  liveLink: string;
  githubLink: string;
  techs: string[];
}

export const PLUS_Work: CardInfo[] = [
  {
    title: "React Calculator",
    img: "/imgs/plus/react-calc.webp",
    liveLink: "https://mg-react-calc.netlify.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/React-Calculator",
    techs: ["ReactJS"],
  },
  {
    title: "FLIP Layout",
    img: "/imgs/plus/flip-layout.webp",
    liveLink: "https://mahmoudgad123.github.io/flip-layout/",
    githubLink: "https://github.com/MAHMOUDGAD123/flip-layout",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "CSS Theme Demo",
    img: "/imgs/plus/css-only-theme.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Only-Light-Dark/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Only-Light-Dark",
    techs: ["HTML", "CSS"],
  },
  {
    title: "Tic Tac Toe",
    img: "/imgs/plus/tic-tac-toe.webp",
    liveLink: "https://mahmoudgad123.github.io/Tic-Tac-Toe/",
    githubLink: "https://github.com/MAHMOUDGAD123/Tic-Tac-Toe",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "CSS Battle",
    img: "/imgs/plus/css-cool-shapes.webp",
    liveLink: "https://mahmoudgad123.github.io/Cool-CSS-Shapes/",
    githubLink: "https://github.com/MAHMOUDGAD123/Cool-CSS-Shapes",
    techs: ["HTML", "CSS"],
  },
  {
    title: "CSS Easing Demo",
    img: "/imgs/plus/css-easing-functions.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Easing-Function-Demo/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Easing-Function-Demo",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "CSS Transform Demo",
    img: "/imgs/plus/css-transform.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Transform-Demo/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Transform-Demo",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "CSS Animation Demo",
    img: "/imgs/plus/css-animation.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Animation-Demo/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Animation-Demo",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "Wall Clock",
    img: "/imgs/plus/wall-clock.webp",
    liveLink: "https://mahmoudgad123.github.io/JS-Clock/",
    githubLink: "https://github.com/MAHMOUDGAD123/JS-Clock",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "CSS Tracker Ball Demo",
    img: "/imgs/plus/css-tracker-ball-demo.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Tracker-Ball-Demo/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Tracker-Ball-Demo",
    techs: ["HTML", "CSS", "JS"],
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
    icon: IconDefinition;
  }
>([
  ["light", { cssValue: "light", icon: faSun }],
  ["system", { cssValue: "light dark", icon: faDesktop }],
  ["dark", { cssValue: "dark", icon: faMoon }],
]);
