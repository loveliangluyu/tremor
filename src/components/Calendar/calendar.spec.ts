import { expect, test } from "@playwright/test"

test.describe("Expect calendar single", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-calendar--single&viewMode=story")
    await expect(
      page
        .getByTestId("react-day-picker-calendar"),
    ).toBeVisible()
  })
  test("to render month navigation buttons", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-calendar--single&viewMode=story")
    await expect(
      page
        .getByLabel("Go to previous month"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Go to next month"),
    ).toBeVisible()
  })
  test("to render a caption", async ({ page }) => {
    const currentMonthText = new Date().toLocaleString("en-US", {
      month: "long",
    })
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-calendar--single&viewMode=story")

    await expect(
      page
        .getByTestId("react-day-picker-calendar")
        .getByText(`${currentMonthText}`),
    ).toBeVisible()
  })
  test("to render month and year navigation", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-calendar--single-with-year-navigation&viewMode=story",
    )
    await expect(
      page
        .getByLabel("Go to previous year"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Go to previous month"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Go to next month"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Go to next year"),
    ).toBeVisible()
  })
  test("to render disabled month and year navigation", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-calendar--single-disable-navigation&viewMode=story",
    )
    await expect(
      page
        .getByLabel("Go to previous year"),
    ).toBeDisabled()
    await expect(
      page
        .getByLabel("Go to previous month"),
    ).toBeDisabled()
    await expect(
      page
        .getByLabel("Go to next month"),
    ).toBeDisabled()
    await expect(
      page
        .getByLabel("Go to next year"),
    ).toBeDisabled()
  })
  test("to render limited year nagivation", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-calendar--with-year-navigation-limited&viewMode=story",
    )
    await expect(
      page
        .getByLabel("Go to previous year"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Go to previous month"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Go to next month"),
    ).toBeDisabled()
    await expect(
      page
        .getByLabel("Go to next year"),
    ).toBeDisabled()
  })
})
