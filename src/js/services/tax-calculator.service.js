import api from '../api';

export default {
  controller: 'taxCalculator',
  buildUrl(action, param) {
    const parameters = param || '';
    return `${this.controller}/${action}/${parameters}`;
  },
  calculateTax(userDetails) {
    const url = this.buildUrl('calculateTax');
    const payload = {
      year: userDetails.year,
      yearlySalary: userDetails.income,
      taxFreeInvestment: userDetails.taxFreeInvestment,
      age: userDetails.age,
    };
    return api.post(url, payload);
  },
  getTaxRule(year) {
    const url = this.buildUrl('getTaxRule', year);
    return api.get(url);
  },
  getTaxHistory() {
    return api.get('getTaxHistory');
  },
};
