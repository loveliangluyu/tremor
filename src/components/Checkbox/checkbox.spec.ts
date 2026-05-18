import { expect, test } from "@playwright/test"

test.describe("Expect checkbox", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-checkbox--default&viewMode=story")
    await expect(
      page
        .getByRole("checkbox"),
    ).toBeVisible()
  })
})

test.describe("Expect checkbox", () => {
  test("to be checkable", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-checkbox--default&viewMode=story")
    await expect(
      page
        .getByRole("checkbox"),
    ).toBeVisible()
    await page
      .getByRole("checkbox")
      .click()
    await expect(
      page
        .getByRole("checkbox"),
    ).toBeChecked()
  })
})

test.describe("Expect checkbox disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-checkbox--disabled&viewMode=story")
    await expect(
      page
        .getByRole("checkbox")
        .first(),
    ).toBeDisabled()
    await expect(
      page
        .getByRole("checkbox")
        .nth(1),
    ).toBeDisabled()
    await expect(
      page
        .getByRole("checkbox")
        .nth(2),
    ).toBeDisabled()
  })
})

test.describe("Expect checkbox with label", () => {
  test("to be checkable", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-checkbox--with-label&viewMode=story",
    )
    await expect(
      page
        .getByLabel("I'd like to be notified by"),
    ).toBeVisible()
    await page
      .getByLabel("I'd like to be notified by")
      .click()
    await expect(
      page
        .getByLabel("I'd like to be notified by"),
    ).toBeChecked()
  })
})
