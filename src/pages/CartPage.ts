import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    private readonly cartItems = this.page.locator('.cart-item'); // Adjust selector

    async goto() {
        await this.page.goto('/cart'); // Assume route; adjust if different
    }

    async getItemCount(): Promise<number> {
        return await this.cartItems.count();
    }
}