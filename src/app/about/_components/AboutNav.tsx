import CustomLink from "@/components/navigation/CustomLink";

const aboutLinks: { text: string; href: string }[] = [
  { text: "Journey", href: "/about" },
  { text: "Education", href: "/about/education" },
  { text: "Skills", href: "/about/skills" },
  { text: "Contact", href: "/about/contact" },
];

export default function AboutNav() {
  return (
    <div className="flex flex-col gap-[20px] max-_xl:m-auto max-_xl:max-w-[250px]">
      {aboutLinks.map(({ text, href }) => (
        <CustomLink key={text} text={text} href={href} />
      ))}
    </div>
  );
}
