import PageHolder from "@/components/layout/PageHolder";
import AboutContent from "./_components/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

interface Props {
  children: React.ReactNode;
  journey: React.ReactNode;
  education: React.ReactNode;
  skills: React.ReactNode;
}

export default async function AboutLayout({
  children,
  education,
  journey,
  skills,
}: Props) {
  return (
    <PageHolder>
      {children}
      <AboutContent journey={journey} skills={skills} education={education} />
    </PageHolder>
  );
}
