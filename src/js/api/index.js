
const host = 'http://localhost:3000';

const api = {
  token: sessionStorage.getItem('jwt'),
  setToken(token) {
    sessionStorage.setItem('jwt', token);
    console.log('Token', token);
  },
  getToken() {
    const token = sessionStorage.getItem('jwt') || '';
    return token;
  },
  request(url, options) {
    const apiUrl = `${host}/${url}`;
    const headers = this.getHeaders();
    const apiOptions = { ...options, headers };
    console.log(apiOptions);
    return new Promise((resolve, reject) => fetch(apiUrl, apiOptions)
      .then((res) => res.json())
      .then((response) => {
        const {
          error, message, statusCode, data,
        } = response;
        if (error || statusCode !== 200) {
          console.log('Response on Error: ', response);
          const errorMessage = Array.isArray(message) ? message.join('\n') : message;
          const errorDate = { message: errorMessage, statusCode };
          reject(errorDate);
        } else {
          console.log('Response on Success: ', response);
          resolve(data);
        }
      }).catch((err) => reject(err)));
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
      Authorization: `Bearer ${this.getToken()}`,
    };
    return headers;
  },
};

export default api;
