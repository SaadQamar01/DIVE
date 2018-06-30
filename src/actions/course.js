import { HTTP } from './../utils/HTTP';

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  UNAUTHORIZED,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

export function createCourse(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('post', 'course/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of Course response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of Course response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }
export function getCoursesById({'x-access-token' :token}, id) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'course/' + id, null, token)
            .then(function (response) {
              console.log("Data of specific Courses response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Courses response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function getAllCourses(token) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'course/', null, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of all Courses response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of all Courses response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function updateCoursesById(token, id ,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('put', 'course/' + id, data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of specific Courses response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of specific Courses response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }

  export function searchCourses(token,data) {
    return function (dispatch) {
      return new Promise(function (resolve, reject) {
        {
          // API
          HTTP('get', 'course/', data, {'x-access-token' :token})
            .then(function (response) {
              console.log("Data of search  Course response", response.data);
              resolve(response.data);
            })
            .catch(error => {
              console.log("Data of search Course response: ", error);
              reject(error.response);
  
            })
        }
      })
    }
  }