import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('UI: Browse products on home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const count = await homePage.getProductCount();
    expect(count).toBeGreaterThan(0);
    await homePage.clickFirstProduct();
    await expect(page).toHaveURL(/product/); // Assume product detail route
});