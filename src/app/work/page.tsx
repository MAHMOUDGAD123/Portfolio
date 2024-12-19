import PageHolder from "@/components/layout/PageHolder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrok",
};

export default function Work() {
  return (
    <PageHolder>
      <h1 className="mx-auto mb-[50px] w-fit animate-settleTop select-none whitespace-nowrap bg-gradient bg-clip-text text-center font-saira text-[45px] text-transparent opacity-70 motion-reduce:animate-none max-_sm:text-[35px] max-_usm:text-[30px]">
        Some Work
      </h1>
    </PageHolder>
  );
}
