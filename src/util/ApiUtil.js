'use strict'
const config = require('../config/config')
const request = (options) => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (localStorage.getItem("accessToken")) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem("accessToken")
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        if(response.status == 401) window.open("#/login","_self")
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getUserChatRoom(recipientId) {
  return request({
    url: config.soketUrl + "/getUserChatRoom/" + recipientId ,
    method: "GET",
  });
}

export function getChatMessages(senderId, recipientId) {
  return request({
    url: config.soketUrl + "/messages/" + senderId + "/" + recipientId,
    method: "GET",
  });
}

export function getGroupChatMessages(recipientId) {
  return request({
    url: config.soketUrl + "/groupmessages/" + recipientId,
    method: "GET",
  });
}



export function login(loginRequest) {
  return request({
    url: config.authUrl + "/signin",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function getMyUser() {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }
  return request({
    url: config.authUrl + "/users/me",
    method: "GET",
  });
}

export function getUsers() {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: config.authUrl + "/users/summaries",
    method: "GET",
  });
}

export function getUser(id) {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }
  return request({
    url: config.authUrl + "/getUser/" + id,
    method: "GET",
  });
}

export function getuserSesion(recipientId) {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: config.soketUrl + "/getUserSession/" + recipientId ,
    method: "GET",
  });
}

export function signup(signupRequest) {
  return request({
    url: config.authUrl + "/users",
    method: "POST",
    body: JSON.stringify(signupRequest),
  });
}

export function saveGroup(group) {
  return request({
    url: config.soketUrl + "/savegroup",
    method: "POST",
    body: JSON.stringify(group),
  });
}

export function savegroupandMember(group) {
  return request({
    url: config.soketUrl + "/savegroupandMember",
    method: "POST",
    body: JSON.stringify(group),
  });
}

export function getMyGroup(userid) {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: config.soketUrl + "/groups/users/" + userid ,
    method: "GET",
  });
}


export function uploadFile(param,files) {
  var formdata = new FormData();
  formdata.append("file", files, "(" + Math.floor(Math.random() * 1000000) + ")" + files.name );
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  return fetch(config.fileurl + "/uploadFile/" + param , requestOptions).then((response) =>
    response.text().then((text) => {
      if (!response.ok) {
        window.open("/login","_self")
        return Promise.reject(text);
      }
      return text;
    })
  );
}