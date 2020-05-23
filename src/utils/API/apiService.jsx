import { BehaviorSubject } from "rxjs";

//import config from 'config';
import { handleResponse } from "../handle-response.js";
import { authenticationService } from "../auth/authentication.service.js";

export const apiService = {
  modules,
  getModuleByID,
  createModule,
  deleteModuleByID,
  updateModuleByID,
  createLesson,
  deleteLessonByID,
  updateLessonByID,
  lessons,
  getLessonByID,

};

//#region =================================START MODUL REGION====================================
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
  console.log(modulData);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
    body: JSON.stringify(modulData),
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

function deleteModuleByID(modulId) {
  const requestOptions = {
    method: "DELETE",
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

function updateModuleByID(modulId, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
    body: JSON.stringify(data),
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
//#endregion =================================END MODUL REGION====================================

//#region =================================START LESSON REGION====================================
function lessons(ModuleId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
  };

  return fetch(`https://wixapi.azurewebsites.net/api/module/${ModuleId}/Lessons`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // store user details and jwt token in local storage to keep user
      // logged in between page refreshes
      console.log(data);
      return data;
    });
}

function getLessonByID(ModuleId, LessonId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
  };

  return fetch(
    `https://wixapi.azurewebsites.net/api/module/${ModuleId}/Lessons/${LessonId}`,
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

function createLesson(ModuleID, lessonData) {
  console.log(lessonData);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
    body: JSON.stringify(lessonData),
  };

  return fetch(`https://wixapi.azurewebsites.net/api/module/${ModuleID}/Lessons`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      console.log(data);
      return data;
    });
}
function deleteLessonByID(ModuleId, LessonId) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
  };

  return fetch(
    `https://wixapi.azurewebsites.net/api/module/${ModuleId}/Lessons/${LessonId}`,
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

function updateLessonByID(lessonId, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authenticationService.currentUserValue.token}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(
    `https://wixapi.azurewebsites.net/api/Lessons/${lessonId}`,
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


//#endregion =================================END LESSON REGION====================================
