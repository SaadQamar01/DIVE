import ActionLogin from "./../actions/actionLogin.js";

export default class MiddlewareLogin {

    static asyncLogin(userCredential) {
        return (dispatch) => {
            const userEmail = userCredential.userEmail
            const userPassword = userCredential.userPassword
            if (userEmail === 'Saad@gmail.com') {
                if (userPassword === 'saad123') {
                    dispatch(ActionLogin.logIn({ isLoggedIn: true, status: "Successfully Login" }))
                }
                else {
                    dispatch(ActionLogin.logIn({ isLoggedIn: false, status: "Invalid Password" }))
                }
            }
            else {
                dispatch(ActionLogin.logIn({ isLoggedIn: false, status: "Invalid Email" }))
            }

        }
    }

    static authentication() {
        return (dispatch) => {

        }
    }
}