import Image from "next/image";
import Link from "next/link";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { PLUS_Work } from "@/utils/constants";

export default function Plus() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[30px] *:[flex-basis:350px]">
      {PLUS_Work.map(({ title, img, liveLink, githubLink, techs }, i) => (
        <div
          key={i}
          className="relative flex flex-col rounded-xl bg-dodgerblue_30 backdrop-blur-lg *:hover:visible *:hover:opacity-100"
        >
          <Image
            src={img}
            alt={title}
            width={200}
            height={(200 * 16) / 9}
            loading="lazy"
            style={{
              aspectRatio: "16/9",
            }}
          />

          <div className="absolute flex h-full w-full flex-col items-center justify-center gap-[15px] rounded-[inherit] bg-itembg opacity-0 duration-500 [transition-property:opacity,visibility] [visibility:hidden]">
            <h2 className="text-[17px] font-extrabold max-_sm:text-[15px]">
              {title}
            </h2>

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
