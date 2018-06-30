import { HTTP } from './../utils/HTTP';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  UNAUTHORIZED,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

export function createEducation(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('post', 'education/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of education response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of education response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }
export function getEducationById({'x-access-token' :token}, id) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'education/' + id, null, token)
            .then(function (response) {
              console.log("Data of specific education response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific education response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function getAllEducation(token) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'education/', null, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of all education response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of all education response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function updateEducationById(token, id ,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('put', 'education/' + id, data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of specific education response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific education response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }