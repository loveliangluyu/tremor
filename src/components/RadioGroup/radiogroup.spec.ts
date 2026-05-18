import { expect, test } from "@playwright/test"

test.describe("Expect radiogroup default", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--default&viewMode=story")
    await expect(
      page
        .getByRole("radiogroup"),
    ).toBeVisible()
  })
  test("to render radiogroupitems", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--default&viewMode=story")
    await expect(
      page
        .getByRole("radiogroup"),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio")
        .nth(1),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio")
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio"),
    ).toHaveCount(3)
  })

  test("to be checkable", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--default&viewMode=story")
    await page
      .getByRole("radio")
      .first()
      .click()
    await expect(
      page
        .getByRole("radio")
        .first(),
    ).toBeVisible()
    await expect(
      page
        .getByRole("radio")
        .first(),
    ).toBeChecked()
  })
})

test.describe("Expect radiogroup label", () => {
  test("to render with label", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--with-label&viewMode=story",
    )
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^First come first serve \(FCFS\)$/ }),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^By appointment$/ }),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^By time window$/ }),
    ).toBeVisible()
  })

  test("to be checkable", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--with-label&viewMode=story",
    )
    await page
      .getByLabel("First come first serve (FCFS)")
      .click()
    await expect(
      page
        .getByLabel("First come first serve (FCFS)"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("First come first serve (FCFS)"),
    ).toBeChecked()
  })
  test("to be checkable by label", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--with-label&viewMode=story",
    )
    await page
      .getByText("First come first serve (FCFS)")
      .click()
    await expect(
      page
        .getByLabel("First come first serve (FCFS)"),
    ).toBeVisible()
    await expect(
      page
        .getByLabel("First come first serve (FCFS)"),
    ).toBeChecked()
  })
})

test.describe("Expect radiogroup disabled", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-radiogroup--disabled&viewMode=story",
    )
    await expect(
      page
        .getByLabel("By time window"),
    ).toBeDisabled()
  })
})
