import { test, expect } from '@playwright/test';

test('API: Authenticate user', async ({ request }) => {
    const response = await request.post('https://api.practicesoftwaretesting.com/auth/login', {
        data: {
            email: 'user@practicesoftwaretesting.com',
            password: 'welcome01'
        }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('access_token');
});