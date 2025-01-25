import CustomLink from "@/components/navigation/CustomLink";

export default function WorkNav() {
  const aboutLinks: { text: string; href: string }[] = [
    { text: "Projects", href: "/work" },
    { text: "Plus", href: "/work/plus" },
  ];

  return (
    <div className="m-auto flex animate-settleBottom flex-wrap justify-center gap-[15px] text-[15px] *:w-[110px] motion-reduce:animate-none">
      {aboutLinks.map(({ text, href }) => (
        <CustomLink key={text} text={text} href={href} />
      ))}
    </div>
  );
}
