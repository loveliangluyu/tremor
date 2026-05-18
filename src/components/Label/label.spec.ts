import { expect, test } from "@playwright/test"

test.describe("Expect label", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-label--default&viewMode=story")
    await expect(
      page
        .getByText("Label"),
    ).toBeVisible()
  })
})

test.describe("Expect label disabled", () => {
  test("to be disabeld", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-label--disabled&viewMode=story")
    await expect(
      page
        .getByTestId("label-disabled"),
    ).toBeVisible()
  })
})
