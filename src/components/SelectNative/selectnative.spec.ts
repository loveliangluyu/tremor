import { expect, test } from "@playwright/test"

test.describe("Expect selectnative", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-selectnative--default&viewMode=story",
    )
    await expect(
      page
        .getByRole("combobox"),
    ).toBeVisible()
  })
  test("to make a selection", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-selectnative--default&viewMode=story",
    )
    await page
      .getByRole("combobox")
      .selectOption("19-39")
  })
})
