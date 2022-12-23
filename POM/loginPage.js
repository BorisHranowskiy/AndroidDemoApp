import Locators from '../POM/locators'
const {Creds} = require('../POM/data');
class Login {

    async loginIntoApp() {
       await Locators.LOGIN_ICON.click()
       await expect(Locators.LOGIN_FORM).toBeDisplayed()
       await Locators.INPUT_EMAIL.setValue(Creds.email)
       await Locators.INPUT_PASSWORD.setValue(Creds.password)
       await Locators.LOGIN_BTN.click()
    }

    async loginValidation() {
        await Locators.LOGIN_ICON.click()
        await expect(Locators.LOGIN_FORM).toBeDisplayed()
        await Locators.LOGIN_BTN.click()
        await expect(Locators.VALID_EMAIL_MESSAGE).toHaveText('Please enter a valid email address')
        await expect(Locators.VALID_PASSWORD_MESSAGE).toHaveText('Please enter at least 8 characters')
     }

}
export default Login