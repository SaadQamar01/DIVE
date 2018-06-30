import { HTTP } from './../utils/HTTP';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  UNAUTHORIZED,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

export function createExperience(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('post', 'experience/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of Experience response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of Experience response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }
export function getExperienceById({'x-access-token' :token}, id) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'experience/' + id, null, token)
            .then(function (response) {
              console.log("Data of specific Experience response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Experience response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function getAllExperience(token) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'experience/', null, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of all Experience response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of all Experience response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function updateExperienceById(token, id ,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('put', 'experience/' + id, data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of specific Experience response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Experience response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }