<<<<<<< HEAD
import Registration from '../../POM/registrationFlow'
=======
import Registration from '../../POM/registrationFlow.js'
>>>>>>> fd76bf5e (Initial commit)

const registration = new Registration()


describe('Login', function() {
    it('Click login button', async () => {
        await registration.registrationValidation()
        })
});