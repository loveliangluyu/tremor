import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://127.0.0.1:6006/iframe.html?id=visualization-donutchart--default&viewMode=story",
  )
})

test.describe("DonutChart Tests", () => {
  test("Default DonutChart renders correctly", async ({ page }) => {
    const frame = page
    await expect(frame.getByTestId("donut-chart")).toBeVisible()
    await expect(frame.locator(".recharts-sector")).toHaveCount(7)
  })

  test("ValueFormatter displays formatted values", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-donutchart--value-formatter&viewMode=story",
    )
    const frame = page
    await expect(frame.getByText(/\d+ units/)).toBeVisible()
  })

  test("LabelDisabled does not show label", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-donutchart--label-disabled&viewMode=story",
    )
    const frame = page
    await expect(frame.getByText("Custom Label")).not.toBeVisible()
  })

  test("OtherColors uses provided colors", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-donutchart--other-colors&viewMode=story",
    )
    const frame = page
    const sectors = frame.locator(".recharts-sector")
    const expectedColors = [
      "blue",
      "amber",
      "pink",
      "emerald",
      "violet",
      "cyan",
    ]
    for (let i = 0; i < expectedColors.length; i++) {
      await expect(sectors.nth(i)).toHaveClass(
        new RegExp(`fill-${expectedColors[i]}-500`),
      )
    }
    await expect(sectors.nth(6)).toHaveClass(/fill-blue-500/)
  })

  test("MoreDatapointsThanColors handles excess data points", async ({
    page,
  }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-donutchart--more-datapoints-than-colors&viewMode=story",
    )
    const frame = page
    await expect(frame.locator(".recharts-sector")).toHaveCount(14)
  })
})
