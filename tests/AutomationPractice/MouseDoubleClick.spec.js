const { test, expect } = require("@playwright/test");

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const doubleclickbutton = await page.locator(
    "//button[normalize-space()='Copy Text']"
  );

  //double click to copy
  await doubleclickbutton.dblclick();

  const f2 = await page.locator("#field2");
  await expect(f2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
