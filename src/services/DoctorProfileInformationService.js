"use strict";

import HttpService from './HttpService';

export default class DoctorProfileInformationService {

  constructor(){

  }

  static baseURL() {return "http://localhost:3001/api/doctorProfileInformation" }

  static getDoctorProfiles(filterSelection){
    return new Promise((resolve, reject) => {
      HttpService.get(this.baseURL(), filterSelection, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static getDoctorProfile(doctor_id) {
    return new Promise((resolve, reject) => {
      HttpService.get(this.baseURL()+'/'+ doctor_id, (data) => {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }

  static deleteDoctorProfile(doctor_id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(this.baseURL()+'/'+ doctor_id, function(data) {
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

  static updateDoctorProfile(doctorProfileInformation, doctor_id) {
    return new Promise((resolve, reject) => {
      HttpService.patch(this.baseURL()+'/'+ doctor_id, doctorProfileInformation, function(data) {
        resolve(data);
      }, function(textStatus) {
        reject(textStatus);
      });
    });
  }
}