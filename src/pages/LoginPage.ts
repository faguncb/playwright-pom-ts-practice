import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly emailInput = this.page.locator('input[type="email"]'); // Adjust if data-testid available
    private readonly passwordInput = this.page.locator('input[type="password"]');
    private readonly loginButton = this.page.locator('button[type="submit"]');

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}