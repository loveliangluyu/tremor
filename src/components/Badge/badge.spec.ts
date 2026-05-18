import { expect, test } from "@playwright/test"

test.describe("Expect default badge", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-badge--default&viewMode=story")
    await page
      .getByText("Badge")
      .click()
    await expect(
      page
        .getByText("Badge"),
    ).toBeVisible()
    await expect(
      page
        .locator("#storybook-root"),
    ).toContainText("Badge")
  })
})

test.describe("Expect accordion variants", () => {
  test("to inlcude all variants", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-badge--variants&viewMode=story")
    await expect(
      page
        .getByText("Neutral"),
    ).toBeVisible()
    await expect(
      page
        .locator("#storybook-root")
        .getByText("Default"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Success"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Error"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Warning"),
    ).toBeVisible()
  })
})

test.describe("Expect badge as link", () => {
  test("to be a link", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-badge--anchor-with-badge-variants-style&viewMode=story",
    )
    await expect(
      page
        .getByRole("link"),
    ).toBeDefined()
  })
})
