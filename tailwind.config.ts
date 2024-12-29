import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        _4xl: "1280px",
        _3xl: "1024px",
        _2xl: "950px",
        _xl: "850px",
        _lg: "550px",
        _md: "450px",
        _sm: "350px",
        _usm: "250px",
      },
      colors: {
        dodgerblue: "#1e90ff",
        dodgerblue_50: "#1e90ff80",
        dodgerblue_30: "#1e90ff30",
        dodgerblue_20: "#1e90ff20",
        SecTextCol: "#777",
        drkTxtCol: "#ededed",
        litTxtCol: "#171717",
        seclitbg: "#eeeeee",
        secdrkbg: "#222222",
        itembg: "light-dark(#eee,#222)",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #1e90ff, var(--text-col))",
      },
      fontFamily: {
        roboMono: ["var(--font-roboto-mono)"],
        saira: ["var(--font-saira-stencil-one)"],
      },
      keyframes: {},
      animation: {
        settleX: "settle-x-gpu 300ms linear forwards",
        spinClockwise: "spin-clockwise 1s linear infinite",
        spinAntiClockwise: "spin-anticlockwise 1s linear infinite",
        fillWidth: "fill-width 100ms linear forwards",
        halfWidth: "half-width 1s linear forwards",
        fullWidth: "full-width 1s linear forwards",
        settleLeft: "settle-left 1s linear forwards",
        settleRight: "settle-right 1s linear forwards",
        settleTop: "settle-top 1s linear forwards",
        settleBottom: "settle-bottom 1s linear forwards",
        fadeIn: "fade-in 1s linear forwards",
        fadeIn_settle:
          "fade-in 1s linear forwards, settle-bottom 1s linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
