"use client";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../theme/ThemeToggle"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-[10px] rounded-full border-[1px] border-solid border-[#77777755] p-[7px_10px] *:aspect-square *:w-[10px] *:animate-pulse *:rounded-full *:bg-current motion-reduce:*:animate-none">
      <span></span>
      <span></span>
      <span></span>
    </div>
  ),
});

export default function ThemeHolder() {
  return <ThemeToggle />;
}
