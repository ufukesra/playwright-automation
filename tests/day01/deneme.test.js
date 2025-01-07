// Create an empty test
 //You forgot something
 // you need to add test.use({ headless: false }); right after the importing playwright
 // now add it

const { test } = require("@playwright/test");
test.use({ headless: false }); // Change this to true if you want to see the browser in action
test("Empty test", async () => {
    // This test does nothing but it's a good practice to add it
});