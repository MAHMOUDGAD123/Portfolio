import PageHolder from "@/components/layout/PageHolder";
import ContentTitle from "@/components/decoration/ContentTitle";
import WorkContent from "./_components/WorkContent";
import { Metadata } from "next";
import IconSlider from "@/components/decoration/IconSlider";
import {
  CSS3,
  EsBuild,
  GitHub,
  HTML5,
  Javascript,
  NextJs,
  NodeJs,
  ReactJs,
  ReactRouter,
  TailwindCss,
  Typescript,
  Vite,
} from "@/components/icons/WebTechs";

export const metadata: Metadata = {
  title: "Wrok",
};

export default function Work() {
  const iconSize = 55;
  const iconList: [React.ReactNode, string][] = [
    [<HTML5 D={iconSize} key={0} />, "HTML5"],
    [<CSS3 D={iconSize} key={1} />, "CSS3"],
    [<Javascript D={iconSize} key={2} />, "JavaScript"],
    [<Typescript D={iconSize} key={3} />, "TypeScript"],
    [<NodeJs D={iconSize} key={4} />, "NodeJS"],
    [<ReactJs D={iconSize} key={5} />, "ReactJS"],
    [<NextJs D={iconSize} key={6} />, "NextJS"],
    [<TailwindCss D={iconSize} key={7} />, "TailwindCSS"],
    [<ReactRouter D={iconSize} key={8} />, "React Router"],
    [<GitHub D={iconSize} key={9} />, "GitHub"],
    [<Vite D={iconSize} key={10} />, "Vite"],
    [<EsBuild D={iconSize} key={11} />, "ESBuild"],
  ];
  return (
    <PageHolder>
      <ContentTitle title="SOME WORK" />

      <WorkContent />

      <IconSlider
        iconList={iconList}
        duration={25}
        width={1500}
        height={70}
        marginTop={50}
        marginBottom={10}
      />
    </PageHolder>
  );
}
