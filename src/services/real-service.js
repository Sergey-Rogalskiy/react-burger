export default class SwapiService {

  _apiBase = 'https://norma.nomoreparties.space/api'
  // _imageBase = 'https://norma.nomoreparties.space/static/pics/';

  getIngridients = async (token) => {
    const res = await this.getResource(`/ingredients`, token);
    return res;
  };
  postOrder = async (token, data) => {
    const res = await this.postResource(`/orders`, token, data);
    console.log(res)
    return res;
  };

  getResource = async (url, token) => {
    const res = await fetch(`${this._apiBase}${url}`, {
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


  postResource = async (url, token, data={}) => {
    const addData = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }
    const res = await fetch(
      `${this._apiBase}${url}`, 
      addData
    )
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };
}