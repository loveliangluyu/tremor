import { expect, test } from "@playwright/test"

test.describe("Expect Toggle", () => {
  test("to render TableRoot", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-toggle--default&viewMode=story")
    await expect(
      page
        .getByLabel('Toggle star')
    ).toBeVisible()
  })

})
