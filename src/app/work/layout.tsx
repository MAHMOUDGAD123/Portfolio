import PageHolder from "@/components/layout/PageHolder";
import WorkContent from "./_components/WorkContent";
import { Metadata } from "next";
import ContentTitle from "@/components/decoration/ContentTitle";

export const metadata: Metadata = {
  title: "Work",
};

interface Props {
  children: React.ReactNode;
  projects: React.ReactNode;
  plus: React.ReactNode;
}

export default async function WorkLayout({ children, projects, plus }: Props) {
  return (
    <PageHolder>
      {children}

      <ContentTitle title="SOME WORK" />

      <WorkContent projects={projects} plus={plus} />
    </PageHolder>
  );
}
