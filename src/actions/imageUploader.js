import { HTTP } from './../utils/HTTP';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  UNAUTHORIZED,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

export function imageUpload(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('post', 'image/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of Image upload response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of Image upload response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }