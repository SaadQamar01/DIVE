export default class ActionLogin {

    // static properties to be used in reducer for switch cases
    static LOG_IN = "LOGIN";


    // static functions to be mapped with dispatch in component
    static logIn(responseFromServer) {
        return { 
            type: this.LOG_IN,
            responseFromServer: responseFromServer
        }
    }
}