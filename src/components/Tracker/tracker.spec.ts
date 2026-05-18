import { expect, test } from "@playwright/test"

test.describe("Expect tracker default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-tracker--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("tracker"),
    ).toBeVisible()
  })
  test("to have a bar", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-tracker--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("tracker"),
    ).toBeVisible()
    await expect(
      page
        .locator(".size-full > .size-full")
        .first(),
    ).toBeVisible()
  })
  test("to have a tooltip", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-tracker--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("tracker"),
    ).toBeVisible()
    await expect(
      page
        .locator(".size-full > .size-full")
        .first(),
    ).toBeVisible()
    page
      .locator(".size-full > .size-full")
      .first()
      .hover()
    await expect(
      page
        .getByText("Tracker Info"),
    ).toBeVisible()
  })
})
