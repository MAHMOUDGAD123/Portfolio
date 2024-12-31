"use client";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function WorkContent() {
  const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <div className="relative flex w-full flex-col gap-[20px]">
      <div className="absolute right-0 top-[-35px] flex animate-fadeIn gap-[25px] self-center text-[35px] text-dodgerblue *:cursor-pointer *:opacity-50 *:transition-opacity hover:*:opacity-100 motion-reduce:animate-none max-_xl:static max-_xl:right-auto max-_xl:mb-[30px]">
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

          <span className="mb-[10px] text-[45px] font-extrabold text-dodgerblue max-_sm:text-[35px]">
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
            loading="eager"
            src={`/imgs/${PROJECTS[activeProject].title}.png`}
            alt={`Project ${PROJECTS[activeProject].count}`}
            width={250}
            height={250}
            priority
          />
        </div>
      </div>
    </div>
  );
}
