"use client";
import { ThemeType } from "@/utils/constants";

export const getClientCookieTheme = (key: string) => {
  try {
    return document.cookie
      .split(";")
      .find((c) => c.includes(key))
      ?.split("=")[1] as ThemeType;
  } catch {
    return null;
  }
};
