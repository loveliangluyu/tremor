import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://127.0.0.1:6006/iframe.html?id=visualization-barchart--default&viewMode=story",
  )
  await expect(page.locator('[tremor-id="tremor-raw"]')).toBeVisible()
})

test.describe("Expect default bar chart", () => {
  test("to be rendered", async ({ page }) => {
    await expect(page.locator('[tremor-id="tremor-raw"]')).toBeVisible()
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

  test("to render first two bars", async ({ page }) => {
    const bars = page.locator(".recharts-bar-rectangles rect")
    await expect(bars.first()).toBeVisible()
    await expect(bars.nth(1)).toBeVisible()
  })
})
