import { expect, test } from "@playwright/test"

test.describe("Expect tabs variant-line", () => {
  test("to render tabs", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-line&viewMode=story")
    await expect(
      page
        .getByText("ReturnsShipping"),
    ).toBeVisible()
  })

  test("to render a selected tab", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-line&viewMode=story")
    await page
      .getByRole("tab", { name: "Returns" })
      .click()
    await expect(
      page
        .getByRole("tab", { name: "Returns" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "false")
  })

  test("to render a selected tab with content", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-line&viewMode=story")
    await page
      .getByRole("tab", { name: "Shipping" })
      .click()
    await expect(
      page
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .getByLabel("Shipping"),
    ).toContainText(
      "We ship worldwide via UPS Expedited. We offer flat rate shipping to customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+), and Australia ($65). Note that most brokerage fees are included in the price of UPS Expedited shipping, with the exception of a possible $10 fee assessed in Canada only if prior arrangements to pay for duties and taxes are not made (see next question and answer).",
    )
  })
})

test.describe("Expect tabs disabled", () => {
  test("to render a disabled tab line", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-line-disabled&viewMode=story",
    )
    await expect(
      page
        .getByRole("tab", { name: "Tab 3" }),
    ).toBeDisabled()
  })
  test("to render a disabled tab solid", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-solid-disabled&viewMode=story",
    )
    await expect(
      page
        .getByRole("tab", { name: "Tab 3" }),
    ).toBeDisabled()
  })
})

test.describe("Expect tabs variant-solid", () => {
  test("to render tabs", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-solid&viewMode=story")
    await expect(
      page
        .getByText("ReturnsShipping"),
    ).toBeVisible()
  })

  test("to render a selected tab", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-solid&viewMode=story")
    await page
      .getByRole("tab", { name: "Returns" })
      .click()
    await expect(
      page
        .getByRole("tab", { name: "Returns" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "false")
  })

  test("to render a selected tab with content", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-tabs--variant-solid&viewMode=story")
    await page
      .getByRole("tab", { name: "Shipping" })
      .click()
    await expect(
      page
        .getByRole("tab", { name: "Shipping" }),
    ).toHaveAttribute("aria-selected", "true")
    await expect(
      page
        .getByLabel("Shipping"),
    ).toContainText(
      "We ship worldwide via UPS Expedited. We offer flat rate shipping to customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+), and Australia ($65). Note that most brokerage fees are included in the price of UPS Expedited shipping, with the exception of a possible $10 fee assessed in Canada only if prior arrangements to pay for duties and taxes are not made (see next question and answer).",
    )
  })
})
