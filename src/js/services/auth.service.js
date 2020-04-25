import api from '../api';
// Data can be formatted here as per requirement
const authservice = {
  controller: 'auth',
  buildUrl(action) {
    return `${this.controller}/${action}`;
  },
  authenticate(user) {
    const url = this.buildUrl('signUp');
    const payload = { userName: user.username, password: user.password };
    return new Promise((resolve, reject) => api.post(url, payload).then((data) => {
      api.setToken(data.accessToken);
      resolve();
    }, (err) => { reject(err); }));
  },
  register(user) {
    const url = this.buildUrl('signUp');
    const payload = { userName: user.username, password: user.password };
    return api.post(url, payload);
  },
};
export default authservice;
