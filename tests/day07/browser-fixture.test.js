
import {test, expect, chromium, firefox} from "@playwright/test";

test("Browser Fixture", async ({browser}) => {


    let context1=await browser.newContext(); //google and youtube
    let page1= await context1.newPage();
    page1.goto("https://google.com");
    await page1.waitForTimeout(1000);
    
    let page2= await context1.newPage();
    page2.goto("https://youtube.com");
    await page2.waitForTimeout(1000);

    page1.bringToFront();
    await page1.waitForTimeout(1000);
    page2.bringToFront();
    await page1.waitForTimeout(1000);




    //----------------------------------------------------------------
    let context2= await browser.newContext(); //linkedin, cydeo

    let page3= await context2.newPage();
    page3.goto("https://linkedin.com");
    await page3.waitForTimeout(1000);


    let page4= await context2.newPage();
    page4.goto("https://www.cydeo.com/");
    await page4.waitForTimeout(1000);

    page3.bringToFront();
    await page3.waitForTimeout(1000);
    page4.bringToFront();
    await page3.waitForTimeout(1000);


    });


    test("Personalised Browser Fixture", async({})=>{
    //If you pass the fixture as an argument above, then it follows the global configuration( playwright.config.js)

        let chromeBrowser= await chromium.launch();
        let chromeContext= await chromeBrowser.newContext();
        let page1= await chromeContext.newPage();
        await page1.goto("https://google.com");
        await page1.waitForTimeout(3000);



        let firefoxBrowser= await firefox.launch();
        let firefoxContext= await firefoxBrowser.newContext();
        let page2= await firefoxContext.newPage();
       // await page2.bringToFront();
        await page2.goto("https://www.youtube.com");
        await page2.waitForTimeout(3000);

    });