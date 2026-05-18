import { expect, test } from "@playwright/test"

test.describe("Expect textarea default", () => {
  test("to render", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-textarea--default&viewMode=story")
    await expect(
      page
        .getByRole("textbox"),
    ).toBeVisible()
  })

  test("to be editable", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-textarea--default&viewMode=story")
    await page
      .getByRole("textbox")
      .click()
    await page
      .getByRole("textbox")
      .fill("Some text\n")
    await expect(
      page
        .getByRole("textbox"),
    ).toHaveValue("Some text\n")
  })

  test("to have a placeholder", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-textarea--placeholder&viewMode=story",
    )
    await expect(
      page
        .getByPlaceholder("Write something..."),
    ).toBeVisible()
  })
})
