"use client";
import { useContext } from "react";
import { themesMap } from "@/utils/constants";
import TitleOnHover from "../decoration/TitleOnHover";
import { ThemeContext } from "@/utils/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggle() {
  const [theme, setTheme, mounted] = useContext(ThemeContext)!;

  if (!mounted) return null;

  return (
    <div className="flex items-center rounded-full border-[2px] border-solid border-[#99999975] p-[2px] text-[1rem]">
      {[...themesMap.entries()].map(([key, { icon }]) => {
        const style = `w-[33px] flex items-center justify-center aspect-square rounded-full${theme === key ? " text-dodgerblue bg-[light-dark(#00000025,#ffffff25)]" : ""}`;
        return (
          <TitleOnHover
            key={key}
            position="bottom"
            title={key.toUpperCase()}
            className="cursor-pointer opacity-50 transition-opacity focus-within:opacity-100 hover:opacity-100 motion-reduce:transition-none"
          >
            <button className={style} onClick={() => setTheme(key)}>
              <FontAwesomeIcon icon={icon} />
            </button>
          </TitleOnHover>
        );
      })}
    </div>
  );
}
