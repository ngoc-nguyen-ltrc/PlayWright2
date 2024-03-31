const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Handle dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //await page.locator("#country").selectOption({ label: "India" }); //label /Visible text
  //await page.locator("#country").selectOption("India");   //visible text
  //await page.locator("#country").selectOption({ value: "uk" }); //using value
  //await page.locator("#country").selectOption({ index: 1 }); //using index
  //await page.locator("#country", "Canada"); //by text
  //await page.waitForTimeout(5000);

  //1. check number of options in dropdown -- A1
  //const options = await page.locator("country options");
  //await expect(options).toHaveCount(10);

  //   const options = await page.$$("#country option"); -- A2
  //   console.log("Number of options: ", options.length);
  //   await expect(options.length).toBe(10);

  //2. Check presence of value in the dropdown -- A1
  //const content = await page.locator("#country").textContent();
  //await expect(content.includes("India")).toBeTruthy();

  //3. Check presence of value in the dropdown --A2 -- Using looping
  //   const options = await page.$$("#country option");

  //   let status = false;

  //   for (const option of options) {
  //     console.log(await option.textContent());
  //     let value = await option.textContent();
  //     if (value.includes("France")) {
  //       status = true;
  //       break;
  //     }
  //   }
  //   expect(status).toBeTruthy();

  //4. Select option from dropdown -- Using loop

  const options = await page.$$("#country option");

  for (const option of options) {
    console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }

  await page.waitForTimeout(10000);
});
