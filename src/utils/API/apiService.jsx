import { BehaviorSubject } from "rxjs";

//import config from 'config';
import { handleResponse } from "../handle-response.js";
import { authenticationService } from "../auth/authentication.service.js";

export const apiService = {
  modules,
  getModuleByID,
};

function modules() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
  };

  return fetch(`https://wixapi.azurewebsites.net/api/Modules`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user
      // logged in between page refreshes
      console.log(data);
      return data;
    });
}

function getModuleByID(modulId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
  };

  return fetch(
    `https://wixapi.azurewebsites.net/api/Modules/${modulId}`,
    requestOptions
  )
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user
      // logged in between page refreshes
      console.log(data);
      return data;
    });
}

function createModule(modulData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
      body: JSON.stringify(modulData)
    },
  };

  return fetch(`https://wixapi.azurewebsites.net/api/Modules`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user
      // logged in between page refreshes
      console.log(data);
      return data;
    });
}

