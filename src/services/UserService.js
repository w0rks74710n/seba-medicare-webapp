import HttpService from "./HttpService";

export default class UserService {

  constructor() {

  }

  static baseURLAuth() {return "http://localhost:3001/api/auth"; }
  static baseURLDoctor() {return "http://localhost:3001/api/doctor"; }
  static baseURLPatient() {return "http://localhost:3001/api/patient"; }

  static registerDoctor(username, password, email, subscription) {
    return new Promise((resolve, reject) => {
      HttpService.post(this.baseURLDoctor()+'/register', {
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

  static registerPatient(username, password, email, address1, address2, phone, fullName) {
    return new Promise((resolve, reject) => {
      HttpService.post(this.baseURLPatient()+'/register', {
        username: username,
        email: email,
        password: password,
        address1: address1,
        address2: address2,
        phone: phone,
        fullName
      }, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
      HttpService.post(this.baseURLAuth()+'/login', {
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
