import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private readonly productCards = this.page.locator('.card'); // Adjust selector as needed

    async goto() {
        await this.page.goto('/');
    }

    async getProductCount(): Promise<number> {
        return await this.productCards.count();
    }

    async clickFirstProduct() {
        await this.productCards.first().click();
    }
}