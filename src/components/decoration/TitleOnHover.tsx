import "@/styles/title-on-hover.css";

interface Props {
  children: React.ReactNode;
  title: string;
  position?: "top" | "bottom";
  className?: string;
}

export default function TitleOnHover({
  children,
  title,
  position,
  className,
}: Props) {
  const class_name = `title-on-hover ${position ? position : "top"}${className ? " " + className : ""}`;
  return (
    <div className={class_name} data-title={title}>
      {children}
    </div>
  );
}
