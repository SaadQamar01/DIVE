import { HTTP } from './../utils/HTTP';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  UNAUTHORIZED,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

export function createSkill(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('post', 'skill/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of Skill response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of Skill response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }
export function getSkillsById({'x-access-token' :token}, id) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'skill/' + id, null, token)
            .then(function (response) {
              console.log("Data of specific Skills response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Skills response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function getAllSkills(token) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'skill/', null, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of all Skills response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of all Skills response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function updateSkillsById(token, id ,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('put', 'skill/' + id, data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of specific Skills response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Skills response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }