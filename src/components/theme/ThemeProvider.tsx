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
      {/* eslint-disable-next-line */}
      <script src="/theme.js" />
    </ThemeContext>
  );
}
