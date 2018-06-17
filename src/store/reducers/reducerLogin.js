import React from 'react';
import ActionLogin from '../actions/actionLogin.js'


function reducerLogin(state = { isLoggedIn: false }, action) {
  switch (action.type) {
    case ActionLogin.LOG_IN:
      state = action.responseFromServer
      return state;
    default:
      return state
  }
}
export default reducerLogin;