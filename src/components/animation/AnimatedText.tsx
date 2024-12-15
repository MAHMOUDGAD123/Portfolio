import "../../styles/animatedText.css";

interface Props {
  text: string;
  width: number;
  height: number;
  fontSize: number;
}

export default function AnimatedText({ text, width, height, fontSize }: Props) {
  return (
    <div className="animated-text">
      <svg width={width} height={height}>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          fontSize={`${fontSize}px`}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
