export default class ActionSignup {

    // static properties to be used in reducer for switch cases
    static SIGN_UP = "SIGNUP";


    // static functions to be mapped with dispatch in component
    static signUp(isSignin) {
        return { 
            type: this.SIGN_UP,
            isSignin: isSignin
        }
    }

}