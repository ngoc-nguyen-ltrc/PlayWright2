const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Prompt with OK Cancel Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("John");
    //await dialog.dismiss();
  });

  await page.locator("//button[normalize-space()='Prompt']").click();
  await page.waitForTimeout(5000);

  await expect(page.locator("//p[@id='demo']")).toHaveText(
    "Hello John! How are you today?"
  );
  await page.waitForTimeout(5000);
});

test.skip("Confirmation with OK Cancel Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
    //await dialog.dismiss();
  });

  await page.locator("//button[normalize-space()='Confirm Box']").click();
  await page.waitForTimeout(5000);

  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
  await page.waitForTimeout(5000);
});

test.skip("Handle Alert dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alert handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");

    await dialog.accept();
  });

  await page.locator("//button[normalize-space()='Alert']").click();
  await page.waitForTimeout(5000);
});
