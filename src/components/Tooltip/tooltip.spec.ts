import { expect, test, type Page } from "@playwright/test"

const goToDefaultStory = async (page: Page) => {
  await page.goto(
    "http://127.0.0.1:6006/iframe.html?id=ui-tooltip--default&viewMode=story",
  )
  await expect(page.getByRole("button", { name: "Show tooltip" })).toBeVisible(
    { timeout: 15_000 },
  )
}

test.describe("Expect tooltip", () => {
  test("to render tooltip trigger", async ({ page }) => {
    await goToDefaultStory(page)
  })

  test("to be rendered on trigger hover", async ({ page }) => {
    await goToDefaultStory(page)
    await page
      .getByRole("button", { name: "Show tooltip" })
      .hover()
    await expect(
      page
        .getByText(
          "Which KPIs are the most visited in your projectWhich KPIs are the most visited",
        ),
    ).toBeVisible()
  })
})
