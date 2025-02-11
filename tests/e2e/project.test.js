const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Ласкаво просимо до тестового проєкту/);
});

test('Перевірка наявності тексту на сторінці', async ({ page }) => {
  await page.goto('/');
  const content = await page.textContent('h1');
  expect(content).toContain('Це тестовий текст для перевірки.');
});
