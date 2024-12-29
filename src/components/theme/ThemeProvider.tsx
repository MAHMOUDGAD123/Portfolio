"use client";
import { THEME_KEY } from "@/utils/constants";
import { type UseStateLSType, useTheme } from "@/utils/hooks/useTheme";
import { createContext } from "react";

export const ThemeContext = createContext<UseStateLSType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext value={useTheme(THEME_KEY, "system")}>
      {children}
    </ThemeContext>
  );
}

/**
 * This is a simple context provider that wraps the children with the useTheme hook.
 * you can also add this code to the head of the document (RootLayout) to avoid theme flickering on page load:
 *
 * <head>
 *  // eslint-disable-next-line
 *  <script src="/theme.js" />
 * </head>
 */
