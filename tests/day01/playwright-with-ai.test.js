
// import playwright with test
const { test, expect } = require('@playwright/test');
// add test.use({ headless: false }); to see the browser in action
test.use({ headless: false });

// create a test
test("Search Playwright on google", async ({ page }) => {
    // goto google.com
    await page.goto("https://www.google.com");

    //After searcching google wait for 3 seconds 
    await page.waitForTimeout(100);

    //Click the Reject all  for cookies
    const cookiesReject = await page.locator("//div[text()='Reject all']");
    await cookiesReject.click();

    //find the search button locator
    const searchButton = await page.locator("//textarea[@class='gLFyf' and @name='q']");
    
    //Fill Cydeo into the search box
    await searchButton.fill("Cydeo");

    //Press Enter to search
    await searchButton.press('Enter');
    
    //wait for 3 seconds
    await page.waitForTimeout(100);

    //check if the url contains Cydeo
    expect(page.url()).toContain('Cydeo');
    

    
});

