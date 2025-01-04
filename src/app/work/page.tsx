import PageHolder from "@/components/layout/PageHolder";
import ContentTitle from "@/components/decoration/ContentTitle";
import WorkContent from "./_components/WorkContent";
import { Metadata } from "next";
import IconSlider from "@/components/decoration/IconSlider";
import {
  CSS3,
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
  const iconList = [
    <HTML5 D={iconSize} key={0} />,
    <CSS3 D={iconSize} key={1} />,
    <Javascript D={iconSize} key={2} />,
    <Typescript D={iconSize} key={3} />,
    <NodeJs D={iconSize} key={4} />,
    <ReactJs D={iconSize} key={5} />,
    <NextJs D={iconSize} key={6} />,
    <TailwindCss D={iconSize} key={7} />,
    <ReactRouter D={iconSize} key={8} />,
    <GitHub D={iconSize} key={9} />,
    <Vite D={iconSize} key={10} />,
  ];
  return (
    <PageHolder>
      <ContentTitle title="SOME WORK" />

      <WorkContent />

      <IconSlider iconList={iconList} duration={15} height={150} />
    </PageHolder>
  );
}
