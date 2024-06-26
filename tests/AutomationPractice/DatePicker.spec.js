const { test, expect } = require("@playwright/test");

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //await page.fill("#datepicker", "1/1/2024");

  //date picker

  const year = "2024";
  const month = "December";
  const day = "20";

  await page.click("#datepicker");

  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentYear == year && currentMonth == month) {
      break;
    }

    await page.locator("//span[text()='Next']").click();
  }
  //Day selection using loop
  //   const days = await page.$$("//a[@class='ui-state-default']");

  //   for (const dt of days) {
  //     if ((await dt.textContent()) == day) {
  //       await dt.click();
  //       break;
  //     }
  //   }

  //Day selection NOT using loop
  await page.click(`//a[@class='ui-state-default'][text()='${day}']`);
  await page.waitForTimeout(5000);
});
