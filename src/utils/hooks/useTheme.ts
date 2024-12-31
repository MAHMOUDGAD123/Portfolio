import { useState, useEffect, createContext } from "react";
import { themesMap, type ThemeType } from "../constants";
import { useStateLs } from "./useStateLs";

export type UseStateLSType = [
  ThemeType,
  React.Dispatch<React.SetStateAction<ThemeType>>,
  boolean,
];

export const ThemeContext = createContext<UseStateLSType | null>(null);

/** a custom useState to store the state in the localStorage */
export const useTheme = (
  key: string,
  defaultValue: ThemeType,
): UseStateLSType => {
  const [mounted, setMounted] = useState(() => false);
  const [theme, setTheme] = useStateLs(key, defaultValue);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = themesMap.get(theme)!.cssValue;
  }, [theme, key]);

  return [theme, setTheme, mounted];
};
