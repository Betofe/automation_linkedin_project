import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import config from '../utils/config'

test.describe('Search Tests', () => {
  let loginPage: LoginPage
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    // Login first before searching
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await loginPage.navigate()
    await loginPage.login(
      config.credentials.username,
      config.credentials.password
    )
    await page.waitForURL(/dashboard/)
  })

  test('should search for an employee', async () => {
    await homePage.search('John')
    await homePage['page'].pause() // pause to see results
  })
})