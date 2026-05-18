import { expect, test } from "@playwright/test"

test.describe("Expect divider", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-divider--default&viewMode=story")
    await expect(
      page
        .locator("#storybook-root div")
        .nth(1),
    ).toBeVisible()
  })
})

test.describe("Expect divider", () => {
  test("to render with icon child", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-divider--with-children&viewMode=story",
    )
    await expect(
      page
        .locator(".w-96 > div:nth-child(2)"),
    ).toBeVisible()
    await expect(
      page
        .getByRole("img"),
    ).toBeVisible()
  })
  test("to render with text child", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-divider--with-children&viewMode=story",
    )
    await expect(
      page
        .locator("div")
        .filter({ hasText: "Standard" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .getByText("Standard"),
    ).toBeVisible()
  })
})
