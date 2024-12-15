"use client";
import { waitFor } from "@/utils/tools";
import { useEffect, useState } from "react";

interface Props {
  total: number;
  title: string;
}

export default function IncrementalStatistic({ total, title }: Props) {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    (async () => {
      if (counter >= total) return;
      const diff = total - counter;
      await waitFor(
        (() => {
          switch (diff) {
            case 9:
              return 20;
            case 8:
              return 30;
            case 7:
              return 40;
            case 6:
              return 50;
            case 5:
              return 100;
            case 4:
              return 200;
            case 3:
              return 300;
            case 2:
              return 400;
            case 1:
              return 500;
            default:
              return 10;
          }
        })(),
      );
      setCounter((c) => c + 1);
    })();
  }, [counter, total]);

  return (
    <div className="flex items-center gap-2">
      <div className="text-[45px] font-extrabold max-_md:text-[37px]">
        {counter}
      </div>
      <div className="text-[12px] opacity-70">
        {title.split("|").map((text, i) => (
          <div key={i}>{text}</div>
        ))}
      </div>
    </div>
  );
}
