"use strict";

import HttpService from './HttpService';

export default class AppoitmentService {

  constructor(){

  }

  static baseURL() {return "http://localhost:3001/api/appointment" }

  static getAppointments(doctor_id){
    return new Promise((resolve, reject) => {
      HttpService.get(this.baseURL() + '/' + doctor_id, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static updateAppointment(appointment, appointment_id) {
    return new Promise((resolve, reject) => {
      HttpService.patch(this.baseURL()+'/'+ appointment_id, appointment, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static deleteAppointment(appointment_id) {
    return new Promise((resolve, reject) => {
      HttpService.delete(this.baseURL()+'/'+ appointment_id, function(data) {
        if(data.message != undefined) {
          resolve(data.message);
        } else {
          reject('Error while deleting');
        }
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

}