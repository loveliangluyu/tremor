import { expect, test } from "@playwright/test"

test.describe("Expect date picker single", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-datepicker--single&viewMode=story")
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .locator("div")
        .getByRole("dialog"),
    ).toBeVisible()
  })
  test("to render footer with buttons", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-datepicker--single&viewMode=story")
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .getByRole("button", { name: "Cancel" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "Apply" }),
    ).toBeVisible()
  })
  test("to close on Cancel", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-datepicker--single&viewMode=story")
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await page
      .getByRole("button", { name: "Cancel" })
      .click()
    await expect(
      page
        .locator("div")
        .getByRole("dialog"),
    ).toBeHidden()
  })
  test("to close on Apply", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-datepicker--single&viewMode=story")
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await page
      .getByRole("button", { name: "Apply" })
      .click()
    await expect(
      page
        .locator("div")
        .getByRole("dialog"),
    ).toBeHidden()
  })
  test("to render presets", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-datepicker--single-with-presets&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .locator("div")
        .getByRole("dialog"),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "Select date" }),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Select Today"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Select Tomorrow"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Select A week from now"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Select A month from now"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Select 6 months from now"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Select A year from now"),
    ).toBeVisible()
  })
  test("with time to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-datepicker--controlled-time&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .getByLabel("hour, Time"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("minute, Time"),
    ).toBeVisible()
  })
})

test.describe("Expect date picker range", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-daterangepicker--range&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date range" })
      .click()
    await expect(
      page
        .locator("div")
        .getByRole("dialog"),
    ).toBeVisible()
    await expect(page.getByRole("grid")).toHaveCount(2)
  })
  test("to render footer with buttons", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-daterangepicker--range&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date range" })
      .click()
    await expect(
      page
        .getByRole("button", { name: "Cancel" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "Apply" }),
    ).toBeVisible()
  })

  test("to close on Cancel", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-daterangepicker--range&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date range" })
      .click()

    await page
      .getByRole("button", { name: "Cancel" })
      .click()
    await expect(
      page
        .locator("div")
        .first()
        .getByRole("presentation"),
    ).toBeHidden()
  })
  test("to close on Apply", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-daterangepicker--range&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date range" })
      .click()
    await page
      .getByRole("button", { name: "Apply" })
      .click()
    await expect(
      page
        .locator("div")
        .first()
        .getByRole("presentation"),
    ).toBeHidden()
  })
  test("to render presets", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-daterangepicker--range-with-presets&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date range" })
      .click()
    await expect(
      page
        .getByLabel("Select Today"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Last 7 days"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Last 30 days"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Last 3 months"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Last 6 mont"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Month to date"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Year to date"),
    ).toBeVisible()
  })
  test("with time to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-daterangepicker--controlled-time-range&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Select date" })
      .click()
    await expect(
      page
        .getByLabel("hour, Start date time"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("minute, Start date time"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("hour, End date time"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("minute, End date time"),
    ).toBeVisible()
  })
})
