import { expect, test } from '@playwright/test';

test.describe('Test Group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');

  });

  test.afterEach(async ({ page }) => {
    
  });

  test('Window pop-up handling', async ({ page }) => {
    
    //creating event listener for monitoring window pop ups
    
    let window= page.locator("//a[text()='Multiple Windows']");
    await window.click();

    let promiseNewPageEvent= page.waitForEvent("popup");

    page.getByText('Click Here').click();
    
    //await page.waitForTimeout(2000);

    let newPage= await promiseNewPageEvent;

    let newWindowElement= newPage.locator("//h3[text()='New Window']");

    await expect(newWindowElement).toHaveText('New Window');
    await expect(newPage).toHaveTitle('New Window');

    await page.bringToFront();
    await page.waitForTimeout(2000);
    await expect(page.locator("//div[@class='example']/h3")).toHaveText('Opening a new window');

    await newPage.bringToFront();
    await newPage.waitForTimeout(1000);

    await newPage.close();

    await page.waitForTimeout(2000);
  });

});