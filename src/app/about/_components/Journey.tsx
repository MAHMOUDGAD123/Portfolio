"use client";
import AutoWrittenParagraph from "@/components/animation/AutoWrittenParagraph";
import { CAREER_START_DATE } from "@/utils/constants";
import { getDuration } from "@/utils/tools";
import { createContext, useCallback, useState, type ReactNode } from "react";

// Journey Context Start
interface JourneyParagraphStateContextType {
  done: boolean;
  lastIndex: number;
  nodes: ReactNode[];
}

export const ParagraphStateContext = createContext<{
  paragraphState: JourneyParagraphStateContextType;
  updateNodes: (newNode: ReactNode) => void;
  updateDone: (value: boolean) => void;
  updateLastIndex: (newIndex: number) => void;
  cleanNodes: () => void;
} | null>(null);
// Journey Context End

export default function Journey() {
  // Journey Context Start
  const [journeyParagraphState, updateJourneyParagraphState] =
    useState<JourneyParagraphStateContextType>({
      done: false,
      lastIndex: 0,
      nodes: [],
    });

  const updateNodes = useCallback((newNode: ReactNode) => {
    updateJourneyParagraphState((state) => ({
      ...state,
      nodes: [...state.nodes, newNode],
    }));
  }, []);

  const cleanNodes = useCallback(() => {
    updateJourneyParagraphState((state) => ({
      ...state,
      nodes: [],
    }));
  }, []);

  const updateDone = useCallback((value: boolean) => {
    updateJourneyParagraphState((state) => ({
      ...state,
      done: value,
    }));
  }, []);

  const updateLastIndex = useCallback((newIndex: number) => {
    updateJourneyParagraphState((state) => ({
      ...state,
      lastIndex: newIndex,
    }));
  }, []);
  // Journey Context End

  const links: [string, string][] = [
    ["ZWS", "https://www.youtube.com/@ElzeroWebSchool"],
    ["MDN", "https://developer.mozilla.org/en-US/"],
    ["ReactJs", "https://react.dev/"],
  ];
  const { count, label } = getDuration(CAREER_START_DATE);
  const text = `${count >>> 0} ${label} ago, I started my journey as a frontend developer, diving into the world of web development. At first, I relied heavily on YouTube tutorials (<#@ZWS@#>) to grasp the basics, but soon I found that reading through official documentation (<#@MDN@#>) gave me a deeper understanding of the technologies I was working with. As I continued to learn, I began working with <#@ReactJs@#>, which further expanded my skills and allowed me to build dynamic, interactive user interfaces with greater ease.`;

  return (
    <ParagraphStateContext
      value={{
        paragraphState: journeyParagraphState,
        updateDone,
        updateLastIndex,
        updateNodes,
        cleanNodes,
      }}
    >
      <AutoWrittenParagraph
        paragraph={text}
        links={links}
        sessionStorageKey="_journey_"
      />
    </ParagraphStateContext>
  );
}
