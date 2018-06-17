import ActionSignup from "./../actions/actionSignup.js";


export default class MiddlewareSignup {

    static asyncSignup(detail) {
        return (dispatch) => {
            var Name   = detail.Name
            var Email   = detail.Email
            var Password   = detail.Password
        
        }
    }
}
