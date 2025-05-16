"use client";
import ContentTitle from "@/components/decoration/ContentTitle";
import AboutNav from "./AboutNav";
import { usePathname } from "next/navigation";

interface Props {
  sectionsArray: React.ReactNode[];
}

export default function AboutContent({ sectionsArray }: Props) {
  const pathName = usePathname();
  const routeMap = new Map<string, [string, number, string]>([
    ["/about", ["My Journey", 0, "Crafting sleek|web interfaces."]],
    [
      "/about/education",
      ["My Education", 1, "Building intuitive|user interfaces"],
    ],
    ["/about/skills", ["My Skills", 2, "Designing smooth|user experiences."]],
  ]);
  const [title, componentIndex, quote] = routeMap.get(pathName)!;

  return (
    <>
      <ContentTitle title="ABOUT ME ?" />

      <div className="flex gap-[70px] max-_xl:flex-col max-_xl:items-center">
        <div className="w-[215px] animate-settleLeft motion-reduce:animate-none max-_xl:m-auto max-_xl:w-full">
          <div className="mb-[50px] text-[20px] font-extrabold max-_xl:mx-auto max-_xl:text-center max-_xl:text-[30px] max-_md:text-[25px] max-_sm:text-[18px]">
            {quote.split("|").map((txt, lineIndex) => (
              <div
                key={`line-${lineIndex}-${txt}`}
                className="whitespace-nowrap"
              >
                {lineIndex === 0
                  ? txt.split(" ").map((word, wordIndex) => {
                      const key = `word-${lineIndex}-${wordIndex}-${word}`;
                      return wordIndex === 1 ? (
                        <span key={key} className="text-dodgerblue">
                          {word}
                        </span>
                      ) : (
                        <span key={key}>{word} </span>
                      );
                    })
                  : txt}
              </div>
            ))}
          </div>

          <AboutNav />
        </div>

        <div className="relative flex-1 animate-settleRight motion-reduce:animate-none max-_xl:text-center">
          <h2 className="relative mb-[50px] w-fit select-none whitespace-nowrap text-[33px] font-extrabold before:absolute before:left-0 before:top-[105%] before:h-[3px] before:w-[0%] before:animate-halfWidth before:rounded-full before:bg-dodgerblue before:transition-[left] before:duration-500 after:absolute after:right-0 after:top-[-5%] after:h-[3px] after:w-[0%] after:animate-halfWidth after:rounded-full after:bg-dodgerblue after:transition-[right] after:duration-500 hover:before:left-[50%] hover:after:right-[50%] before:motion-reduce:w-[50%] before:motion-reduce:animate-none after:motion-reduce:w-[50%] after:motion-reduce:animate-none motion-reduce:hover:before:left-0 motion-reduce:hover:after:right-0 max-_xl:mx-auto max-_xl:mb-[70px] max-_usm:text-[25px]">
            {title}
          </h2>

          {sectionsArray[componentIndex]}
        </div>
      </div>
    </>
  );
}
