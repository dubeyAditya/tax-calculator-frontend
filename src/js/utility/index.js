export const formatToCurrency = (value) => {
  const localStringToNumber = (s) => Number(String(s).replace(/[^0-9.-]+/g, ''));
  const options = {
    maximumFractionDigits: 2,
    currency: 'INR',
    style: 'currency',
    currencyDisplay: 'symbol',
  };
  return localStringToNumber(value).toLocaleString(undefined, options);
};
