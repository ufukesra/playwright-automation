import { test, expect } from '@playwright/test';

test.describe('Array of elements', () => {

    let elements;
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
     elements= await page.locator("//ul[@class='list-group']/li/a").all();
 
    });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(1000);
  });

  test('Verify that there excatly 50 links within the <ul> element', async ({ page }) => {
    
    let actualLinkCount= elements.length;
    let expectedLinkCount=50;
    expect(actualLinkCount).toEqual(expectedLinkCount);

  });

  test('Verify that each of the 50 link elements within the <ul> element is visible', async ({ page }) => {
    
    for(let i=0; i<elements.length; i++) {
    expect(elements[i]).toBeVisible();
  }

    for(let element of elements){
        expect(element).toBeVisible();
    }

  });

  test('Verify that each of the 50 link elements within the <ul> element is clickable', async ({ page }) => {
    
    for(let i=0; i<elements.length; i++){
        await expect(elements[i]).toBeEnabled();
    }

    for( let element of elements){
        await expect(element).toBeEnabled();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> element has a 'href' attribute", async ({ page }) => {
    for(let i=0; i<elements.length; i++){
       await expect(elements[i]).toHaveAttribute('href');

    }

    for(let element of elements){
        await expect(element).toHaveAttribute('href');
    }
  });


});