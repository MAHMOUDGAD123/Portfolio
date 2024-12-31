"use client";
import { THEME_KEY } from "@/utils/constants";
import { ThemeContext, useTheme } from "@/utils/hooks/useTheme";

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

//  This is a simple context provider that wraps the children with the useTheme hook.
//  [1] you should add this code to the head of the document (RootLayout) to avoid theme flickering on page load:
//
//  <head>
//   // eslint-disable-next-line
//   <script src="/theme-init.js" />
//  </head>
//
//  [2] then you should enable the (suppressHydrationWarning) attribute on the html tag.
//  to avoid hydration mismatch between the server and the client.
//  becasuse we are changing the theme on the client side only.
