import api from '../api';

export default {
  controller: 'taxCalculator',
  buildUrl(action) {
    return `${this.controller}/${action}`;
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
  getTaxRecords() {
    return api.get('getTaxHistory');
  },
};
