"use client";
import { type ReactNode, useContext, useEffect, useRef, useState } from "react";
import { waitFor } from "@/utils/tools";
import { JourneyParagraphStateContext } from "@/app/about/_components/AboutContent";
import InlineTextLink from "@/components/decoration/InlineTextLink";

interface Props {
  paragraph: string;
  links: [string, string][];
}

export default function AutoWrittenParagraph({ paragraph, links }: Props) {
  const { journeyParagraphState, updateNodes, updateDone, updateLastIndex } =
    useContext(JourneyParagraphStateContext)!;
  const isDone = journeyParagraphState.done;
  const linksMap = useRef<Map<string, string>>(new Map(links));
  const linksIndeces = useRef(new Map<number, string>());
  const splittedParagraph = useRef<string[]>([]);
  const index = journeyParagraphState.lastIndex;
  const [isWriting, setIsWriting] = useState(() => false);

  useEffect(() => {
    if (isDone) return;
    console.log("%cBuilding Journey...", "color:orange");
    // [1] get all the links indeces in the (paragraph)
    [...paragraph.matchAll(/<#@(.*?)@#>/g)].forEach((regexArray) => {
      linksIndeces.current.set(regexArray.index, regexArray[1]);
    });
    // [2] split the (paragraph) into chars
    splittedParagraph.current = paragraph.split("");
    setIsWriting(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isDone || !isWriting) return;
    if (index >= splittedParagraph.current.length) {
      // set the paragraph state as true to prevent from writing again
      // as long as we still on the /about route
      updateDone(true);
      setIsWriting(false);
      return;
    }

    (async () => {
      console.log("%cWriting Journey...", "color:orange");
      await waitFor(((Math.random() * 3 + 1) >>> 0) * 10); // delay
      let indexPlus = 0;
      let node: ReactNode;

      if (linksIndeces.current.has(index)) {
        const text = linksIndeces.current.get(index)!;
        const url = linksMap.current.get(text)!;

        node = <InlineTextLink key={text} href={url} text={text} />;
        indexPlus = 6 + text.length;
      } else {
        node = splittedParagraph.current![index];
        indexPlus = 1;
      }

      updateNodes(node);
      updateLastIndex(index + indexPlus);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWriting, index]);

  return (
    <p className="text-[--sec-txt-col]">
      {journeyParagraphState.nodes}

      {isWriting && (
        <span className="animate-pulse select-none rounded-[2px] bg-dodgerblue before:opacity-0 before:content-['|'] motion-reduce:animate-none"></span>
      )}
    </p>
  );
}
