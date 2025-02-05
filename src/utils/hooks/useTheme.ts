import { useEffect, createContext } from "react";
import { themesMap, type ThemeType } from "../constants";
import { useLocalStorage } from "./useLocalStorage";
import { useMounted } from "./useMounted";

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
  const mounted = useMounted();
  const [theme, setTheme] = useLocalStorage(key, defaultValue);

  useEffect(() => {
    document.documentElement.style.colorScheme = themesMap.get(theme)!.cssValue;
  }, [theme, key]);

  return [theme, setTheme, mounted];
};
