import PageHolder from "@/components/layout/PageHolder";
import AboutContent from "./_components/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

interface Props {
  children: React.ReactNode;
  journey: React.ReactNode;
  contact: React.ReactNode;
  skills: React.ReactNode;
}

export default function AboutLayout({
  children,
  journey,
  contact,
  skills,
}: Props) {
  return (
    <PageHolder>
      {children}
      <AboutContent journey={journey} contact={contact} skills={skills} />
    </PageHolder>
  );
}
