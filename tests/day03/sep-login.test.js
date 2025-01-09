import { test,expect } from '@playwright/test';

test('Bypassing auth for the given website @env', async ({page}) => {


    let encode=Buffer.from('automation-user:123abc').toString('base64');
    await page.setExtraHTTPHeaders({Authorization:`Basic ${encode}`});

    await page.goto("https://qa.sep.tdtm.cydeo.com/taws");
    let pageHeader= page.locator("//a[contains(text(), 'Test Automation with Selenium')]");
    expect(await pageHeader.isEnabled()).toBeTruthy();

    let actualPageHeader= await pageHeader.innerText();
    let expectedPageHeader="Test Automation with Selenium";
    
    expect(actualPageHeader).toEqual(expectedPageHeader);

});

test('Using Environment Variables', async ({page}) => { 

    let sepQAUrl= process.env.SEP_QA_URL;
    let username= process.env.SEP_USERNAME;
    let password= process.env.SEP_PASSWORD;
    console.log("Username: "+username);
    console.log("Password: "+password);
    console.log("SEP_QA_URL: "+sepQAUrl);
    let encodeCredentials= Buffer.from(`${username}:${password}`).toString('base64');
    await page.setExtraHTTPHeaders({Authorization:`Basic ${encodeCredentials}`});
    await page.goto(process.env.SEP_QA_URL);
    
    
   

    

    let pageHeader= page.locator("//a[contains(text(), 'Test Automation with Selenium')]");
    expect(await pageHeader.isEnabled()).toBeTruthy();
    
    let actualPageHeader= await pageHeader.innerText();
    let expectedPageHeader="Test Automation with Selenium";
    expect(actualPageHeader).toEqual(expectedPageHeader);


   });
