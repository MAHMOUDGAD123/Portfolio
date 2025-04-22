"use client";
import { waitFor } from "@/utils/tools";
import { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  total: number;
  title: string;
}

export default function IncrementalStatistic({ total, title }: Props) {
  const [counter, setCounter] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);
  const counterElement = useRef<HTMLDivElement | null>(null);
  const delay: Record<number, number> = useMemo(
    () => ({
      9: 20,
      8: 30,
      7: 40,
      6: 50,
      5: 100,
      4: 200,
      3: 300,
      2: 400,
      1: 500,
    }),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(counterElement.current!);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      (async () => {
        if (counter >= total) return;
        const diff = total - counter;
        await waitFor(delay[diff] ?? 5);
        setCounter((c) => c + 1);
      })();
    }
  }, [counter, total, isInView, delay]);

  return (
    <div ref={counterElement} className="flex items-center gap-2">
      <div className="flex items-center text-[45px] font-extrabold max-_md:text-[40px]">
        {counter}
      </div>

      <div className="text-[0.8rem] font-extrabold text-SecTextCol">
        {title.split("|").map((text, i) => (
          <div key={i} className="whitespace-nowrap">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
