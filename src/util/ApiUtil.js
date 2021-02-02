const AUTH_SERVICE = "http://207.154.208.203:3000";
const FILE_SERVICE = "http://207.154.208.203:3001";
const CHAT_SERVICE = "http://207.154.208.203:8080";

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
        window.open("/login","_self")
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getUserChatRoom(recipientId) {
  return request({
    url: CHAT_SERVICE + "/getUserChatRoom/" + recipientId ,
    method: "GET",
  });
}

export function getChatMessages(senderId, recipientId) {
  return request({
    url: CHAT_SERVICE + "/messages/" + senderId + "/" + recipientId,
    method: "GET",
  });
}

export function login(loginRequest) {
  return request({
    url: AUTH_SERVICE + "/signin",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function getMyUser() {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }
  return request({
    url: AUTH_SERVICE + "/users/me",
    method: "GET",
  });
}

export function getUsers() {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: AUTH_SERVICE + "/users/summaries",
    method: "GET",
  });
}
export function getuserSesion(recipientId) {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: CHAT_SERVICE + "/getUserSession/" + recipientId ,
    method: "GET",
  });
}

export function uploadFile(param,files) {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }
  var formdata = new FormData();
  formdata.append("file", files, files.name);
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  return fetch(FILE_SERVICE + "/FileService/uploadFile/" + param , requestOptions).then((response) =>
    response.text().then((text) => {
      if (!response.ok) {
        window.open("/login","_self")
        return Promise.reject(text);
      }
      return text;
    })
  );
}