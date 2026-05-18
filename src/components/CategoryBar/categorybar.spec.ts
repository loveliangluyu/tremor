import { expect, test } from "@playwright/test"

test.describe("CategoryBar Component", () => {
  const STORY_URL =
    "http://127.0.0.1:6006/iframe.html?id=visualization-categorybar--default&viewMode=story"

  test("renders the category bar component", async ({ page }) => {
    await page.goto(STORY_URL)
    const storyFrame = page

    await expect(storyFrame.getByTestId("category-bar")).toBeVisible()
  })

  test("displays correct label values", async ({ page }) => {
    await page.goto(STORY_URL)
    const storyFrame = page
    await expect(storyFrame.getByText("0").first()).toBeVisible()
    await expect(storyFrame.getByText("70")).toBeVisible()
    await expect(storyFrame.getByText("88")).toBeVisible()
    await expect(storyFrame.getByText("100")).toBeVisible()
  })

  test("renders all category segments", async ({ page }) => {
    await page.goto(STORY_URL)
    const storyFrame = page
    const categoryBar = storyFrame.getByTestId("category-bar")
    const segments = categoryBar.locator("div.h-full[style*='width']")

    await expect(segments).toHaveCount(3)
  })

  test("renders with marker when provided", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-categorybar--with-marker&viewMode=story",
    )
    const storyFrame = page

    const marker = storyFrame.locator(".absolute.w-2.-translate-x-1\\/2")
    await expect(marker).toBeVisible()
  })

  test("handles marker tooltip interaction", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-categorybar--with-marker&viewMode=story",
    )
    const storyFrame = page

    const marker = storyFrame.locator(".absolute.w-2.-translate-x-1\\/2")
    await marker.hover()
  })

  test("maintains accessibility attributes", async ({ page }) => {
    await page.goto(STORY_URL)
    const storyFrame = page
    const categoryBar = storyFrame.getByTestId("category-bar")

    await expect(categoryBar).toHaveAttribute("aria-label", "Category bar")
    await expect(categoryBar).toHaveAttribute("tremor-id", "tremor-raw")
  })
})
