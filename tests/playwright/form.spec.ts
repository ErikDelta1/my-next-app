import { test, expect } from '@playwright/test';

test('navigate to form page', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Go to form' }).click();

  await expect(page.getByText('Sign UP!')).toBeVisible({ timeout: 10000 });
});

test('submit form with valid data', async ({ page }) => {
  await page.goto('/form');

  await page.getByPlaceholder('Name').fill('John Doe');

  await page.getByPlaceholder('Email').fill('johndoe@email.com');

  await page.getByPlaceholder('Job').fill('Software Engineer');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('http://localhost:3000/');
});
