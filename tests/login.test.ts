//using OrangeHRM Demo instead to test for linkedin because of linkedin bolt check in or hard auto log in
import {test, expect} from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import config from '../utils/config'

test.describe('Login Tests', ()=>{
    let loginPage: LoginPage

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page)
        await page.context().clearCookies()
        await loginPage.navigate()
    })

    test('should login with valid credentials', async()=>{
        await loginPage.login(
            config.credentials.username,
            config.credentials.password
        )
        await expect(loginPage['page']).toHaveURL(/dashboard/)
        await loginPage['page'].pause()
    })

    test('should show error with invalid credentials', async()=>{
        await loginPage.login('wrong@email.com','wrongpassword')
        const error = await loginPage.getErrorMessage()
        expect(error).toContain('Invalid credentials')
        await loginPage['page'].pause()
      })

    // test.afterEach(async () => {
    //     await loginPage['page'].waitForTimeout(2000) // 2s pause after each test
    //   })
})