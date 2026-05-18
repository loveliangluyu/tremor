import { expect, test } from "@playwright/test"

test.describe("Expect tabnavigation", () => {
  test("to render tabs", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-tabnavigation--default&viewMode=story",
    )
    await expect(
      page
        .getByText("Home"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Balances"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Transactions"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Customers"),
    ).toBeVisible()
  })
})

test.describe("Expect tabnavigation disabled", () => {
  test("to render a disabled tab", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-tabnavigation--default&viewMode=story",
    )
    const tab = page
      .locator("li")
      .filter({ hasText: "Customers" })

    const isAriaDisabled = await tab.getAttribute("aria-disabled")
    expect(isAriaDisabled).toBe("true")
  })
})
