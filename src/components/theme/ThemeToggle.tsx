"use client";
import { useContext } from "react";
import { themesMap } from "@/utils/constants";
import TitleOnHover from "../decoration/TitleOnHover";
import { ThemeContext } from "@/utils/hooks/useTheme";

export default function ThemeToggle() {
  const [theme, setTheme, mounted] = useContext(ThemeContext)!;

  if (!mounted) return null;

  return (
    <div className="flex items-center rounded-full border-[1px] border-solid border-[#77777770] p-[2px] text-[14px] *:cursor-pointer *:opacity-50 *:transition-opacity hover:*:opacity-100 motion-reduce:*:transition-none">
      {[...themesMap.entries()].map(([key, { icon }]) => {
        const style = `w-[32px] flex items-center justify-center aspect-square rounded-full${theme === key ? " text-dodgerblue bg-[light-dark(#00000025,#ffffff25)]" : ""}`;
        return (
          <TitleOnHover key={key} position="bottom" title={key.toUpperCase()}>
            <span className={style} onClick={() => setTheme(key)}>
              <i className={`fa-solid ${icon}`}></i>
            </span>
          </TitleOnHover>
        );
      })}
    </div>
  );
}
