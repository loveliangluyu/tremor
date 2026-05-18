import { expect, test } from "@playwright/test"

test.describe("Expect progresscircle default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progresscircle--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("progresscircle"),
    ).toBeVisible()
  })
})
test.describe("Expect progresscircle with children", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progresscircle--with-children&viewMode=story",
    )
    await expect(
      page
        .getByTestId("progresscircle"),
    ).toBeVisible()
  })
  test("to have children", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progresscircle--with-children&viewMode=story",
    )
    await expect(
      page
        .getByTestId("progresscircle"),
    ).toBeVisible()

    await expect(
      page
        .getByText("%"),
    ).toBeVisible()
  })
})
