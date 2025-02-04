import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  test.beforeEach(async ({ page }) => {
    const code= Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
   await page.setExtraHTTPHeaders({Authorization: `Basic ${code}`});
   await page.goto(process.env.SEP_QA_URL);
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test('SEP practice', async ({ page }) => {
    let firstName= page.locator("//input[@formcontrolname='firstName' and @id='mat-input-0']");
    await firstName.fill('John');

    let lastName=page.locator("//input[@formcontrolname='lastName' and @id='mat-input-1']");
    await lastName.fill('Doe');

    let email= page.locator("//input[@formcontrolname='email' and @type='email']");
    await email.fill('johndoe@example.com');

    let phone= page.locator("//input[@formcontrolname='phoneNumber' and @id='mat-input-3']");
    await phone.fill('123456789');

    let howToHear=page.locator("//mat-label[contains(text(), 'How did you hear about us?')]");
    await howToHear.click();
    

    const linkedin= page.locator("//span[contains(@class, 'mdc-list-item__primary-text') and text()='LinkedIN']");
    await linkedin.click();

    let nextButton= page.locator("//button[@type='submit' and contains(@class, 'next-button')]");
    await nextButton.click();

    let payUpfront= page.locator("//mat-chip[contains(@class, 'discount-badge')]//span[contains(text(), '$100 Upfront discount')]");
    await payUpfront.click();

    let secondNextButton=page.locator("//button[@class='next-button' and text()='Next']");
    await secondNextButton.click();

    let paymentFrame= page.frameLocator("//iframe[contains(@src, 'stripe.com') and @title='Secure payment input frame']");
    expect(paymentFrame).toBeDefined();

    let cardNumber= paymentFrame.locator("//input[@name='number']");
    //await expect(cardNumber).toBeEnabled();
    //cardNumber.clear();
    await cardNumber.fill(process.env.CARDNUMBER);

    let expirationDate= paymentFrame.locator("//input[@name='expiry']");
    await expirationDate.fill(process.env.EXPIRATION);

    let cvc= paymentFrame.locator("//input[@name='cvc']");
    await cvc.fill(process.env.CVV);
    
    let country= paymentFrame.locator("//select[@name='country']");
    await country.selectOption('United Kingdom');

    let postCode= paymentFrame.locator("//input[@name='postalCode']");
    await postCode.fill(process.env.POSTCODE);

    let termsAndCon= page.locator("//input[@id='defaultCheck2']");
    termsAndCon.check();

    let buttonActivateCheck= page.locator("//button[contains(@class, 'next-button') and span[text()='Pay']]");
    let buttonStatus =await buttonActivateCheck.getAttribute('ng-reflect-disabled');

    console.log("Button Stattus: "+buttonStatus);
    await expect(buttonStatus).toEqual('true');

    let payButton= page.locator("//span[text()='Pay']");
    expect(payButton).toBeVisible();
    await payButton.click();

});


//   test('', async ({ page }) => {
//     // Empty test body
//   });

//   test('', async ({ page }) => {
//     // Empty test body
//   });
});