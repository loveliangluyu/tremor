import { expect, test } from "@playwright/test"

test.describe("Expect progressbar default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("progressbar"),
    ).toBeVisible()
  })

  test("to have a background bar", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("progressbar"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("Progress bar"),
    ).toBeVisible()
  })

  test("renders with background and indicator bar properly", async ({
    page,
  }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )

    const storyFrame = page

    const progressBar = storyFrame.getByRole("progressbar", {
      name: "Progress bar",
    })
    await expect(progressBar).toBeVisible()

    const barBackground = progressBar.locator(".bg-blue-200")
    await expect(barBackground).toBeVisible()

    const indicatorBar = progressBar.locator(".bg-blue-500")
    await expect(indicatorBar).toBeVisible()

    await expect(progressBar).toHaveAttribute("aria-valuenow")
    await expect(progressBar).toHaveAttribute("aria-valuemax", "100")
  })

  test("updates progress value through controls", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )

    const storyFrame = page
    const progressBar = storyFrame.getByRole("progressbar", {
      name: "Progress bar",
    })
    await expect(progressBar).toHaveAttribute("aria-valuenow", "62")
  })

  test("displays label correctly", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )

    const storyFrame = page

    await expect(storyFrame.getByText("62%")).toBeVisible()
  })

  test("to have a label", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("progressbar"),
    ).toBeVisible()
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-progressbar--default&viewMode=story",
    )
    await expect(
      page
        .getByText("%"),
    ).toBeVisible()
  })
})
