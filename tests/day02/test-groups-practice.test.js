import { test,expect } from '@playwright/test';

//test.use({ headless: false });
test.describe('Test Group @group2', () => {

    //Create before each and add goto method in it,
    //Create aftereach and add the wait in it
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com/');
    });

    test.afterEach(async ({ page}) => {
      await page.waitForTimeout(3000);
    });
  test('Get the title of the page', async ({ page }) => {
    //await page.goto('https://practice.cydeo.com/');
    let actualTitle= await page.title();
    let expectedTitle="Practice";
    expect(actualTitle).toEqual(expectedTitle);
    //await page.waitForTimeout(3000);

  });

  test('Get the url of the page', async ({ page }) => {
    //await page.goto('https://practice.cydeo.com/');
    let actualUrl= page.url();
    expect(actualUrl).toContain('practice.cydeo.com');
    //await page.waitForTimeout(3000);


  });

  test('Click A/B Testing link', async ({ page }) => {
    //await page.goto('https://practice.cydeo.com/');
    let abTestingLink=page.locator(" a[href='/abtest']");
    expect(await abTestingLink.isEnabled()).toBeTruthy();
    await abTestingLink.click();
    // wait for 3 seconds
    //await page.waitForTimeout(3000);

  });
});