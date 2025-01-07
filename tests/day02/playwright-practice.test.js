
import { test } from '@playwright/test';
test.use({ headless: false });
test('Youtube Search @youtube', async ({ page }) => {
  
    //navigate to YouTube
    await page.goto('https://www.youtube.com');

    const rejectCookies = await page.locator("//button[contains(@class, 'yt-spec-button-shape-next') and .//span[text()='Reject all']]");
    await rejectCookies.click();

    const searchInput = await page.locator('input[name="search_query"].ytSearchboxComponentInput');
    await searchInput.click();
    await searchInput.fill('CYDEO');
    //press Enter to search
    await searchInput.press('Enter');

    //pause for 2 seconds
    await page.waitForTimeout(1000);

    const firstVideo=page.locator("(//a[@id='video-title'])[1]");
    await firstVideo.click();
    await page.waitForTimeout(5000);




});
