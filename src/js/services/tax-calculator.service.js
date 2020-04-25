import api from '../api';

export default {
  controller: 'taxCalculator',
  buildUrl(action) {
    return `${this.controller}/${action}`;
  },
  calculateTax(paylod) {
    const url = this.buildUrl('calculateTax');
    return api.post(url, paylod);
  },
};
