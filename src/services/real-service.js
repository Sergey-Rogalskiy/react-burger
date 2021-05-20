

const _apiBase = 'https://norma.nomoreparties.space/api'
// _imageBase = 'https://norma.nomoreparties.space/static/pics/';

export const getIngridientsRequest = async (token) => {
  const res = await getResource(`/ingredients`, token);
  return res;
};

export const getOrderRequest = async (token, data) => {
  const res = await postResource(`/orders`, token, data);
  console.log(res)
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
