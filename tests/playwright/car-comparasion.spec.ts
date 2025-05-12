import { test, expect } from '@playwright/test';

test.describe('Car Comparison', () => {
  const mockCarResponse = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    fuel_type: 'gasoline',
    transmission: 'automatic',
    drive: 'FWD',
    cylinders: 4,
    horsepower: 132,
    city_mpg: 30,
    highway_mpg: 38,
    combination_mpg: 33,
    displacement: 1.8,
    class: 'compact car',
  };

  test('user fills in make and model, clicks select, and sees car data', async ({ page }) => {
    await page.route('**/v1/cars?make=Toyota&model=Corolla', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([mockCarResponse]),
      })
    );

    await page.goto('/');

    const inputs = page.locator('input');
    await inputs.nth(0).fill('Toyota');
    await inputs.nth(1).fill('Corolla');

    await page.getByRole('button', { name: 'Vybrat' }).first().click();

    await expect(page.locator('text=Načítání dat...')).toBeVisible();

    await expect(page.locator('text=Toyota Corolla (2020)')).toBeVisible();
    await expect(page.locator('text=Fuel: gasoline').or(page.locator('text=Palivo: gasoline'))).toBeVisible();
    await expect(page.locator('text=Horsepower: 132 HP').or(page.locator('text=Výkon: 132 HP'))).toBeVisible();
    await expect(page.locator('text=Combined MPG: 33 MPG').or(page.locator('text=Kombinovaná spotřeba: 33 MPG'))).toBeVisible();
  });

  test('API request is called with correct parameters', async ({ page }) => {
    let requestUrl = '';

    await page.route('**/v1/cars**', (route, request) => {
      requestUrl = request.url();
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([mockCarResponse]),
      });
    });

    await page.goto('/');

    await page.getByPlaceholder('Značka (např. Toyota)').first().fill('Toyota');
    await page.getByPlaceholder('Model (např. Corolla)').first().fill('Corolla');

    await page.getByRole('button', { name: 'Vybrat' }).first().click();

    await expect(page.locator('text=Toyota Corolla (2020)')).toBeVisible();

    expect(requestUrl).toContain('make=Toyota');
    expect(requestUrl).toContain('model=Corolla');
  });
});
