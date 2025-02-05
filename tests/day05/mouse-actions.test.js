import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  test.beforeEach(async ({ page }) => {
    page.goto('https://practice.cydeo.com/')
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test('Left Click', async ({ page }) => {
    await page.click("text='A/B Testing'");
    await expect(page).toHaveTitle('No A/B Test');;
  });

  test('Right Click', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.click("text='A/B Testing'", {button:"right"});
  });

  test('Double Click', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.dblclick("text='Checkboxes'")
  });

  test('Hover', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.click("text='Hovers'");

    let users= await page.locator("//img[@alt='User Avatar']").all();
    
    for(let each of users){
        await each.hover();
        await page.waitForTimeout(1000);
    }
    
  });

  test('Drag and Drop', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.click("text='Drag and Drop'");

    let draggable1= await page.locator("#column-a");
    let draggable2= await page.locator("#column-b");
    // await page.dragAndDrop(draggable1,draggable2);
    // page.waitForTimeout(3000);
    await  page.dragAndDrop("#column-a","#column-b");
  });

  test('Scroll', async ({ page }) => {
    //In playwright you do not need scrolling, thi is only for viewing
    // 1st way of scrolling
    await page.waitForTimeout(3000);
   // await page.mouse.wheel(0,1000);


   // 2nd way of scrolling

   let inputsLink= page.locator("//a[text()='Inputs']");
   await inputsLink.scrollIntoViewIfNeeded();
   await page.waitForTimeout(3000);
   await inputsLink.click();
  });
});