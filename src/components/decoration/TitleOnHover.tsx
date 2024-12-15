import "../../styles/titleOnHover.css";

interface Props {
  children: React.ReactNode;
  title: string;
  position?: "top" | "bottom";
}

export default function TitleOnHover({ children, title, position }: Props) {
  const className = `title-on-hover ${position ? position : "top"}`;
  return (
    <div className={className} data-title={title}>
      {children}
    </div>
  );
}
