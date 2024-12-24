import PageHolder from "@/components/layout/PageHolder";
import ContentTitle from "@/components/decoration/ContentTitle";
import WorkContent from "./_components/WorkContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrok",
};

export default function Work() {
  return (
    <PageHolder>
      <ContentTitle title="SOME WORK" />

      <WorkContent />
    </PageHolder>
  );
}
