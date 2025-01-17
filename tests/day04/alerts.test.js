import { test, expect } from '@playwright/test';

test.describe('Handling Alerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/")
    let jsAlertsElement= page.locator("//a[@href='/javascript_alerts' and text()='JavaScript Alerts']");
    await jsAlertsElement.click();

  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });




  test('Handling JS Alerts', async ({ page }) => {
    page.on("dialog", async(dialog)=>{
        console.log(`Alert Message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.waitForTimeout(2000);
    let clickJSAlertElement= page.locator("//button[@class='btn btn-primary' and text()='Click for JS Alert']");
    await clickJSAlertElement.click();

    await page.waitForTimeout(2000);

    let confirmMessageElement= page.locator("//p[@id='result' and contains(text(),'successfully')]");
    let actualMessage= await confirmMessageElement.innerText();
    let expectedMessage="You successfully clicked an alert";

    expect(confirmMessageElement).toHaveText(expectedMessage);
    expect(actualMessage).toBe(expectedMessage);
    expect(actualMessage).toEqual(expectedMessage);


  });

  test('Handling JS Confirm Alerts', async ({ page }) => {
    
    page.on("dialog", async(dialog) =>{

        console.log(`Alert Message: ${dialog.message()}`);
        dialog.accept();
        //dialog.dismiss();
    });

    let jsConfirmElement= page.locator("//button[@class='btn btn-primary' and text()='Click for JS Confirm']");
    await jsConfirmElement.click();

    await expect(page.getByText("You clicked: Ok")).toBeVisible();

    //await expect(page.getByText("You clicked: Cancel")).toBeVisible();  this for dismiss the alert
  });

  test('Handling JS Prompt Alerts', async ({ page }) => {
    let alertAccept="Alert Accepted";
    let alertDismiss="Alert Dismissed";
    
    page.on('dialog', async(alert) =>{
        
        console.log(`Alert Message: ${alert.message()}`);
        await alert.accept(alertAccept);
       // await alert.dismiss(alertDismiss);

    });

    let jsPromptElement= page.locator("//button[@class='btn btn-primary' and text()='Click for JS Prompt']");
    jsPromptElement.click();

    await expect(page.getByText("You entered: "+alertAccept)).toBeVisible();



    

    });

   


});
