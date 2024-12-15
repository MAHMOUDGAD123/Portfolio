import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
  // point this to wherever you want
  // await page.goto("http://localhost:3579/"); // next.js
  // await page.goto("http://localhost:5173/"); // vidl
  await page.goto("https://vidl-client.vercel.app/"); // vidl

  // keep browser open
  await page.pause();
});
