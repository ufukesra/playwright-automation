import {test, expect} from '@playwright/test';

test('', async ({context}) =>{

   
    let googlePage=  await context.newPage();
    await googlePage.goto("https://www.google.com");
    //await googlePage.waitForTimeout(2000);

    let youtubePage=await context.newPage();
    await youtubePage.goto("https://www.youtube.com");
    //await youtubePage.waitForTimeout(2000);

    let cydeoPage=await context.newPage();
    await cydeoPage.goto("https://www.cydeo.com/");
    

    //----------------------------------------------------------------

    await googlePage.bringToFront();

    googlePage.click("//div[@role='none' and text()='Reject all']");// click reject all
    let googleSearchBox= googlePage.locator("//textarea[@id='APjFqb']");

    await googleSearchBox.fill("Playwright Automation");
    await cydeoPage.waitForTimeout(2000);
    await googleSearchBox.press("Enter");

    await googlePage.waitForTimeout(2000);


    //----------------------------------------------------------------

    await youtubePage.bringToFront();

    let cookies=youtubePage.locator("(//div[@class='yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response-inverse'])[1]");
    await cookies.click();

    let searchbox=youtubePage.locator("(//input[@name='search_query'])[1]");

    await searchbox.fill("Playwright Automation");
    await googlePage.waitForTimeout(2000);
    await searchbox.press("Enter");
    await googlePage.waitForTimeout(2000);

    //----------------------------------------------------------------
    await cydeoPage.bringToFront();
    await cydeoPage.waitForTimeout(3000);

   
    
});