import HttpService from "./HttpService";

export default class DoctorService {

  constructor() {

  }

  static baseURL() {return "http://localhost:3001/api/doctor"; }

  static register(username, password, email, subscription) {
    return new Promise((resolve, reject) => {
      HttpService.post(`${UserService.baseURL()}/register`, {
        username: username,
        password: password,
        email: email,
        subscription: subscription
      }, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
      HttpService.post(`${UserService.baseURL()}/login`, {
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