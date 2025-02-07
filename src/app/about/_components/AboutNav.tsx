import CustomLink from "@/components/navigation/CustomLink";

export default function AboutNav() {
  const aboutLinks: { text: string; href: string }[] = [
    { text: "Journey", href: "/about" },
    { text: "Education", href: "/about/education" },
    { text: "Skills", href: "/about/skills" },
  ];

  return (
    <div className="flex flex-col gap-[20px] max-_xl:m-auto max-_xl:max-w-[250px]">
      {aboutLinks.map(({ text, href }) => (
        <CustomLink key={text} text={text} href={href} />
      ))}
    </div>
  );
}
