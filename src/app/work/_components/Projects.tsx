"use client";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { _Storage } from "@/utils/Storage";
import "./_styles/projects-styles.css";

export default function Projects() {
  const sessionStorageSlideKey = "_mg_slide_offset_";
  const [initialLoad, setInitialLoad] = useState(true);
  const [activeProject, setActiveProject] = useState<number>(0);
  const slideElement = useRef<HTMLDivElement | null>(null);

  const changeSlideHandler = useCallback(
    async (callback: () => void, direction: "slideLeft" | "slideRight") => {
      if (
        !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return callback();
      }
      slideElement.current!.style.viewTransitionName = direction;
      const viewTransition = document.startViewTransition(callback);
      await viewTransition.finished;
      slideElement.current!.style.viewTransitionName = "none";
    },
    [],
  );

  useEffect(() => {
    setActiveProject((initialValue) => {
      return (
        (_Storage.read(sessionStorageSlideKey, "sessionStorage") as number) ??
        initialValue
      );
    });
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (initialLoad) return;
    _Storage.save(sessionStorageSlideKey, activeProject, "sessionStorage");
    /* eslint-disable-next-line */
  }, [activeProject]);

  return (
    <div className="relative flex w-full select-none flex-col gap-[20px]">
      <div className="absolute right-0 top-[-35px] flex animate-fadeIn gap-[25px] self-center text-[2.5rem] text-dodgerblue *:cursor-pointer *:opacity-50 *:transition-opacity hover:*:opacity-100 focus-visible:*:opacity-100 motion-reduce:animate-none max-_xl:static max-_xl:right-auto max-_xl:mb-[30px]">
        <button
          onClick={() =>
            changeSlideHandler(
              () =>
                setActiveProject((c) => (c > 0 ? c - 1 : PROJECTS.length - 1)),
              "slideLeft",
            )
          }
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>

        <button
          onClick={() =>
            changeSlideHandler(
              () =>
                setActiveProject((c) => (c < PROJECTS.length - 1 ? c + 1 : 0)),
              "slideRight",
            )
          }
        >
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>

      <div
        ref={slideElement}
        className="flex h-full w-full items-center justify-center gap-[50px] *:flex-1 max-_xl:flex-col max-_xl:text-center"
      >
        <div className="flex min-h-[410px] animate-settleLeft flex-col motion-reduce:animate-none max-_xl:*:place-content-center">
          <h2
            className="font-saira text-[70px] text-transparent"
            style={{
              WebkitTextStroke: "2.5px var(--prm-col-1)",
            }}
          >
            {PROJECTS[activeProject].count}
          </h2>

          <h3 className="mb-[10px] text-[45px] font-extrabold text-dodgerblue max-_sm:text-[35px]">
            {PROJECTS[activeProject].title}
          </h3>

          <p className="text-[1rem] text-SecTextCol">
            {PROJECTS[activeProject].description}
          </p>

          <div className="my-[20px] flex flex-wrap gap-[13px]">
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
              <Link
                href={PROJECTS[activeProject].liveLink}
                target={
                  PROJECTS[activeProject].linkReplace ? "_self" : "_blank"
                }
              >
                <FontAwesomeIcon icon={faLink} />
              </Link>
            </TitleOnHover>

            <TitleOnHover title="GitHub">
              <Link href={PROJECTS[activeProject].githubLink} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </TitleOnHover>

            {PROJECTS[activeProject].githubAPILink && (
              <TitleOnHover title="GitHub API">
                <Link
                  href={PROJECTS[activeProject].githubAPILink}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </TitleOnHover>
            )}
          </div>
        </div>

        <div className="flex w-full animate-settleRight items-center justify-center rounded-[10px] motion-reduce:animate-none">
          <Image
            loading="eager"
            src={`/imgs/projects/${PROJECTS[activeProject].title}.webp`}
            alt={`Project ${PROJECTS[activeProject].title}`}
            width={250}
            height={250}
            priority
          />
        </div>
      </div>
    </div>
  );
}
