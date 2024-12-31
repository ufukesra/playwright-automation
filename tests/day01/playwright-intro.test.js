const { test } = require("@playwright/test");
test.use({headless: false});
test("Search Playwright on google", async({page}) =>{

    await page.goto("https://www.google.com");
    
    const cookiesReject = await page.locator("//div[text()='Reject all']");
    await cookiesReject.click();

    const searchBox= await page.locator("//textarea[@class='gLFyf']");

    await searchBox.fill("Playwright");
    await page.waitForTimeout(3000);
    await searchBox.press('Enter');


});