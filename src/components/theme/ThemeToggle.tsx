"use client";
import { themesMap } from "@/utils/constants";
import { useStateLs } from "@/utils/hooks/useStateLs";
import { useLayoutEffect } from "react";

export default function ThemeToggle() {
  console.log("Theme Render");
  const localStorageKey = "__MG_theme__";
  const [theme, setTheme] = useStateLs(localStorageKey, "system");

  useLayoutEffect(() => {
    document.documentElement.style.colorScheme = themesMap.get(theme)!.cssValue;
  }, [theme]);

  return (
    <div className="flex items-center gap-[10px] rounded-full border-[1px] border-solid border-[#77777755] p-[7px_10px] text-[14px] *:cursor-pointer *:opacity-50 *:transition-opacity hover:*:opacity-100">
      {[...themesMap.entries()].map(([key, { icon }]) => {
        return (
          <i
            className={`${theme === key ? "text-dodgerblue" : ""} fa-solid ${icon}`}
            key={key}
            onClick={() => setTheme(key)}
          ></i>
        );
      })}
    </div>
  );
}
