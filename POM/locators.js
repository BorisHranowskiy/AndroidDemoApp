class Locators {


    // get LOGIN_ICON() {
    //         return $('-ios predicate string: label == "Login"')
    // }

    // get INPUT_EMAIL() {
    //     return $('-ios predicate string: name == "input-email"')
    // }

    // get INPUT_PASSWORD() {
    //     return $('-ios predicate string: name == "input-password"')
    // }

    // get INPUT_CONFRIM_PASSWORD() {
    //     return $('-ios predicate string: name == "input-repeat-password"')
    // }

    // get LOGIN_BTN() {
    //     return $('-ios predicate string: label == "LOGIN" AND name == "LOGIN" AND value == "LOGIN"')
    // }

    // get SIGNUP_BTN_MODAL() {
    //     return $('-ios predicate string: label == "Sign up" AND name == "Sign up" AND value == "Sign up"')
    // }

    // get SIGNUP_FORM() {
    //     return $('-ios predicate string: label == "Login / Sign up Form" AND name == "Login / Sign up Form" AND value == "Login / Sign up Form"')
    // }

    // get SIGNUP_BTN() {
    //     return $('-ios predicate string:  label == "SIGN UP" AND name == "SIGN UP" AND value == "SIGN UP"')
    // }

    // get SIGNEDUP_MESSAGE() {
    //     return $('-ios predicate string: label == "Signed Up!" AND name == "Signed Up!" AND type == "XCUIElementTypeAlert"')
    // }

    // get VALID_EMAIL_MESSAGE() {
    //     return $('-ios predicate string: label == "Please enter a valid email address"')
    // }

    // get VALID_PASSWORD_MESSAGE() {
    //     return $('-ios predicate string: label == "Please enter at least 8 characters"')
    // }

    // get VALID_CONFRIM_PASSWORD_MESSAGE() {
    //     return $('-ios predicate string: label == "Please enter the same password"')
    // }


    get LOGIN_ICON() { return $('~Login') }
    get INPUT_EMAIL() { return  $('~input-email') }
    get INPUT_PASSWORD() { return  $('~input-password') }
    get LOGIN_BTN() { return $('~button-LOGIN') }
    get LOGIN_FORM() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup') }
    get VALID_EMAIL_MESSAGE() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')}
    get VALID_PASSWORD_MESSAGE() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]')}
    get SIGNUP_BTN_MODAL() { return $('//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup')}
    get INPUT_CONFRIM_PASSWORD() {return $('~input-repeat-password')}
    get SIGNUP_BTN() {return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup')}
    get VALID_CONFRIM_PASSWORD_MESSAGE() {return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[3]')}
    get SIGNEDUP_MESSAGE() { return $('/hierarchy/android.widget.FrameLayout')}


}
export default new Locators()