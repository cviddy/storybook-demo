// @ts-check
import { test, expect, takeArchive } from '@chromaui/test-archiver';

test('has title', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await takeArchive(page, testInfo);

  await page.goto('https://www.google.com');
  await takeArchive(page, testInfo);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
