import { expect, driver } from '@wdio/globals'
import loginAction from '../actions/login.action.js'

describe('Swag Labs App', () => {
    it('should launch app and verify login page', async () => {

        const isLoginPage = await loginAction.isOnLoginPage()
        await expect(isLoginPage).toBe(true)

        await driver.saveScreenshot('./screenshots/launch.png')

        await loginAction.login('standard_user', 'secret_sauce')

        const isProductsVisible = await loginAction.waitForProducts()
        await expect(isProductsVisible).toBe(true)

        await driver.saveScreenshot('./screenshots/products.png')

        console.log('-----------------------------')
        console.log('Tugas P13 - Debora Sidabutar')
        console.log('-----------------------------')
    })
})