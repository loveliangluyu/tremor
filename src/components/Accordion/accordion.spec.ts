import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-accordion--default&viewMode=story")
  await expect(page.getByRole("button", { name: "In the app" })).toBeVisible()
})

test.describe("Expect default accordion", () => {
  test("to be rendered", async ({ page }) => {
    await expect(
      page
        .getByRole("button", { name: "In the app" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "Via browser extension" }),
    ).toBeVisible()
  })

  test("to be open and closeable", async ({ page }) => {
    await page
      .getByRole("button", { name: "In the app" })
      .click({ force: true })
    await expect(
      page
        .getByText("Step 1:"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Step 2:"),
    ).toBeVisible()
    await page
      .getByRole("button", { name: "In the app" })
      .click({ force: true })
  })

  test("have a disabled item", async ({ page }) => {
    await expect(
      page
        .getByRole("button", { name: "Via email forwarding" }),
    ).toBeDisabled()
  })
})

test.describe("Expect accordion multiple to", () => {
  test("have all elements opened", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-accordion--type-multiple&viewMode=story",
    )

    const dataAccessButton = page.getByRole("button", {
      name: "Does NASA provide public access to space data?",
    })
    const educationalMaterialsButton = page.getByRole("button", {
      name: "Are NASA's educational materials available for all age groups?",
    })
    const publicParticipationButton = page.getByRole("button", {
      name: "Can the public participate in NASA missions?",
    })

    await expect(dataAccessButton).toBeVisible()

    await dataAccessButton.click()
    await expect(dataAccessButton).toHaveAttribute("aria-expanded", "true")
    await educationalMaterialsButton.click()
    await expect(educationalMaterialsButton).toHaveAttribute(
      "aria-expanded",
      "true",
    )
    await publicParticipationButton.click()
    await expect(publicParticipationButton).toHaveAttribute(
      "aria-expanded",
      "true",
    )

    await expect(
      page
        .getByText("Absolutely. NASA offers open"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Yes. NASA provides a wide"),
    ).toBeVisible()
    await expect(
      page
        .getByText("Yes! Through various citizen"),
    ).toBeVisible()
  })
})
