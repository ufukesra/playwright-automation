import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeAll(async ({}) => {

    });

    test.afterAll(async ({}) =>{

    });

    test.beforeEach(async ({page}) => {

        await page.goto('https://practice.cydeo.com/');
        
        
    });

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);

    });

  test('check(), checks the radio button and checkboxes if they havent checked', async ({ page }) => {
    let checkboxesLink= page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();
    let checkBox1= page.locator('input[name="checkbox1"]');
    let checkBox2= page.locator('input[name="checkbox2"]');

    await checkBox1.check();
    await checkBox2.check();
    expect(await checkBox1.isChecked()).toBeTruthy();
    expect(await checkBox2.isChecked()).toBeTruthy();
    await expect(checkBox1).toBeChecked();
    await expect(checkBox2).toBeChecked();
    expect(await checkBox1.isChecked()).not.toBeFalsy();
    expect(await checkBox2.isChecked()).not.toBeFalsy();
   // await expect(checkBox1).not.toBeChecked();

   

  });

  test('Uncheck', async ({ page }) => {
    let checkboxesLink= page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();
    let checkBox1= page.locator('input[name="checkbox1"]');
    let checkBox2= page.locator('input[name="checkbox2"]');
    await checkBox1.uncheck();
    await checkBox2.uncheck();

    await expect(checkBox1).not.toBeChecked();
    await expect(checkBox2).not.toBeChecked();
  });

  test('selectOption()', async ({ page }) => {
    //let dropdownLink= page.locator('a[href="/dropdowns"]');
    let dropdownLink= page.locator("text='Dropdown'");
    await dropdownLink.click();

    let simpleDropdown= page.locator("//select[@id='dropdown']");
    
    //select by the value
         //<option value="1">Option 1</option>
        //<option value="2">Option 2</option>
        //You can use both '1' as a value or 'Option 1' as a text in the below method
    
    //wait for 2 seconds
    await page.waitForTimeout(2000);
    //await simpleDropdown.selectOption('1');
    
    
    // select by the test
    
    //await simpleDropdown.selectOption('Option 1');
    //await simpleDropdown.selectOption({label:'Option 1' });


    //select By the index

    await simpleDropdown.selectOption({index:1});

    let selectedOption = await simpleDropdown.inputValue();
    await expect(selectedOption).toBe('1');

  });

  test('innerText(): retrieve the visible text of the element', async ({ page }) => {
    let headerElement= page.locator("//span[@class='h1y']");
    let actualHeaderText = await headerElement.innerText();
    let expectedHeaderText = "Test Automation Practice";

    await expect(headerElement).toContainText("Automation");
    await expect(headerElement).toHaveText(expectedHeaderText);

    await expect(actualHeaderText).toEqual(expectedHeaderText);
    

  });

  test('inputValue(), only works with <input>, <textarea>, and <select>', async ({ page }) => {
    let inputsLink= page.getByText("Inputs");
    await inputsLink.click();
    let inputBox = page.locator("//input[@type='number']");
    await inputBox.fill('100');

    let inputValue = await inputBox.inputValue();
    expect(inputValue).toBe('100');
    
    

  });
});