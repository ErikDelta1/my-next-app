import { test, expect } from '@playwright/test';
import { isPagesAPIRouteMatch } from 'next/dist/server/route-matches/pages-api-route-match';

test('correct URL address', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('http://localhost:3000/');
});

test('homepage has correct title and elements', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Create Next App');

  await expect(page.getByAltText('Next.js logo')).toBeVisible();

  await expect(page.getByRole('link', { name: /read our docs/i })).toBeVisible();

  await expect(page.getByRole('link', { name: /go to nextjs\.org/i })).toBeVisible();

  await expect(page.getByRole('link', { name: /go to nextjs\.org/i })).toBeVisible();
});


test('submit form, then show profile card on dashboard', async ({ page }) => {
  await page.goto('/form');

  await page.getByPlaceholder('Name').fill('John Doe');
  await page.getByPlaceholder('Email').fill('johndoe@email.com');
  await page.getByPlaceholder('Job').fill('Software Engineer');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('http://localhost:3000/');

  await page.getByRole('button', { name: 'Show Profile' }).click();

  await expect(page).toHaveURL('/dashboard');

  await expect(page.getByText('John Doe')).toBeVisible();
  await expect(page.getByText('Email: johndoe@email.com | Job: Software Engineer')).toBeVisible();
});


test('fetch profile data from API', async ({ request }) => {
  const response = await request.get('/api/profile');
  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toMatchObject({
    name: 'John Doe',
    job: 'Software Engineer at Example Corp.'
  });
});