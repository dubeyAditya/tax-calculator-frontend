import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';


const CurrencyInput = (props) => {
  const localStringToNumber = (s) => Number(String(s).replace(/[^0-9.-]+/g, ''));

  const onFocus = (e) => {
    const { value } = e.target;
    e.target.value = value ? localStringToNumber(value) : '';
  };

  const options = {
    maximumFractionDigits: 2,
    currency: 'INR',
    style: 'currency',
    currencyDisplay: 'symbol',
  };


  const formatTocurrency = (value) => localStringToNumber(value).toLocaleString(undefined, options);

  const onBlur = (e) => {
    const { value } = e.target;
    e.target.value = value ? formatTocurrency(value) : '';
  };

  return (
    <div className="CurrencyInputWrapper">
      <Input
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={formatTocurrency(0)}
      />
    </div>
  );
};

CurrencyInput.propTypes = {
  onChange: PropTypes.func,
};

CurrencyInput.defaultProps = {
  onChange: () => { },
};


export default CurrencyInput;
