import { expect, test } from "@playwright/test"

test.describe("Expect barlist default", () => {
  test("to render a barlist", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("barlist"),
    ).toBeVisible()
  })

  test("to render a barlist with bar, label and value", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--default&viewMode=story",
    )
    await expect(
      page
        .getByTestId("barlist"),
    ).toBeVisible()
    await expect(
      page
        .getByText("/home"),
    ).toBeVisible()
    await expect(
      page
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/home" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^843$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("/documentation"),
    ).toBeVisible()
    await expect(
      page
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/documentation" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^384$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("/blocks"),
    ).toBeVisible()
    await expect(
      page
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/blocks" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^108$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("/imprint"),
    ).toBeVisible()
    await expect(
      page
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/imprint" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^46$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByText("/cancellation"),
    ).toBeVisible()
    await expect(
      page
        .getByTestId("barlist")
        .locator("div")
        .filter({ hasText: "/cancellation" })
        .nth(2),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^3$/ }),
    ).toBeVisible()
  })
})

test.describe("Expect barlist href and value formatter", () => {
  test("to render a barlist with bar, href and formatted value", async ({
    page,
  }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-href-and-value-formatter&viewMode=story",
    )
    await expect(
      page
        .getByRole("link", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^843 Visitors$/ }),
    ).toBeVisible()
  })
})

test.describe("Expect barlist sort order", () => {
  test("to have aria-sort='ascending'", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-sort-order-ascending&viewMode=story",
    )
    await expect(
      page
        .getByTestId("barlist"),
    ).toHaveAttribute("aria-sort", "ascending")
  })
})

test.describe("Expect barlist sort order", () => {
  test("to have aria-sort='none'", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-sort-order-none&viewMode=story",
    )
    await expect(
      page
        .getByTestId("barlist"),
    ).toHaveAttribute("aria-sort", "none")
  })
})

test.describe("Expect barlist onvaluechange", () => {
  test("to be clickable", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-on-value-change&viewMode=story",
    )
    await expect(
      page
        .getByTestId("barlist-onvaluechange"),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/documentation" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/blocks" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/imprint" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/cancellation" }),
    ).toBeVisible()
  })

  test("to be clickable and return value", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-on-value-change&viewMode=story",
    )
    await page
      .getByRole("button", { name: "/cancellation" })
      .click()
    //  improve test with check of payload
  })
})

test.describe("Expect barlist onvaluechange and href", () => {
  test("to be clickable,have href and button", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-on-value-change-and-href&viewMode=story",
    )
    await expect(
      page
        .getByTestId("barlist-onvaluechangehref"),
    ).toBeVisible()
    await expect(
      page
        .getByRole("link", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/home" }),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^843$/ }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("link", { name: "/documentation" }),
    ).toBeVisible()
    await expect(
      page
        .getByRole("button", { name: "/documentation" }),
    ).toBeVisible()
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^384$/ }),
    ).toBeVisible()
  })

  test("to be clickable and return value", async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:6006/iframe.html?id=visualization-barlist--with-on-value-change-and-href&viewMode=story",
    )
    await page
      .getByRole("button", { name: "/cancellation" })
      .click()
    //  improve test with check of payload
  })
})
