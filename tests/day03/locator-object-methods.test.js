import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeAll(async ({}) => {

    });

    test.afterAll(async ({}) =>{

    });

    test.beforeEach(async ({page}) => {

        await page.goto('https://practice.cydeo.com/');
        
        
    });

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);

    });

  test('check(), checks the radio button and checkboxes if they havent checked', async ({ page }) => {
    let checkboxesLink= page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();
    let checkBox1= page.locator('input[name="checkbox1"]');
    let checkBox2= page.locator('input[name="checkbox2"]');

    await checkBox1.check();
    await checkBox2.check();
    expect(await checkBox1.isChecked()).toBeTruthy();
    expect(await checkBox2.isChecked()).toBeTruthy();
    await expect(checkBox1).toBeChecked();
    await expect(checkBox2).toBeChecked();
    expect(await checkBox1.isChecked()).not.toBeFalsy();
    expect(await checkBox2.isChecked()).not.toBeFalsy();
   // await expect(checkBox1).not.toBeChecked();

   

  });

  test('Uncheck', async ({ page }) => {
    let checkboxesLink= page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();
    let checkBox1= page.locator('input[name="checkbox1"]');
    let checkBox2= page.locator('input[name="checkbox2"]');
    await checkBox1.uncheck();
    await checkBox2.uncheck();

    await expect(checkBox1).not.toBeChecked();
    await expect(checkBox2).not.toBeChecked();
  });

  test('C', async ({ page }) => {
    // Empty test
  });
});