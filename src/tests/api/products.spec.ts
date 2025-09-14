import { test, expect } from '@playwright/test';

test('API: Fetch products after auth', async ({ request }) => {
    const apiContext = await request.apiContext({ baseURL: 'https://api.practicesoftwaretesting.com' });

    // First, authenticate
    const authResponse = await apiContext.post('/auth/login', {
        data: {
            email: 'user@practicesoftwaretesting.com',
            password: 'welcome01'
        }
    });
    const { access_token } = await authResponse.json();

    // Then, fetch products with token
    const productsResponse = await apiContext.get('/products', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    expect(productsResponse.ok()).toBeTruthy();
    const body = await productsResponse.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
});