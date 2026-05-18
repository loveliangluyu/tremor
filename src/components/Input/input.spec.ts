import { expect, test } from "@playwright/test"

test.describe("Expect Input default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-input--default&viewMode=story")
    await expect(
      page
        .getByRole("textbox"),
    ).toBeVisible()
  })

  test("to be editable", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-input--default&viewMode=story")
    await page
      .getByRole("textbox")
      .click()
    await page
      .getByRole("textbox")
      .fill("Add some text")
    await expect(
      page
        .getByRole("textbox"),
    ).toBeVisible()
    await expect(
      page
        .getByRole("textbox"),
    ).toHaveValue("Add some text")
    await page
      .getByRole("textbox")
      .click()
    await page
      .getByRole("textbox")
      .fill("")
    await expect(
      page
        .getByRole("textbox"),
    ).toBeEmpty()
  })

  test("to be disbaled", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-input--disabled&viewMode=story")
    await expect(
      page
        .getByRole("textbox"),
    ).toBeDisabled()
  })

  test("to have a placeholder", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-input--with-placeholder&viewMode=story",
    )
    await expect(
      page
        .getByPlaceholder("With Placeholder"),
    ).toBeVisible()
  })
})

test.describe("Expect Input password", () => {
  test("to be a password", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-input--type-password&viewMode=story",
    )
    await expect(
      page
        .getByRole("textbox"),
    ).toBeVisible()
    await expect(
      page
        .getByPlaceholder("Enter password"),
    ).toBeVisible()
    await expect(
      page
        .getByPlaceholder("Enter password"),
    ).toBeEmpty()
  })
})
