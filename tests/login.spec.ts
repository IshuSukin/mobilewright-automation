import { test, expect } from '@mobilewright/test';

// test('app launches and shows the product list', async ({ screen }) => {
//   await expect(screen.getByText('Products')).toBeVisible();
// });

test('click on the hamburger menu and verify login is visible', async({screen})=>{
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/menuIV').tap();
    await expect(screen.getByText('Log In')).toBeVisible();
    await screen.getByText('Log In').tap();
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET').fill('bob@example.com');
   
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET').fill('10203040');
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/loginBtn').tap();
    await expect(screen.getByLabel('title')).toHaveText('Products');
   
})
test('user selects a product and completes checkout', async ({ screen }) => {
  await expect(screen.getByText('Products')).toBeVisible();
 // await screen.swipe('up');

  // const backpack =await screen.getByText('Sauce Labs Backpack (yellow)').boundingBox(561,1472, 467×583);
  // await expect(backpack).toBeVisible();
  // await backpack.tap();

  const backpackImage = screen
  .getByTestId('com.saucelabs.mydemoapp.android:id/productIV')
  .nth(0);

await backpackImage.tap();

  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/cartBt').tap();
  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/cartRL').tap();
  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/cartBt').tap();

  
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/username1TV').tap();
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/loginBtn').tap();

 // After navigating to the address form:
const fullName = screen.getByTestId(
  'com.saucelabs.mydemoapp.android:id/fullNameET'
);

await expect(fullName).toBeVisible();
await fullName.fill('John Doe');
await screen.pressButton('BACK');
const address1 = screen.getByTestId(
  'com.saucelabs.mydemoapp.android:id/address1ET'
);
await address1.scrollIntoViewIfNeeded();
await expect(address1).toBeVisible();
await address1.fill('123 Main Street');

const city = screen.getByTestId('com.saucelabs.mydemoapp.android:id/cityET');
await expect(city).toBeVisible();
await city.fill('San Francisco');

const state = screen.getByTestId('com.saucelabs.mydemoapp.android:id/stateET');
await expect(state).toBeVisible();
await state.fill('CA');

const zip = screen.getByTestId('com.saucelabs.mydemoapp.android:id/zipET');
await expect(zip).toBeVisible();
await zip.fill('94107');

const country = screen.getByTestId('com.saucelabs.mydemoapp.android:id/countryET');
await expect(country).toBeVisible();
await country.fill('United States');

  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/paymentBtn').tap();

  const cardName = screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET');
await expect(cardName).toBeVisible();
await cardName.fill('John Doe');

const cardNumber = screen.getByTestId('com.saucelabs.mydemoapp.android:id/cardNumberET');
await expect(cardNumber).toBeVisible();
await cardNumber.fill('4111111111111111');

const expiration = screen.getByTestId('com.saucelabs.mydemoapp.android:id/expirationDateET');
await expect(expiration).toBeVisible();
await expiration.fill('12/28');

const securityCode = screen.getByTestId('com.saucelabs.mydemoapp.android:id/securityCodeET');
await expect(securityCode).toBeVisible();
await securityCode.fill('123');

  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/paymentBtn').tap();
  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/paymentBtn').tap();

  await screen.getByTestId('com.saucelabs.mydemoapp.android:id/shoopingBt').tap();
  await expect(screen.getByText('Products')).toBeVisible();
});
// test('user can login with valid credentials', async({screen})=>{
//     await screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET').fill('bob@example.com');
//     await screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET').fill('10203040');
//     await screen.getByText('Login').tap();
// })

    