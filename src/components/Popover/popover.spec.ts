import { expect, test } from "@playwright/test"

test.describe("Expect popover default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-popover--default&viewMode=story")
    await page
      .getByText("Open")
      .click()
    await expect(
      page
        .getByText("Place content for the popover"),
    ).toBeVisible()
  })

  test("to be rendered and closeable", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-popover--default&viewMode=story")
    await page
      .getByText("Open")
      .click()
    await expect(
      page
        .getByText("Place content for the popover"),
    ).toBeVisible()
    await page
      .getByText("Open")
      .click()
    await expect(
      page
        .getByText("Place content for the popover"),
    ).toHaveCount(0)
  })
})
