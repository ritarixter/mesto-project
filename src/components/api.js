import { token, cohortId, baseUrl } from "./constants.js";
const responseCheck = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export function userInformation() {
  return fetch(`${baseUrl}/${cohortId}/users/me`, {
    headers: {
      authorization: token,
    },
  }).then(responseCheck);
}

export function cardsLoad() {
  return fetch(`${baseUrl}/${cohortId}/cards`, {
    headers: {
      authorization: token,
    },
  }).then(responseCheck);
}

export function profileChange(name, about) {
  return fetch(`${baseUrl}/${cohortId}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(responseCheck);
}

export function addCard(link, name) {
  return fetch(`${baseUrl}/${cohortId}/cards`, {
    method: "POST",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(responseCheck);
}

export function deleteCard(cardId) {
  return fetch(`${baseUrl}/${cohortId}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: token,
    },
  }).then(responseCheck)
}

export function sendLike(cardId) {
  return fetch(`${baseUrl}/${cohortId}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      authorization: token,
    },
  }).then(responseCheck);
}

export function deleteLike(cardId) {
  return fetch(`${baseUrl}/${cohortId}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: token,
    },
  }).then(responseCheck);
}

export function changeAvatar(link) {
  return fetch(`${baseUrl}/${cohortId}/users/me/avatar`, {
    method: "PATCH",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: `${link}`,
    }),
  }).then(responseCheck);
}
