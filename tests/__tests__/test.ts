import { chromium, Page, Browser } from 'playwright';

let browser: Browser;
let page: Page;


beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();

  // Adjust the viewport size if needed
  await page.setViewportSize({ width: 1200, height: 800 });
});

afterAll(async () => {
  await browser.close();
});
// Test 1: Click the mouse and draw a line
// Test 1: Click the mouse and draw a line
test('Test 1: Draw a line', async () => {
  await page.goto('http://localhost:3000/'); // Replace with your app's URL
  await page.waitForSelector('.your-drawing-element-class'); // Replace with the selector for your drawing element

  // Perform drawing action
  await page.mouse.click(100, 100); // Click to start drawing
  await (page.mouse as any).move({ x: 200, y: 200 }); // Use type casting to assert the correct argument format
  await page.mouse.up(); // Release the mouse button

  // Take a screenshot
  await page.screenshot({ path: 'test1.png' });
  console.log('Test 1: Draw a line - Successful');
});
// Test 2: Press 'E' and wait for 1 second before taking a screenshot
test('Test 2: Press E', async () => {
  await page.goto('http://localhost:3000/'); // Replace with your app's URL
  await page.keyboard.press('E'); // Press 'E' key

  // Wait for 1 second
  await page.waitForTimeout(1000);

  // Take a screenshot
  await page.screenshot({ path: 'test2.png' });
  console.log('Test 2: Press E - Successful');
});

// Test 3: Press '/' and type 'hello', press 'enter', move mouse, and take a screenshot
test('Test 3: Type hello and move mouse', async () => {
  await page.goto('http://localhost:3000/'); // Replace with your app's URL
  await page.keyboard.press('/'); // Press '/' key

  // Type 'hello' and press 'Enter' without specifying an element
  await page.keyboard.type('hello'); // Type 'hello'
  await page.keyboard.press('Enter'); // Press 'Enter'

  // Move mouse to a different location
  await page.mouse.move(300, 300);

  // Take a screenshot
  await page.screenshot({ path: 'test3.png' });
  console.log('Test 3: Type hello and move mouse - Successful');
});

