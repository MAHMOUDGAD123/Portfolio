import AutoWrittenParagraph from "@/components/animation/AutoWrittenParagraph";

export default async function Journey() {
  const links: [string, string][] = [
    ["ZWS", "https://www.youtube.com/@ElzeroWebSchool"],
    ["MDN", "https://developer.mozilla.org/en-US/"],
    ["ReactJs", "https://react.dev/"],
  ];
  const text =
    "7 months ago, I started my journey as a frontend developer, diving into the world of web development. At first, I relied heavily on YouTube tutorials (<#@ZWS@#>) to grasp the basics, but soon I found that reading through official documentation (<#@MDN@#>) gave me a deeper understanding of the technologies I was working with. As I continued to learn, I began working with <#@ReactJs@#>, which further expanded my skills and allowed me to build dynamic, interactive user interfaces with greater ease.";

  return <AutoWrittenParagraph paragraph={text} links={links} />;
}

/*

// return the paragraph directly if it's already built
<p className="text-[--sec-txt-col]">
  7 months ago, I started my journey as a frontend developer, diving into
  the world of web development. At first, I relied heavily on YouTube
  tutorials (
  <InlineTextLink
    href="https://www.youtube.com/@ElzeroWebSchool"
    text="ZWS"
  />
  ) to grasp the basics, but soon I found that reading through official
  documentation (
  <InlineTextLink
    href="https://developer.mozilla.org/en-US/"
    text="MDN"
  />
  ) gave me a deeper understanding of the technologies I was working with.
  As I continued to learn, I began working with{" "}
  <InlineTextLink href="https://react.dev/" text="ReactJs" />, which
  further expanded my skills and allowed me to build dynamic, interactive
  user interfaces with greater ease.
</p>

*/
