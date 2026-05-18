import { expect, test } from "@playwright/test"

test.describe("Expect default spark area chart", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-sparkareachart--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("spark-area-chart"),
    ).toBeVisible()
  })

  test("to render two lines", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-sparkareachart--default&viewMode=story",
    )
    await expect(
      page
        .locator('path.recharts-curve.recharts-area-curve[name="SolarCells"]'),
    ).toBeVisible()
    await expect(
      page
        .locator('path.recharts-curve.recharts-area-curve[name="Glass"]'),
    ).toBeVisible()
  })
})

test.describe("Expect default spark bar chart", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-sparkbarchart--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("spark-bar-chart"),
    ).toBeVisible()
  })

  test("to render first two bars", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-sparkbarchart--default&viewMode=story",
    )
    await expect(
      page
        .locator(".recharts-rectangle")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .locator(".recharts-rectangle")
        .nth(2),
    ).toBeVisible()
  })
})

test.describe("Expect default spark line chart", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-sparklinechart--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("spark-line-chart"),
    ).toBeVisible()
  })

  test("to render two lines", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-sparklinechart--default&viewMode=story",
    )
    await expect(
      page
        .locator('path.recharts-curve.recharts-line-curve[name="SolarCells"]'),
    ).toBeVisible()
    await expect(
      page
        .locator('path.recharts-curve.recharts-line-curve[name="Glass"]'),
    ).toBeVisible()
  })
})
