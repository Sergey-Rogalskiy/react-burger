

import { getCookie } from './utils';

const _apiBase = 'https://norma.nomoreparties.space/api'
// _imageBase = 'https://norma.nomoreparties.space/static/pics/';


export const loginRequest = async form => {
  return await fetch('https://norma.nomoreparties.space/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  });
};

export const getUserRequest = async () =>
  await fetch('https://norma.nomoreparties.space/user', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });

  
export const getIngridientsRequest = async (token) => {
  const res = await getResource(`/ingredients`, token);
  return res;
};

export const getOrderRequest = async (token='alla', data) => {
  const res = await postResource(`/orders`, token, data);
  return res;
};
export const getForgotPasswordService = async (token='alla', data) => {
  const res = await postResource(`/password-reset`, token, data);
  return res;
};
export const getResetPasswordService = async (data) => {
  const res = await postResourceRaw(`/password-reset/reset`, data);
  return res;
};
export const getRegisterService = async (data) => {
  const res = await postResourceRaw(`/auth/register`, data);
  return res;
};

export const getLoginService = async (data) => {
  const res = await postResourceRaw(`/auth/login`, data);
  return res;
};

export const getLogoutService = async (token) => {
  const res = await postResource(`/auth/logout`, token);
  return res;
};

export const getTokenService = async (token) => {
  const res = await postResource(`/auth/token`, token);
  return res;
};

export const getUserService = async (token) => {
  const res = await getResource(`/auth/user`, token);
  return res;
};

export const patchUserService = async (token, data) => {
  console.log(token)
  console.log(data)
  const res = await patchResource(`/auth/user`, token, data);
  return res;
};

const getResource = async (url, token) => {
  const res = await fetch(`${_apiBase}${url}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    // body: JSON.stringify({ token: token })
    
  });
  if (!res.ok) {
    throw new Error(`Could not fetch '${url}', received '${res.status}'`)
  }
  return await res.json();
};


const postResourceRaw = async (url, data={}) => {
  const addData =  {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};

const postResource = async (url, token, data={}) => {
  const addData = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({token: `${token}`})
  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};


const patchResource = async (url, token, data={}) => {
  const addData = {
    method:'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  console.log(res)
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};