import { test,expect } from '@playwright/test';


  
  test.describe('Test Group', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com/');
      const iframePageElement=page.locator("//a[text()='Frames' and @href='/frames']");
      await iframePageElement.click();
      const iframePageElement2 = page.locator("//a[@href='/iframe' and text()='iFrame']");
      await iframePageElement2.click();
    });
  
    test.afterEach(async ({ page }) => {
      // wait for 3 seconds
      await page.waitForTimeout(1000);
    });
  
    test('Locating the iframe by ID', async ({ page }) => {
        let iframeElement= page.frameLocator('#mce_0_ifr');
        let iframeBody= iframeElement.locator("//body[@id='tinymce']");
        // await iframeBody.clear();
        // await iframeBody.fill('Hello World');

        let pageText= page.locator("//div[@class='example']/h3");

        let actualPageText= await pageText.innerText();
        let expectedPageText="An iFrame containing the TinyMCE WYSIWYG Editor";

        await expect(actualPageText).toEqual(expectedPageText);
    });
  
    test('Locating the iframe by CSS', async ({ page }) => {
      let iframeElement=page.frameLocator("iframe#mce_0_ifr.tox-edit-area__iframe");
      let iframeBody= iframeElement.locator("#tinymce");
      //await iframeBody.clear();
      //await iframeBody.fill('Hello World');

      let pageText=page.locator("//div[@class='example']/h3");
      let actualText= await pageText.innerText();
      let expectedText="An iFrame containing the TinyMCE WYSIWYG Editor";
      await expect(actualText).toEqual(expectedText);

    });
  
    test('Locating the iframe by XPATH', async ({ page }) => {
      let iframeElement=page.frameLocator("//iframe[@id='mce_0_ifr' and @class='tox-edit-area__iframe']");
      let iframeBody=page.locator("//div[@class='example']/h3");

      let actualPageText = await iframeBody.innerText();
      let expectedPageText="An iFrame containing the TinyMCE WYSIWYG Editor";
      await expect(actualPageText).toEqual(expectedPageText);
    });
  });
