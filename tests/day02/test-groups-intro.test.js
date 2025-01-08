import { test } from '@playwright/test';

test.describe('Test Groups @group1', async () => {

    test.beforeAll(async ({}) => {

    });

    test.afterAll(async ({}) => {

    });

    test.beforeEach(async ({}) => {

    });

    test.afterEach(async ({ }) => {

    });


    test('Test1', async ({ page }) => {
        console.log("Test01 is executed successfully");
      });

      test('Test2', async ({ page }) => {
        
        console.log("Test02 is executed successfully");
      });

      test('Test3', async ({ page }) => {
        console.log("Test03 is executed successfully");
      });

});