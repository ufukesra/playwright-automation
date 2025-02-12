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



  test('File Upload', async({page}) =>{

    let fileName="ClassNotes.txt";
    await page.click("//a[text()='File Upload']");
    //await page.waitForTimeout(3000);

    //We can create event listener like below but there is more effective way for upload a file
    //const uploadPromise= page.waitForEvent('upload');

    let filePath=path.join(__dirname,'upload',"ClassNotes.txt");
    //await page.click("//input[@id='file-upload']");

    page.setInputFiles("//input[@id='file-upload']",filePath);

    await page.waitForTimeout(3000);
    await page.click("//input[@id='file-submit']")
    await page.waitForTimeout(3000);


    let uploadedFileName= page.locator("//div[@id='uploaded-files']");

    console.log("Text: "+ await uploadedFileName.innerText());
    expect(await uploadedFileName.innerText()).toBe(fileName);

    let pageHeaderElement= page.locator("//div[@class='example']/h3");
    let actualPageHeaderText= await pageHeaderElement.innerText();

    let expectedPageHeaderText="File Uploaded!";

    await expect(actualPageHeaderText).toBe(expectedPageHeaderText);





  })

  
});