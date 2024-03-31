const { test, expect } = require("@playwright/test");

test("Handle Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Select multiple options in multi select dropdown
  //await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

  //1. Check number options in Dropdown
  const options = await page.locator("#colors option");
  await expect(options).toHaveCount(5);

  //2. Check number options in dropdown using JS Array
  // const options = await page.$$("#colors option");
  // console.log("Number of options: ", options.length);
  // await expect(options.length).toBe(5);

  // //3. Check value not presence in Dropdown
  // const content = await page.locator("#colors").textContent();
  // await expect(content.includes("Black")).toBeFalsy();

  await page.waitForTimeout(10000);
});
