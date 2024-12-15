"use client";
import AboutNav from "@/components/navigation/AboutNav";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useState, type ReactNode } from "react";

// Journey Context Start
interface JourneyParagraphStateContextType {
  done: boolean;
  lastIndex: number;
  nodes: ReactNode[];
}

const initialState: JourneyParagraphStateContextType = {
  done: false,
  lastIndex: 0,
  nodes: [],
};

export const JourneyParagraphStateContext = createContext<{
  journeyParagraphState: JourneyParagraphStateContextType;
  updateNodes: (newNode: ReactNode) => void;
  updateDone: (value: boolean) => void;
  updateLastIndex: (newIndex: number) => void;
} | null>(null);
// Journey Context End

interface Props {
  journey: React.ReactNode;
  skills: React.ReactNode;
  contact: React.ReactNode;
}

export default function AboutContent({ journey, skills, contact }: Props) {
  // Journey Context Start
  const [journeyParagraphState, updateJourneyParagraphState] =
    useState<JourneyParagraphStateContextType>(initialState);

  const updateNodes = useCallback((newNode: ReactNode) => {
    updateJourneyParagraphState((state) => ({
      ...state,
      nodes: [...state.nodes, newNode],
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

  const pathName = usePathname();
  const routeMap = new Map<string, [string, React.ReactNode, string]>([
    ["/about", ["My Journey", journey, "Crafting sleek||web interfaces."]],
    [
      "/about/skills",
      ["My Skills", skills, "Designing smooth||user experiences."],
    ],
    [
      "/about/contact",
      ["My Contact", contact, "Coding interactive||digital solutions."],
    ],
  ]);
  const [title, component] = routeMap.get(pathName)!;

  return (
    <JourneyParagraphStateContext
      value={{
        journeyParagraphState,
        updateDone,
        updateLastIndex,
        updateNodes,
      }}
    >
      <h1 className="mx-auto mb-[50px] w-fit animate-settleTop select-none whitespace-nowrap bg-gradient bg-clip-text text-center font-saira text-[45px] text-transparent opacity-70 motion-reduce:animate-none max-_sm:text-[35px] max-_usm:text-[30px]">
        ABOUT ME ?
      </h1>

      <div className="flex gap-[70px] max-_xl:flex-col max-_xl:items-center">
        <div className="w-[215px] animate-settleLeft motion-reduce:animate-none max-_xl:m-auto max-_xl:w-full">
          <div className="mb-[50px] text-[20px] font-extrabold max-_xl:mx-auto max-_xl:text-center max-_xl:text-[30px] max-_md:text-[25px] max-_sm:text-[18px]">
            {routeMap
              .get(pathName)![2]
              .split("||")
              .map((txt, i) => (
                <div key={txt} className="whitespace-nowrap">
                  {i === 0
                    ? txt.split(" ").map((word, i) => {
                        return i === 1 ? (
                          <span key={word} className="text-dodgerblue">
                            {word}
                          </span>
                        ) : (
                          `${word} `
                        );
                      })
                    : txt}
                </div>
              ))}
          </div>

          <AboutNav />
        </div>

        <div className="relative flex-1 animate-settleRight motion-reduce:animate-none max-_xl:text-center">
          <h1 className="relative mb-[50px] w-fit select-none whitespace-nowrap text-[35px] font-extrabold before:absolute before:left-0 before:top-[105%] before:h-[3px] before:w-[0%] before:animate-halfWidth before:rounded-full before:bg-dodgerblue before:transition-[left] before:duration-500 after:absolute after:right-0 after:top-[-5%] after:h-[3px] after:w-[0%] after:animate-halfWidth after:rounded-full after:bg-dodgerblue after:transition-[right] after:duration-500 hover:before:left-[50%] hover:after:right-[50%] before:motion-reduce:w-[50%] before:motion-reduce:animate-none after:motion-reduce:w-[50%] after:motion-reduce:animate-none motion-reduce:hover:before:left-0 motion-reduce:hover:after:right-0 max-_xl:mx-auto max-_xl:mb-[70px] max-_usm:text-[25px]">
            {title}
          </h1>

          {component}
        </div>
      </div>
    </JourneyParagraphStateContext>
  );
}
