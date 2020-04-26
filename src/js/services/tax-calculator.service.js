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
  getTaxRule(year) {
    const url = this.buildUrl(`getTaxRule/:${year}`);
    return api.get(url);
  },
};
