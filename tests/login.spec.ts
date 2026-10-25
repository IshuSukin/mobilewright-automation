import { test, expect } from '@mobilewright/test';

test('app launches and shows the product list', async ({ screen }) => {
  await expect(screen.getByText('Products')).toBeVisible();
});

test('click on the hamburger menu and verify login is visible', async({screen})=>{
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/menuIV').tap();
    await expect(screen.getByText('Log In')).toBeVisible();
    await screen.getByText('Log In').tap();
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET').fill('bob@example.com');
   
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET').fill('10203040');
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/loginBtn').tap();
    await expect(screen.getByLabel('title')).toHaveText('Products');
   
})
// test('user can login with valid credentials', async({screen})=>{
//     await screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET').fill('bob@example.com');
//     await screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET').fill('10203040');
//     await screen.getByText('Login').tap();
// })

    