import AnimatedFramerText from "@/components/animation/AnimatedFramerText";
import MGCard from "@/components/layout/MGCard";
import PageHolder from "@/components/layout/PageHolder";
import Statistics from "@/components/statistics/Statistics";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home - MG",
};

export default async function Home() {
  return (
    <PageHolder>
      <div className="mt-[20px] flex items-center justify-between gap-[25px] max-_xl:flex-col-reverse max-_xl:gap-[70px]">
        <MGCard />
        <AnimatedFramerText text="MG" />
      </div>

      <Statistics />
    </PageHolder>
  );
}
