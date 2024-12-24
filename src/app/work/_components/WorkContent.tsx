"use client";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import Image from "next/image";
import { useState } from "react";

interface Project {
  count: string;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  githubAPILink?: string;
  techs: string[];
  col: string;
}

const PROJECTS: Project[] = [
  {
    count: "01",
    title: "PrayerTimes",
    description:
      "An application to PrayerTimes is a simple web app that displays accurate daily prayer times for Muslims based on their location.",
    image: "https://via.placeholder.com/",
    liveLink: "https://prayertimesv1.netlify.app/",
    githubLink: "https://github.com/MAHMOUDGAD123/PrayerTimes",
    techs: ["HTML5", "CSS3", "JavaScript"],
    col: "#648d07",
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
    techs: ["HTML5", "CSS3", "JavaScript", "NodeJs", "ExpressJs"],
    col: "#c94a00",
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
    col: "#283547",
  },
];

export default function WorkContent() {
  const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex animate-fadeIn gap-[20px] self-center text-[30px] text-dodgerblue *:cursor-pointer *:opacity-50 *:transition-opacity hover:*:opacity-100 motion-reduce:animate-none">
        <i
          className="fa-solid fa-circle-chevron-left"
          onClick={() =>
            setActiveProject((c) => (c > 0 ? c - 1 : PROJECTS.length - 1))
          }
        ></i>
        <i
          className="fa-solid fa-circle-chevron-right"
          onClick={() =>
            setActiveProject((c) => (c < PROJECTS.length - 1 ? c + 1 : 0))
          }
        ></i>
      </div>

      <div className="flex h-full w-full items-center justify-center gap-[50px] *:flex-1 max-_xl:flex-col max-_xl:text-center">
        <div className="flex animate-settleLeft flex-col motion-reduce:animate-none max-_xl:*:place-content-center">
          <span
            className="font-saira text-[70px] text-transparent"
            style={{
              WebkitTextStroke: "2.5px var(--prm-col-1)",
            }}
          >
            {PROJECTS[activeProject].count}
          </span>

          <span className="mb-[10px] text-[45px] font-extrabold text-dodgerblue max-_usm:text-[35px]">
            {PROJECTS[activeProject].title}
          </span>

          <p className="text-[15px] text-SecTextCol">
            {PROJECTS[activeProject].description}
          </p>

          <div className="my-[20px] flex select-none flex-wrap gap-[13px]">
            {PROJECTS[activeProject].techs.map((tech, i) => (
              <span
                key={i}
                className="cursor-pointer rounded-full bg-dodgerblue_50 px-[10px] py-[5px] text-[12px] font-extrabold transition-colors hover:bg-dodgerblue"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-[20px] text-[30px] hover:*:text-dodgerblue">
            <TitleOnHover title="Live">
              <a href={PROJECTS[activeProject].liveLink} target="_blank">
                <i className="fa-solid fa-link"></i>
              </a>
            </TitleOnHover>

            <TitleOnHover title="GitHub">
              <a href={PROJECTS[activeProject].githubLink} target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </TitleOnHover>

            {PROJECTS[activeProject].githubAPILink && (
              <TitleOnHover title="GitHub API">
                <a href={PROJECTS[activeProject].githubAPILink} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </TitleOnHover>
            )}
          </div>
        </div>

        <div className="flex w-full animate-settleRight items-center justify-center rounded-[10px] motion-reduce:animate-none">
          <Image
            src={`/imgs/${PROJECTS[activeProject].title}.png`}
            alt={`Project ${PROJECTS[activeProject].count}`}
            width={250}
            height={250}
            className="rounded-[inherit] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
