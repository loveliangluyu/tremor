import { expect, test, type Page } from "@playwright/test"

const goToStory = async (page: Page, storyName: string) => {
  await page.goto(
    `http://127.0.0.1:6006/iframe.html?id=ui-radiocardgroup--${storyName}&viewMode=story`,
  )
  await expect(page.getByRole("radiogroup")).toBeVisible({
    timeout: 15_000,
  })
}

test.describe("Expect radiocardgroup default", () => {
  test("to be rendered", async ({ page }) => {
    await goToStory(page, "default")
  })
  test("to render radiogroupitems", async ({ page }) => {
    await goToStory(page, "default")
    await expect(
      page
        .getByRole("radio", { name: "Software Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio", { name: "Platform Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio", { name: "Hardware Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio"),
    ).toHaveCount(3)
  })

  test("to be checkable", async ({ page }) => {
    await goToStory(page, "default")
    await page
      .getByRole("radio", { name: "Platform Engineer" })
      .click()
    await expect(
      page
        .getByRole("radio", { name: "Platform Engineer" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio", { name: "Platform Engineer" }),
    ).toBeChecked()
  })
})

test.describe("Expect radiogroup disabled", () => {
  test("to be disabled", async ({ page }) => {
    await goToStory(page, "disabled")
    await expect(
      page
        .getByRole("radio", { name: "Hardware Engineer" }),
    ).toBeDisabled()
  })
})
