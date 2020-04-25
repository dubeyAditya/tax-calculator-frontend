
const host = 'http://localhost:3000';

const api = {
  token: '',
  setToken(token) {
    this.token = token;
    console.log('Token', token);
  },
  getToken() {
    return this.token;
  },
  request(url, options) {
    const apiUrl = `${host}/${url}`;
    const headers = this.getHeaders();
    const apiOptions = { ...options, headers };
    return fetch(apiUrl, apiOptions).then((res) => res.json());
  },
  get(url) {
    const options = {
      method: 'GET',
    };
    return this.request(url, options);
  },
  post(url, payload) {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    };
    return this.request(url, options);
  },
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      Authorizarion: `Bearer ${this.getToken()}`,
    };
    return headers;
  },
};

export default api;
