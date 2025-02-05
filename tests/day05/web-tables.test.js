import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

    let table;
     test.beforeEach(async ({ page }) => {
        page.goto('https://practice.cydeo.com/')
        let webTable= page.locator("text='Web Tables'")
        await webTable.click()

        table=page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    expect(await table.isEnabled()).toBeTruthy();
     });
    
      test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
      });

  test('Verify that there are at least 8 roles and 11 columns exist and at least 80 cells ', async ({ page }) => {
    
    console.log(`Table count: ${await table.count()}`);
    let rows= await table.locator("//tr").all();
    console.log(`Total number of the rows: ${rows.length}`);
    await expect(rows.length ===9 ).toBeTruthy();


    let columns= await table.locator("//th").all();
    console.log(`Total columns: ${columns.length}`);
    await expect(columns.length ===13).toBeTruthy();


    let cells= await table.locator("//td").all();
    console.log(`Total cells: ${cells.length}`);
    await expect(cells.length ===104).toBeTruthy();
  });



  test('Read all the data from web table', async ({ page }) => {
    
    let rows= await table.locator("//tr").all();

    for(let row of rows) {

        let columnsTitle=await row.locator("//th").all();

        for( let title of columnsTitle){
            let text= await title.innerText();
            console.log(text+" : ");

        }


        let columns= await row.locator("//td").all();
        for(let column of columns){
            let text= await column.innerText();
            console.log(text);
        }
        

    }

  });



  test('Check all the checkboxes of the web table', async ({ page }) => {

    let checkboxes= await table.locator("//input").all();

    for( let checkbox of checkboxes){
        await checkbox.check();
    }
  });
});