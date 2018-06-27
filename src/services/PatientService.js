"use strict";

import HttpService from "./HttpService";

export default class DoctorService {

  constructor() {

  }

  static baseURL() {return "http://localhost:3001/api/patient"; }

  static register(username, password, email, address1, address2, phone) {
    return new Promise((resolve, reject) => {
      HttpService.post(this.baseURL()+'/register', {
        username: username,
        email: email,
        password: password,
        address1: address1,
        address2: address2,
        phone: phone
      }, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
      HttpService.post(this.baseURL()+'/login', {
        username: username,
        password: password
      }, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static logout(){
    window.localStorage.removeItem('jwtToken');
  }

  static getCurrentUser() {
    let token = window.localStorage['jwtToken'];
    if (!token) return {};

    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return {
      id : JSON.parse(window.atob(base64)).id,
      username: JSON.parse(window.atob(base64)).username
    };
  }

  static isAuthenticated() {
    return !!window.localStorage['jwtToken'];
  }
}