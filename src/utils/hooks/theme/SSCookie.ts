"use server";
import { ThemeType } from "@/utils/constants";
import { cookies } from "next/headers";

export const getServerCookieTheme = async (key: string): Promise<ThemeType> => {
  return (await cookies()).get(key)?.value as ThemeType;
};
