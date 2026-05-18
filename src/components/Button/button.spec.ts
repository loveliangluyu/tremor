import { expect, test } from "@playwright/test"

test.describe("Expect button variant", () => {
  test("primary to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-button--primary&viewMode=story")
    await expect(
      page
        .getByRole("button", { name: "Primary" }),
    ).toBeVisible()
  })
  test("secondary to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-button--secondary&viewMode=story")
    await expect(
      page
        .getByRole("button", { name: "Secondary" }),
    ).toBeVisible()
  })
  test("light to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-button--light&viewMode=story")
    await expect(
      page
        .getByRole("button", { name: "Light" }),
    ).toBeVisible()
  })
  test("ghost to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-button--ghost&viewMode=story")
    await expect(
      page
        .getByRole("button", { name: "Ghost" }),
    ).toBeVisible()
  })
  test("destructive to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-button--destructive&viewMode=story")
    await expect(
      page
        .getByRole("button", { name: "Destructive" }),
    ).toBeVisible()
  })
})

test.describe("Expect button disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-button--with-disabled&viewMode=story",
    )
    await expect(
      page
        .getByRole("button", { name: "Disabled" }),
    ).toBeDisabled()
  })
})

test.describe("Expect button as link", () => {
  test("to be a link", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-button--as-child-anchor&viewMode=story",
    )
    await expect(
      page
        .getByRole("link", { name: "API Reference" }),
    ).toBeDefined()
  })
})
