import React from 'react';
import ActionSignup from '../actions/actionSignup.js'


function reducerSignup(state = [], action) {
  switch (action.type) {
    case ActionSignup.SIGN_UP:
      return action.isSignin
    default:
      return state
  }
}
export default reducerSignup;