export const BASE_URL = "https://api.nomoreparties.co";

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

// in src/utils/auth.js

// The authorize function accepts the necessary data as parameters.
export const authorize = (identifier, password) => {
  // A POST request is sent to /auth/local.
  return fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // The parameters are wrapped in an object, converted to a JSON
    // string, and sent in the body of the request.
    body: JSON.stringify({ identifier, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const getUserData = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};
