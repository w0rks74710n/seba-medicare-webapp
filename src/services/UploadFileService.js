"use strict";

import HttpService from './HttpService';

export default class UploadFileService {

  constructor(){

  }

  static baseURL() {return "http://localhost:3001/api/upload" }

   static uploadImage(image) {
    return new Promise((resolve, reject) => {
      HttpService.post(this.baseURL(), image, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      }, true);
    });
  }
}