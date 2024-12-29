import { useState, useEffect } from "react";
import { themesMap, type ThemeType } from "../../constants";
import { getClientCookieTheme } from "./CSCookie";

type useStateLSType = [
  ThemeType,
  React.Dispatch<React.SetStateAction<ThemeType>>,
  boolean,
];

/** a custom useState to store the state in the localStorage */
export const useTheme = (
  key: string,
  defaultValue: ThemeType,
): useStateLSType => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(
    () => getClientCookieTheme(key) || defaultValue,
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = themesMap.get(theme)!.cssValue;
    document.cookie = `${key}=${theme};path=/;max-age=31536000;`;
  }, [theme, key]);

  return [theme, setTheme, mounted];
};
