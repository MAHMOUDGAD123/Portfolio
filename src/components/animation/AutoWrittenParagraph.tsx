"use client";
import { type ReactNode, useContext, useEffect, useRef, useState } from "react";
import { waitFor } from "@/utils/tools";
import { ParagraphStateContext } from "@/app/about/_components/AboutContent";
import InlineTextLink from "@/components/decoration/InlineTextLink";

interface Props {
  paragraph: string;
  links: [string, string][];
  sessionStorageKey: string;
}

export default function AutoWrittenParagraph({
  paragraph,
  links,
  sessionStorageKey,
}: Props) {
  const {
    paragraphState,
    updateNodes,
    updateDone,
    updateLastIndex,
    cleanNodes,
  } = useContext(ParagraphStateContext)!;
  const isDone = paragraphState.done;
  const linksMap = useRef<Map<string, string>>(new Map(links));
  const linksIndeces = useRef(new Map<number, string>());
  const splittedParagraph = useRef<string[]>([]);
  const index = paragraphState.lastIndex;
  const [isWriting, setIsWriting] = useState(() => false);

  useEffect(() => {
    if (isDone) return;
    if (sessionStorage.getItem(sessionStorageKey) !== null) {
      // if the same browser session - return the paragraph without rewriting it
      cleanNodes();
      updateNodes(
        paragraph.split(/<#@(.*?)@#>/).map((val) => {
          const href = linksMap.current.get(val);
          return href ? (
            <InlineTextLink key={val} href={href} text={val} />
          ) : (
            val
          );
        }),
      );
      return;
    }
    console.log("%cBuilding Journey...", "color:orange");
    // [1] get all the links indeces in the (paragraph)
    [...paragraph.matchAll(/<#@(.*?)@#>/g)].forEach((regexArray) => {
      linksIndeces.current.set(regexArray.index, regexArray[1]);
    });
    // [2] split the (paragraph) into chars
    splittedParagraph.current = paragraph.split("");
    setIsWriting(true);
  }, [isDone, paragraph]);

  useEffect(() => {
    if (isDone || !isWriting) return;
    if (index >= splittedParagraph.current.length) {
      // set the paragraph state as true to prevent from writing again
      // as long as we still on the /about route
      updateDone(true);
      setIsWriting(false);
      // save to sessionStorage to prevent rewriting on the same session
      sessionStorage.setItem(sessionStorageKey, "");
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
  }, [
    isWriting,
    index,
    isDone,
    paragraph,
    updateDone,
    updateLastIndex,
    updateNodes,
  ]);

  return (
    <p className="text-[--sec-txt-col]">
      {paragraphState.nodes}

      {isWriting && (
        <span className="animate-pulse select-none rounded-[2px] bg-dodgerblue before:opacity-0 before:content-['|'] motion-reduce:animate-none"></span>
      )}
    </p>
  );
}
