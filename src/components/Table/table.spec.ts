import { expect, test } from "@playwright/test"

test.describe("Expect Table", () => {
  test("to render TableRoot", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-root"),
    ).toBeVisible()
  })

  test("to render Table", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table"),
    ).toBeVisible()
  })

  test("to render TableCaption", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-caption"),
    ).toBeVisible()
  })

  test("to render TableHead", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-head"),
    ).toBeVisible()
  })

  test("to render TableRow", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-row"),
    ).toBeVisible()
  })
  test("to render TableHeaderCell", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-header-cell"),
    ).toBeVisible()
  })
  test("to render TableBody", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-body"),
    ).toBeVisible()
  })
  test("to render TableCell", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-cell"),
    ).toHaveCount(13)
  })

  test("to render TableFoot", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-table--default&viewMode=story")
    await expect(
      page
        .getByTestId("table-foot"),
    ).toBeVisible()
  })
})
