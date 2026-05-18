import { expect, test } from "@playwright/test"

test.describe("Expect dropdown menu default", () => {
  test("trigger to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--default&viewMode=story",
    )
    await expect(
      page
        .getByRole("button", { name: "Open" }),
    ).toBeVisible()
  })

  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--default&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .getByText("My Account"),
    ).toContainText("My Account")
  })

  test("to make click an item to be clickable", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--default&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await page
      .getByRole("menuitem", { name: "Account Settings ⌘S" })
      .click()
    await expect(
      page
        .getByRole("button", { name: "Open" }),
    ).toBeVisible()
  })

  test("to have a submenu", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--default&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await page
      .getByRole("menuitem", { name: "Invite users" })
      .hover()
    await expect(
      page
        .getByRole("menuitem", { name: "Email" }),
    ).toBeVisible()
    await page
      .getByRole("menuitem", { name: "Email" })
      .click()
  })
})

test.describe("Expect dropdown item", () => {
  test("to be disabled", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--default&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .getByRole("menuitem", { name: "Billing ⌘B" }),
    ).toBeDisabled()
  })
})

test.describe("Expect dropdown menu radio item", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--with-radio-item&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .getByRole("menuitemradio", { name: "Alphabetical A–Z" }),
    ).toBeVisible()
  })
  test("to be checked", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--with-radio-item&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .getByRole("menuitemradio", { name: "Alphabetical A–Z" }),
    ).toBeChecked()
  })
})

test.describe("Expect dropdown menu checkbox item", () => {
  test("to be rendered", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--with-checkbox-item&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .getByRole("menuitemcheckbox", { name: "Show status bar Pro" }),
    ).toBeVisible()
  })
  test("to be checked", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=ui-dropdownmenu--with-checkbox-item&viewMode=story",
    )
    await page
      .getByRole("button", { name: "Open" })
      .click()
    await expect(
      page
        .getByRole("menuitemcheckbox", { name: "Show status bar Pro" }),
    ).toBeChecked()
  })
})
