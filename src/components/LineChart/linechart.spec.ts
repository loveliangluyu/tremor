import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://127.0.0.1:6006/iframe.html?id=visualization-linechart--default&viewMode=story",
  )
  await expect(page.getByTestId("line-chart")).toBeVisible({
    timeout: 15_000,
  })
})

test.describe("Expect default line chart", () => {
  test("to be rendered", async ({ page }) => {
    await expect(page.getByTestId("line-chart")).toBeVisible()
  })

  test("to render legend two items", async ({ page }) => {
    await expect(
      page
        .locator("li")
        .filter({ hasText: "SolarCells" }),
    ).toBeVisible()
    await expect(
      page
        .locator("li")
        .filter({ hasText: "Glass" }),
    ).toBeVisible()
  })

  test("to render an x-axis", async ({ page }) => {
    await expect(page.locator(".recharts-xAxis")).toHaveClass(
      /recharts-xAxis/,
    )
  })

  test("to render an y-axis", async ({ page }) => {
    await expect(page.locator(".recharts-yAxis")).toHaveClass(
      /recharts-yAxis/,
    )
  })

  test("to render two lines", async ({ page }) => {
    await expect(page.locator(".recharts-line-curve")).toHaveCount(2)
  })
})
