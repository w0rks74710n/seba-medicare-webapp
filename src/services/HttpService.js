"use strict";

export default class HttpService {
  constructor() {

  }

  static apiURL() { return "http://localhost:3001/api"; }

  static get(url, onSuccess, onError) {
    let header = new Headers();

    fetch(url, {
      method: 'GET',
      headers: header,
    }).then((resp) => {
      if(resp.ok) {
        onSuccess(resp.json());
      } else if(this.checkIfUnauthorized(resp)) {
        window.location = "/#login";
      } else {
        resp.json().then((json) => {
          onError(json.error);
        });
      }
    }).catch((e) => {
      onError(e.message);
    });
  }

  static patch(url, data, onSuccess, onError) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    fetch(url, {
      method: 'PATCH',
      headers: header,
      body: JSON.stringify(data)
    }).then((resp) => {
      if(resp.ok) {
        onSuccess(resp.json());
      } else if(this.checkIfUnauthorized(resp)) {
        window.location = "/#login";
      } else {
        resp.json().then((json) => {
          onError(json.error);
        });
      }
    }).catch((e) => {
      onError(e.message);
    });
  }

  static post(url, data, onSuccess, onError) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(data)
    }).then((resp) => {
      if(resp.ok) {
        onSuccess(resp.json());
      } else if(this.checkIfUnauthorized(resp)) {
        window.location = "/#login";
      } else {
        resp.json().then((json) => {
          onError(json.error);
        });
      }
    }).then((resp) => {
      if(resp.hasOwnProperty('token')) {
        window.localStorage['jwtToken'] = resp.token;
      }
      onSuccess(resp);
    }).catch((e) => {
      onError(e.message);
    });
  }

  static delete(url, onSuccess, onError) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    fetch(url, {
      method: 'DELETE',
      headers: header
    }).then((resp) => {
      if (resp.ok) {
         onSuccess(resp.json());
      } else if (this.checkIfUnauthorized(resp)) {
        window.location = "/#login";
      } else {
        resp.json().then((json) => {
          onError(json.error);
        });
      }
    }).then((resp) => {
      onSuccess(resp);
    }).catch((e) => {
      onError(e.message);
    });
  }

  static checkIfUnauthorized(res) {
    return res.status == 401;
  }
}