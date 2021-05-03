export default class SwapiService {

  _apiBase = 'https://norma.nomoreparties.space/api'
  // _imageBase = 'https://norma.nomoreparties.space/static/pics/';

  getIngridients = async (token) => {
    const res = await this.getResource(`/ingredients`, token);
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


  postResource = async (url, data={}, token) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data),
      headers: {
        'X-Access-Token': token
      },
    })
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };
}