import { expect, test } from "@playwright/test"

test.describe("Expect select default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-select--default&viewMode=story")
    await expect(
      page
        .getByRole("combobox"),
    ).toBeVisible()
  })

  test("to make a selection", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-select--default&viewMode=story")
    await expect(
      page
        .getByRole("combobox"),
    ).toBeVisible()
    await page
      .getByRole("combobox")
      .click()
    await page
      .getByLabel("Striped Dress Shirt")
      .click()
    await expect(
      page
        .getByRole("combobox"),
    ).toContainText("Striped Dress Shirt")
  })

  test("to have first item selected and subsequent not", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-select--default&viewMode=story")
    await page
      .getByRole("combobox")
      .click()
    await page
      .getByLabel("Striped Dress Shirt")
      .click()
    await page
      .getByRole("combobox")
      .click()
    await expect(
      page
        .getByLabel("Striped Dress Shirt")
        .locator("svg"),
    ).toHaveCount(1)
    await expect(
      page
        .getByLabel("Relaxed Fit Button Down")
        .locator("svg"),
    ).toHaveCount(0)
  })
})

test.describe("Expect select with group", () => {
  test("to render a group separator", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-select--with-groups&viewMode=story")
    await page
      .getByRole("combobox")
      .click()
    await expect(
      page
        .getByText("Shirts", { exact: true }),
    ).toBeVisible()
  })
})

test.describe("Expect select disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-select--disabled&viewMode=story")
    await expect(
      page
        .getByRole("combobox"),
    ).toBeDisabled()
  })
})

test.describe("Expect select disabled item", () => {
  test("to render a disabled item", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-select--disabled-item&viewMode=story",
    )
    await page
      .getByRole("combobox")
      .click()
    await expect(
      page
        .getByLabel("Solid Dress Shirt"),
    ).toBeDisabled()
  })
})
