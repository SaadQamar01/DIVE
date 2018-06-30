import { HTTP } from './../utils/HTTP';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  UNAUTHORIZED,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

export function createProject(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('post', 'project/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of Project response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of Project response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }
export function getProjectsById({'x-access-token' :token}, id) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'project/' + id, null, token)
            .then(function (response) {
              console.log("Data of specific Projects response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Projects response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function getAllProjects(token) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'project/', null, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of all Projects response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of all Projects response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function updateProjectsById(token, id ,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('put', 'project/' + id, data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of specific Projects response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Projects response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function searchProjects(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'project/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of search  Projects response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of search Projects response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }