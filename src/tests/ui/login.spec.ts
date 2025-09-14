import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('UI: Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('user@practicesoftwaretesting.com', 'welcome01');
    await expect(page).toHaveURL(/profile|dashboard/); // Adjust expected URL after login
});