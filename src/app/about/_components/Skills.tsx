import { FadeInAnimationProvider } from "@/components/animation/AnimationProviders";
import ImageIcon from "@/components/decoration/ImageIcon";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import {
  HTML5,
  CSS3,
  Javascript,
  Typescript,
  NodeJs,
  ReactJs,
  NextJs,
  TailwindCss,
  ReactRouter,
} from "@/components/icons/WebTechs";

export default async function Skills() {
  const SKILLS_ICONS: [React.ReactNode, string][] = [
    [<HTML5 key={0} />, "HTML5"],
    [<CSS3 key={1} />, "CSS3"],
    [<Javascript key={2} />, "Javascript"],
    [<Typescript key={3} />, "Typescript"],
    [<NodeJs key={4} />, "NodeJs"],
    [<ReactJs key={5} D={50} />, "ReactJs"],
    [<NextJs key={6} />, "NextJs"],
    [<ReactRouter key={7} D={50} />, "React Router"],
    [<TailwindCss key={8} />, "TailwindCSS"],
  ];

  return (
    <div className="flex flex-wrap gap-[15px] max-_xl:justify-center">
      {SKILLS_ICONS.map(([icon, title], i) => (
        <FadeInAnimationProvider key={title} delayMs={i * 100}>
          <TitleOnHover title={title} position="top">
            <ImageIcon icon={icon} />
          </TitleOnHover>
        </FadeInAnimationProvider>
      ))}
    </div>
  );
}
