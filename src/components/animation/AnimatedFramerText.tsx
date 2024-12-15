import "@/styles/animatedFramerText.css";

interface Props {
  text: string;
}

export default function AnimatedFramerText({ text }: Props) {
  return <div className="animated-framer-text" data-text={text}></div>;
}
