interface Props {
  href: string;
  text: string;
}

export default function InlineTextLink({ href, text }: Props) {
  return (
    <a href={href} target="_blank" className="text-dodgerblue">
      {text}
    </a>
  );
}
