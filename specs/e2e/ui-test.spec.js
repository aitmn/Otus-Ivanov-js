const {test ,expect} = require ('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

  const credentials = {
    username: 'standard_user',
    password: 'secret_sauce'
  }

test('Has title', async({ page }) => {
  
  await expect(page).toHaveTitle(/Swag Labs/)
});

test('login with no log and pass', async({ page }) => {
  
  await page.locator('#login-button').click()
  await expect(page).toHaveURL('https://www.saucedemo.com/')
  
  const locator = page.locator('.error-message-container ')
  await expect(locator).toContainText('Epic sadface: Username is required')
});

test('login with wrong pass', async({ page }) => {
  
  await page.locator('#user-name').fill(credentials.username)
  await page.locator('#password').fill('1234')
  await page.locator('#login-button').click()
  
  const locator = page.locator('.error-message-container ');
  await expect(locator).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('login succesfull', async ({ page }) => {
  
  await page.locator('#user-name').fill(credentials.username)
  await page.locator('#password').fill(credentials.password)
  await page.locator('#login-button').click()
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

test('logout', async ({ page }) => {
  
  await page.locator('#user-name').fill(credentials.username)
  await page.locator('#password').fill(credentials.password)
  await page.locator('#login-button').click()
  await page.locator('#react-burger-menu-btn').click()
  await page.locator('#logout_sidebar_link').click()
  await expect(page).toHaveURL('https://www.saucedemo.com/')
});
  
test('add to cart', async ({ page }) => {
  
  await page.locator('#user-name').fill(credentials.username)
  await page.locator('#password').fill(credentials.password)
  await page.locator('#login-button').click()
  await page.locator('#add-to-cart-sauce-labs-backpack').click()

  const locator = page.locator('.shopping_cart_badge')
  await expect(locator).toBeVisible()
  await expect(locator).toContainText('1')
});

test('delete from cart', async ({ page }) =>{
  
  await page.locator('#user-name').fill(credentials.username)
  await page.locator('#password').fill(credentials.password)
  await page.locator('#login-button').click()
  await page.locator('#add-to-cart-sauce-labs-backpack').click()
  await page.locator('.shopping_cart_link').click()
  await page.locator('#remove-sauce-labs-backpack').click()
  
  const locator = page.locator('.shopping_cart_badge')
  await expect(locator).toBeHidden()
})
