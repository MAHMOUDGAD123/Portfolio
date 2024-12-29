import { FadeInAnimationProvider } from "@/components/animation/AnimationProviders";

interface EducationType {
  fromTo: string;
  title: string;
  at: string;
}

const education: EducationType[] = [
  {
    fromTo: "2019 - 2023",
    title: "Computer Engineering",
    at: "Mansourah University",
  },
  {
    fromTo: "2023",
    title: "Programming With C++",
    at: "ProgrammingAdvices.com",
  },
  {
    fromTo: "2024",
    title: "Web Development",
    at: "Youtube - Docs",
  },
];

export default function Education() {
  return (
    <div className="flex w-full flex-col gap-[25px] whitespace-nowrap">
      {education.map(({ fromTo, title, at }, i) => (
        <FadeInAnimationProvider key={title} delayMs={i * 500}>
          <div
            key={i}
            className="bg-itembg flex flex-col gap-[10px] rounded-[10px] p-[15px] font-bold max-_xl:items-center"
          >
            <span className="text-[15px] text-dodgerblue max-_sm:text-[13px]">
              {fromTo}
            </span>

            <span className="mb-[15px] text-[20px] max-_sm:text-[15px] max-_usm:text-[13px]">
              {title}
            </span>

            <div className="flex items-center gap-[7px] text-[14px] text-SecTextCol before:block before:aspect-square before:w-[7px] before:animate-pulse before:rounded-full before:bg-dodgerblue motion-reduce:before:animate-none max-_sm:text-[12px] max-_usm:text-[11px]">
              {at}
            </div>
          </div>
        </FadeInAnimationProvider>
      ))}
    </div>
  );
}
