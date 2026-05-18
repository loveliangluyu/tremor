import { expect, test } from "@playwright/test"

test.describe("Expect callout variant", () => {
  test("default to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-callout--default&viewMode=story")
    await expect(
      page
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("success to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-callout--success&viewMode=story")
    await expect(
      page
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("error to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-callout--error&viewMode=story")
    await expect(
      page
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("warning to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-callout--warning&viewMode=story")
    await expect(
      page
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
  test("neutral to exist", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-callout--neutral&viewMode=story")
    await expect(
      page
        .getByText("Sales PerformanceSystem"),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Sales Performance$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("System Update: Enhanced"),
    ).toBeVisible()
  })
})

test.describe("Expect callout icon", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-callout--with-icon&viewMode=story")

    await expect(
      page
        .locator("#storybook-root svg")
        .first(),
    ).toBeVisible()
  })
})
