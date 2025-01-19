"use client";
import AutoWrittenParagraph from "@/components/animation/AutoWrittenParagraph";
import { CAREER_START_DATE } from "@/utils/constants";
import { getDuration } from "@/utils/tools";

export default function Journey() {
  const links: [string, string][] = [
    ["ZWS", "https://www.youtube.com/@ElzeroWebSchool"],
    ["MDN", "https://developer.mozilla.org/en-US/"],
    ["ReactJs", "https://react.dev/"],
  ];
  const { count, label } = getDuration(CAREER_START_DATE);
  const text = `${count >>> 0} ${label} ago, I started my journey as a frontend developer, diving into the world of web development. At first, I relied heavily on YouTube tutorials (<#@ZWS@#>) to grasp the basics, but soon I found that reading through official documentation (<#@MDN@#>) gave me a deeper understanding of the technologies I was working with. As I continued to learn, I began working with <#@ReactJs@#>, which further expanded my skills and allowed me to build dynamic, interactive user interfaces with greater ease.`;

  return (
    <AutoWrittenParagraph
      paragraph={text}
      links={links}
      sessionStorageKey="_journey_"
    />
  );
}
