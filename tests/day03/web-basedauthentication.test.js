import { test,expect } from '@playwright/test';

test('Bypass the authentication by embedding the credentials in the url', async ({page}) => {

page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
//The above style of by passing the authentication never recommended as it shares the credentials.

//waitfor 3 seconds
 await page.waitForTimeout(3000);
 let pageMessageElement= page.locator("//div[@class='example']/p");
 let actualMessage= await pageMessageElement.innerText();
 let expectedMessage= "Congratulations! You must have the proper credentials.";

 expect(actualMessage).toEqual(expectedMessage);

});

test('Bypass the authentication by encoding credentials in base64 format', async ({page}) => {
    //1- encoding credentials in base64
   let encodedCredentials= Buffer.from('admin:admin').toString('base64');

    //2- set up the authnetication header
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});

    await page.goto("https://practice.cydeo.com/basic_auth");
    let pageMessageElement= page.locator("//div[@class='example']/p");
    let actualMessage= await pageMessageElement.innerText();
    let expectedMessage= "Congratulations! You must have the proper credentials.";

    expect(actualMessage).toEqual(expectedMessage);

    //waitfor 3 seconds 
    await page.waitForTimeout(1000);


});
