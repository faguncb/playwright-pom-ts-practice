import { test, expect } from '@playwright/test';

test('API: Authenticate user', async ({ request }) => {
    const apiContext = await request.newContext({ baseURL: 'https://api.practicesoftwaretesting.com' });
    const response = await apiContext.post('/auth/login', {
        data: {
            email: 'user@practicesoftwaretesting.com',
            password: 'welcome01'
        }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('access_token');
});