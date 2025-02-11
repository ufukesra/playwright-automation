import { test,expect } from '@playwright/test';
import fs from "fs";
import path from "path";

test.describe('Test Group', () => {
  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://practice.cydeo.com/');
  });

  test.afterEach(async ({ page }) => {
    //await page.waitForTimeout(3000);
  });

  test('File download', async ({ page }) => {
    
    await page.click("//a[text()='File Download']");

    const promisedDownloadEvent= page.waitForEvent("download");
    //await page.waitForTimeout(3000);

   
    await page.click("//a[text()='Screenshot 2025-01-24 110605.png']");


    let download= await promisedDownloadEvent;

    let downloadPath=path.join(__dirname,'download',download.suggestedFilename());
    await download.saveAs(downloadPath);

    expect(fs.existsSync(downloadPath)).toBe(true);


            // This is the second way of download and assert
   //await download.saveAs("tests/day07/download"+ download.suggestedFilename());

   //expect(fs.existsSync("tests/day07/download" )).toBeTruthy();
  
  });

  
});