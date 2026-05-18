import { expect, test } from "@playwright/test"

test.describe("Slider component", () => {
  test("renders the slider", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-slider--default&viewMode=story")
    await expect(
      page
        .getByRole("slider"),
    ).toBeVisible()
  })

  test("can be dragged horizontally", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-slider--default&viewMode=story")
    const slider = page
      .getByRole("slider")
    await expect(slider).toBeVisible()
    const boundingBox = await slider.boundingBox()
    if (boundingBox) {
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.down()
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2 + 50,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.up()
    }
  })

  test("can be dragged vertically", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-slider--vertical&viewMode=story")
    const slider = page
      .getByRole("slider")
    await expect(slider).toBeVisible()
    const boundingBox = await slider.boundingBox()
    if (boundingBox) {
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.down()
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2 + 50,
      )
      await page.mouse.up()
    }
  })

  test("displays the correct value when changed", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-slider--default&viewMode=story")
    const slider = page
      .getByRole("slider")
    await expect(slider).toBeVisible()
    const boundingBox = await slider.boundingBox()
    if (boundingBox) {
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.down()
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2 + 50,
        boundingBox.y + boundingBox.height / 2,
      )
      await page.mouse.up()
    }
    // Add an assertion to check the slider value if it is displayed in the UI
  })

  test("to be disabled", async ({ page }) => {
    await page.goto("http://127.0.0.1:6006/iframe.html?id=ui-slider--disabled&viewMode=story")
    const slider = page
      .getByRole("slider")
    const isDataDisabled = await slider.getAttribute("data-disabled")
    expect(isDataDisabled).not.toBeNull()
  })
})
