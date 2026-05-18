import { expect, test, type Page } from "@playwright/test"

const goToStory = async (page: Page, storyName: string) => {
  await page.goto(
    `http://127.0.0.1:6006/iframe.html?id=ui-switch--${storyName}&viewMode=story`,
  )
}

test.describe("Expect switch default", () => {
  test("to be rendered", async ({ page }) => {
    await goToStory(page, "default")
    await expect(
      page
        .getByRole("switch"),
    ).toBeVisible({ timeout: 15_000 })
  })
})

test.describe("Expect switch default", () => {
  test("to be checkable", async ({ page }) => {
    await goToStory(page, "default")
    await expect(
      page
        .getByRole("switch"),
    ).toBeVisible({ timeout: 15_000 })
    await page
      .getByRole("switch")
      .click()
    await expect(
      page
        .getByRole("switch"),
    ).toBeChecked()
  })
})

test.describe("Expect switch disabled", () => {
  test("to be disabled", async ({ page }) => {
    await goToStory(page, "disabled")
    await expect(
      page
        .getByRole("switch"),
    ).toBeDisabled({ timeout: 15_000 })
  })
})

test.describe("Expect switch with label", () => {
  test("to be checkable", async ({ page }) => {
    await goToStory(page, "with-label")
    await expect(
      page
        .getByText("Click this Label check the"),
    ).toBeVisible({ timeout: 15_000 })
    await page
      .getByText("Click this Label check the")
      .click()
    await expect(
      page
        .getByText("Click this Label check the"),
    ).toBeChecked()
  })
})
