import Image from "next/image";
import Link from "next/link";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface CardInfo {
  title: string;
  img: string;
  liveLink: string;
  githubLink: string;
  techs: string[];
}
export const PLUS_Work: CardInfo[] = [
  {
    title: "CSS Portfolio Template",
    img: "/imgs/plus/css-portfolio.webp",
    liveLink: "https://portfolio-template-zero.netlify.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/Portfolio-Template",
    techs: ["HTML", "CSS"],
  },
  {
    title: "CSS Theme Demo",
    img: "/imgs/plus/css-only-theme.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Only-Light-Dark/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Only-Light-Dark",
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
    title: "CSS Battle",
    img: "/imgs/plus/css-cool-shapes.webp",
    liveLink: "https://mahmoudgad123.github.io/Cool-CSS-Shapes/",
    githubLink: "https://github.com/MAHMOUDGAD123/Cool-CSS-Shapes",
    techs: ["HTML", "CSS"],
  },
  {
    title: "Wall Clock",
    img: "/imgs/plus/wall-clock.webp",
    liveLink: "https://mahmoudgad123.github.io/JS-Clock/",
    githubLink: "https://github.com/MAHMOUDGAD123/JS-Clock",
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
    title: "Tic Tac Toe",
    img: "/imgs/plus/tic-tac-toe.webp",
    liveLink: "https://mahmoudgad123.github.io/Tic-Tac-Toe/",
    githubLink: "https://github.com/MAHMOUDGAD123/Tic-Tac-Toe",
    techs: ["HTML", "CSS", "JS"],
  },
  {
    title: "React Calculator",
    img: "/imgs/plus/react-calc.webp",
    liveLink: "https://mg-react-calc.netlify.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/React-Calculator",
    techs: ["ReactJS"],
  },
  {
    title: "CSS Tracker Ball Demo",
    img: "/imgs/plus/css-tracker-ball-demo.webp",
    liveLink: "https://mahmoudgad123.github.io/CSS-Tracker-Ball-Demo/",
    githubLink: "https://github.com/MAHMOUDGAD123/CSS-Tracker-Ball-Demo",
    techs: ["HTML", "CSS", "JS"],
  },
];

export default function Plus() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[30px] *:[flex-basis:350px]">
      {PLUS_Work.map(({ title, img, liveLink, githubLink, techs }, i) => (
        <div
          key={i}
          className="relative flex flex-col rounded-xl bg-dodgerblue_30 backdrop-blur-lg *:hover:visible *:hover:opacity-100"
        >
          <Image src={img} alt="text" width={200} height={200} priority />

          <div className="absolute flex h-full w-full flex-col items-center justify-center gap-[15px] rounded-[inherit] bg-itembg opacity-0 duration-500 [transition-property:opacity,visibility] [visibility:hidden]">
            <h1 className="text-[17px] font-extrabold max-_sm:text-[15px]">
              {title}
            </h1>

            <div className="flex select-none flex-wrap gap-[7px]">
              {techs.map((txt, i) => (
                <span
                  key={i}
                  className="cursor-pointer rounded-full bg-dodgerblue_50 px-[9px] py-[2px] text-[13px] font-extrabold transition-colors hover:bg-dodgerblue max-_sm:text-[10px]"
                >
                  {txt}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-[10px] text-[20px] hover:*:text-dodgerblue max-_sm:text-[17px]">
              <TitleOnHover title="Demo" position="bottom">
                <Link href={liveLink} target="_blank">
                  <FontAwesomeIcon icon={faLink} />
                </Link>
              </TitleOnHover>

              <TitleOnHover title="GitHub" position="bottom">
                <Link href={githubLink} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </TitleOnHover>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
