import { test, expect } from "@playwright/test";

test("announcement, photos, and letter are public", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Eduardo!");
  expect((await request.get("/api/photos/package")).status()).toBe(200);
  expect((await request.get("/api/photos/truck")).status()).toBe(200);
  await page.goto("/congratulations");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Congratulations,Eduardo!");
});

test("photo cards sit side by side on desktop and stack on mobile", async ({ page, isMobile }) => {
  await page.goto("/");
  for (const img of await page.locator(".photo-wrap img").all()) {
    await expect.poll(() => img.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
  }
  const cards = await page.locator(".photo-card").all();
  const a = (await cards[0].boundingBox())!;
  const b = (await cards[1].boundingBox())!;
  expect(isMobile ? b.y > a.y + a.height : Math.abs(a.y - b.y) < 2).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: `test-results/gift-${isMobile ? "mobile" : "desktop"}.png`, fullPage: true });
});

test("provided details are prefilled and confirm opens the actual congratulations page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Recipient name")).toHaveValue("Eduardo Valdez");
  await expect(page.getByLabel("Sender", { exact: true })).toHaveValue("Evan Kate");
  await expect(page.getByLabel("Gifts", { exact: true })).toHaveValue("package and truck");
  await expect(page.getByLabel("Proposed delivery date")).toHaveValue("November 12");
  await page.getByRole("button", { name: "Confirm Package" }).click();
  await expect(page).toHaveURL(/\/congratulations\?/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Congratulations,Eduardo!");
  await expect(page.locator(".letter-body")).toContainText("Your gift package and truck are ready for delivery.");
  await expect(page.locator(".signature")).toHaveText("Evan Kate");
  await page.reload();
  await expect(page.locator(".signature")).toHaveText("Evan Kate");
});

test("entered details appear in the letter without any save or email request", async ({ page }) => {
  const posts: string[] = [];
  page.on("request", request => { if (request.method() === "POST") posts.push(request.url()); });
  await page.goto("/");
  await page.getByLabel("Recipient name").fill("MARIA SANTOS");
  await page.getByLabel("Sender", { exact: true }).fill("Alex");
  await page.getByLabel("Gifts", { exact: true }).fill("flowers and a book");
  await page.getByLabel("Proposed delivery date").fill("November 20");
  await page.getByRole("button", { name: "Confirm Package" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Congratulations,Maria!");
  await expect(page.locator(".letter-body")).toContainText("flowers and a book");
  await expect(page.locator(".letter-body")).toContainText("November 20");
  await expect(page.locator(".signature")).toHaveText("Alex");
  expect(posts).toEqual([]);
});

test("congratulations letter fits desktop and mobile", async ({ page, isMobile }) => {
  await page.goto("/congratulations");
  await expect(page.getByText("I hope you enjoy your gifts!")).toBeVisible();
  await expect(page.getByText("I’m excited to share this surprise with you.", { exact: false })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: `test-results/congratulations-${isMobile ? "mobile" : "desktop"}.png`, fullPage: true });
});
