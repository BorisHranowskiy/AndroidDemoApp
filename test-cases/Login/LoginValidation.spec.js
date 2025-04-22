<<<<<<< HEAD
import Login from '../../POM/loginPage'
=======
import Login from '../../POM/loginPage.js'
>>>>>>> fd76bf5e (Initial commit)
const login = new Login()


describe('Login', function() {
    it('Click login button', async () => {
        await login.loginValidation()
        })
});