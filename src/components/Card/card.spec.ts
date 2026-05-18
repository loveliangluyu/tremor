import { expect, test } from "@playwright/test"

test.describe("Expect card", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-card--default&viewMode=story")
    await expect(
      page
        .locator("#storybook-root div"),
    ).toBeVisible()
  })
})

test.describe("Expect card", () => {
  test("to inlcude text", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-card--with-text&viewMode=story")
    await expect(
      page
        .getByRole("heading", { name: "Perseverance Rover's Latest" }),
    ).toBeVisible()
    await expect(
      page
        .getByText("NASA's Perseverance Rover has"),
    ).toBeVisible()
  })
})

test.describe("Expect card as list item", () => {
  test("to be defined", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-card--as-child-list&viewMode=story")
    await expect(
      page
        .getByRole("listitem", {
          name: "This card will be turned into a <li> element",
        }),
    ).toBeDefined()
  })
})
