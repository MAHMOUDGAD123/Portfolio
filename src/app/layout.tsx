import "../styles/_globals.css";
import "../fonts/fa/css/all.min.css";
import React from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import SpinnerDecore from "@/components/decoration/SpinnerDecore";
import { THEME_KEY, themesMap } from "@/utils/constants";
import { getServerCookieTheme } from "@/utils/hooks/theme/SSCookie";

const robotoMono = localFont({
  src: "../fonts/RobotoMono.woff2",
  variable: "--font-roboto-mono",
  display: "swap",
  preload: false,
});

const sairaStencilOne = localFont({
  src: "../fonts/SairaStencilOne.woff2",
  variable: "--font-saira-stencil-one",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "MG",
    template: "%s - MG",
  },
  icons: "/imgs/favicon.svg",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // to avoid theme flickering on page load
  // we need to set the colorScheme value on the html tag
  // [1] get the theme value from cookies
  const themeValue = await getServerCookieTheme(THEME_KEY);
  // [2] get the cssValue of the theme
  const colorScheme = themesMap.get(themeValue)?.cssValue;

  return (
    <html
      lang="en"
      className={`${robotoMono.variable} ${sairaStencilOne.variable}`}
      style={{
        colorScheme: colorScheme,
      }}
    >
      <body className="mx-auto w-[900px] animate-fadeIn opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 max-_3xl:max-w-[800px] max-_2xl:max-w-[750px] max-_xl:max-w-[500px] max-_lg:max-w-[400px] max-_md:max-w-[300px] max-_sm:max-w-[240px] max-_usm:max-w-[195px]">
        <Header />
        <main className="relative min-h-[--main-height] w-full">
          {children}
        </main>
        <Footer />

        <SpinnerDecore
          nStroke={7}
          strokeWidth={21}
          radiusStart={20}
          radiusPlus={55}
          strokeDashStart={40}
          strokeDashPlus={30}
          translateX="-50%"
          translateY="-50%"
          top={500}
          left={-30}
          durationStart={3}
          strokeOpacity={0.2}
        />

        <Script src="/scripts.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
