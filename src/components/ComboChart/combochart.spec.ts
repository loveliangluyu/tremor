import { expect, test, type Page } from "@playwright/test"

const goToStory = async (page: Page, storyName: string) => {
  await page.goto(
    `http://127.0.0.1:6006/iframe.html?id=visualization-combochart--${storyName}&viewMode=story`,
  )
  await expect(page.locator('[tremor-id="tremor-raw"]')).toBeVisible({
    timeout: 15_000,
  })
}

const getStoryFrame = (page: Page) => page

test.describe("ComboChart Component Tests", () => {
  test.beforeEach(async ({ page }) => {
    await goToStory(page, "default")
  })

  test.describe("Default ComboChart", () => {
    test("should render the combo chart", async ({ page }) => {
      await expect(getStoryFrame(page).getByTestId("combo-chart")).toBeVisible()
    })

    test("should render correct number of legend items", async ({ page }) => {
      await expect(
        getStoryFrame(page).locator(
          ".recharts-legend-wrapper .flex.h-full.flex-wrap li",
        ),
      ).toHaveCount(2)
    })

    test("should render x-axis with correct labels", async ({ page }) => {
      const xAxis = getStoryFrame(page).locator(
        ".recharts-xAxis .recharts-cartesian-axis-tick",
      )
      await expect(xAxis).toHaveCount(12)
    })

    test("should render y-axis with correct values", async ({ page }) => {
      const yAxis = getStoryFrame(page).locator(
        ".recharts-yAxis .recharts-cartesian-axis-tick",
      )
      await expect(yAxis).toHaveCount(5)
    })

    test("should render correct number of bars", async ({ page }) => {
      await expect(
        getStoryFrame(page).locator(".recharts-bar-rectangles rect"),
      ).toHaveCount(12)
    })

    test("should render line series", async ({ page }) => {
      await expect(getStoryFrame(page).locator(".recharts-line")).toBeVisible()
    })

    test("should show tooltip on hover", async ({ page }) => {
      const chart = getStoryFrame(page).getByTestId("combo-chart")
      await chart.hover({ position: { x: 100, y: 100 } })
      await expect(
        getStoryFrame(page).locator(".recharts-tooltip-wrapper"),
      ).toBeVisible()
    })

    test.describe("ComboChart with OnValueChange", () => {
      test.beforeEach(async ({ page }) => {
        await goToStory(page, "with-on-value-change-biaxial")
      })

      test("should update chart on legend item click", async ({ page }) => {
        const legendWrapper = getStoryFrame(page).locator(
          ".recharts-legend-wrapper .flex.h-full.flex-wrap",
        )

        await legendWrapper.locator("li", { hasText: "SolarCells" }).click()

        await expect(
          legendWrapper.locator("li", { hasText: "Glass" }).locator("span"),
        ).toHaveClass(/opacity-40/)
      })
    })
  })

  test.describe("Biaxial ComboChart", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "biaxial")
    })
    test("should render chart with two y-axes", async ({ page }) => {
      await page.goto(
        "http://127.0.0.1:6006/iframe.html?id=visualization-combochart--biaxial&viewMode=story",
      )

      const chart = getStoryFrame(page).getByTestId("combo-chart-biaxial")
      await expect(chart).toBeVisible()

      const yAxes = chart.locator(".recharts-yAxis")
      await expect(yAxes).toHaveCount(2)

      const legendItems = chart.locator(".recharts-legend-wrapper li")
      await expect(legendItems).toHaveCount(2)
      await expect(legendItems.filter({ hasText: "SolarCells" })).toHaveCount(
        1,
      )
      await expect(legendItems.filter({ hasText: "Frame" })).toHaveCount(1)
    })
  })

  test.describe("ComboChart with value formatters", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-value-formatter-biaxial")
    })

    test("should format y-axis and tooltip values correctly", async ({
      page,
    }) => {
      const chart = getStoryFrame(page).locator('[tremor-id="tremor-raw"]')

      const leftYAxisTicks = chart
        .locator(".recharts-yAxis")
        .first()
        .locator(".recharts-cartesian-axis-tick")
      await expect(leftYAxisTicks).toHaveCount(5)

      const rightYAxisTicks = chart
        .locator(".recharts-yAxis")
        .last()
        .locator(".recharts-cartesian-axis-tick")
      await expect(rightYAxisTicks).toHaveCount(5)
    })
  })

  test.describe("ComboChart with custom min and max values", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-min-and-max-value-biaxial")
    })

    test("should respect custom min and max values for y-axes", async ({
      page,
    }) => {
      const yAxes = getStoryFrame(page).locator(".recharts-yAxis")
      const leftYAxis = yAxes.nth(0)
      const rightYAxis = yAxes.nth(1)

      await expect(
        leftYAxis.locator(".recharts-cartesian-axis-tick"),
      ).toHaveCount(4)
      await expect(
        rightYAxis.locator(".recharts-cartesian-axis-tick"),
      ).toHaveCount(5)
    })
  })

  test.describe("ComboChart with legend slider", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-legend-slider-biaxial")
    })

    test("should render legend slider buttons and scroll on click", async ({
      page,
    }) => {
      const sliderButtons = getStoryFrame(page).locator(
        ".group.inline-flex.size-5",
      )
      await expect(sliderButtons).toHaveCount(2)

      const rightScrollButton = sliderButtons.nth(1)
      await rightScrollButton.click()
    })
  })

  test.describe("ComboChart with connect nulls", () => {
    test.beforeEach(async ({ page }) => {
      await goToStory(page, "with-connect-nulls-false-biaxial")
    })

    test("should not connect null data points in line series", async ({
      page,
    }) => {
      const linePath = getStoryFrame(page).locator(".recharts-line-curve")
      const pathD = await linePath.getAttribute("d")
      expect(pathD).toContain("M")
    })
  })
})
