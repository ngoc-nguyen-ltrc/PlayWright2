const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Handle Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.goto("https://students.miu.edu/finances/charges-2022-2023/");

  const product_table = await page.locator("#productTable");
  //const product_table = await page.locator("#tablepress-147");

  //Example: https://students.miu.edu/finances/charges-2022-2023/ -- tablepress-147"

  //1. Get number of columns
  const column = await page.locator("thead tr th");
  console.log("number of columns: ", await column.count());

  //Get number of rows
  const row = await page.locator("tbody tr");
  console.log("number of rows: ", await row.count());

  expect(await column.count()).toBe(4);
  expect(await row.count()).toBe(13);

  //2. Select checkbox for Product 4
  // const matchedRow = row.filter({
  //   has: page.locator("td"),
  //   hasText: "Product 4",
  // });
  // await matchedRow.locator("input").check();

  // const matchedRow = row.filter({
  //   has: page.locator("td"),
  //   hasText: "MS in Aromatherapy & Ayurveda",
  // });

  // const text = await matchedRow.locator("td").textContent();
  // console.log("value is: ", text);

  //3. Select multiple line with re-usable function

  // await selectProduct(row, page, "Product 1");
  // await selectProduct(row, page, "Product 2");
  // await selectProduct(row, page, "Product 5");

  //4. Print all product details using loop

  // for (let i = 0; i < (await row.count()); i++) {
  //   const temp_row = row.nth(i);
  //   const tds = temp_row.locator("td");
  //   for (let j = 0; j < (await tds.count()) - 1; j++) {
  //     console.log(await tds.nth(j).textContent());
  //   }
  // }

  //5. Get data from all pages in the table
  const pages = await page.locator(".pagination li a");
  console.log("Number of pages is: ", await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await row.count()); i++) {
      const temp_row = row.nth(i);
      const tds = temp_row.locator("td");
      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(3000);
  }
  await page.waitForTimeout(5000);
});

async function selectProduct(row, page, name) {
  const matchedRow = row.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}
