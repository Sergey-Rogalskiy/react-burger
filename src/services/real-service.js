

const _apiBase = 'https://norma.nomoreparties.space/api'
// _imageBase = 'https://norma.nomoreparties.space/static/pics/';




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

const getResource = async (url, token) => {
  const res = await fetch(`${_apiBase}${url}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.,
    headers: {
      'X-Access-Token': token
    },
  });
  if (!res.ok) {
    throw new Error(`Could not fetch '${url}', received '${res.status}'`)
  }
  return await res.json();
};


const postResourceRaw = async (url, data={}) => {
  const addData = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  }
  const res = await fetch(
    `${_apiBase}${url}`, 
    addData
  )
  console.log(data)
  console.log(res)
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
    body:JSON.stringify(data)
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
