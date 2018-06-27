"use strict";

import HttpService from './HttpService';

export default class DoctorReviewsService {

  constructor(){

  }

  static baseURL() {return "http://localhost:3001/api/review" }

  static getReviews(doctor) {
    return new Promise((resolve, reject) => {
      HttpService.get(this.baseURL()+'/'+ doctor, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

}