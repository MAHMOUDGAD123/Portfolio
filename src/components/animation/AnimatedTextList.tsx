"use client";
import "@/styles/animated-text-list.css";
import { useEffect, useRef } from "react";

interface Props {
  textList: string[];
  duration: number;
}

export default function AnimatedTextList({ textList, duration }: Props) {
  const animatedListEle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ele = animatedListEle.current!;
    const count = textList.length;
    const animationDuration = count * duration; // the total anmation_duuration foreach
    ele.style.setProperty("--duration", `${animationDuration}s`);
    ele.style.setProperty("--delay", `${animationDuration / count}s`);

    // set the delay multiplyer for all nodes
    for (let i = 0; i < count; ++i) {
      (ele.children.item(i) as HTMLSpanElement).style.setProperty(
        "--mult",
        `${i}`,
      );
    }

    // Create stylesheet
    const sheet = new CSSStyleSheet();
    // Apply a rule to the sheet
    sheet.replaceSync(
      `@keyframes display-text { ${
        (100 / count) >>> 0
      }%,100% { visibility: hidden } }`,
    );
    // Apply the stylesheet to a document
    document.adoptedStyleSheets = [sheet];

    // show text
    ele.style.setProperty("--show", "inline-block");
  }, [duration, textList.length]);

  return (
    <div
      ref={animatedListEle}
      data-fill-width={textList.sort((a, b) => b.length - a.length)[0]}
      className="animated-text-list"
    >
      {textList.map((txt, i) => (
        <span key={i} data-text={txt}>
          {txt}
        </span>
      ))}
    </div>
  );
}
