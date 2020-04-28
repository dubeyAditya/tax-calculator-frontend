import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  FlexWrapper, FormWrapper, FormItemWrapper, FormLabel,
  ErrorWrapper,
} from '../../styles';
import { CurrencyInput, Input, Button } from '../../atoms';
import { Tax, TaxWrapper, ResetBtn } from './CalculationForm.styles';
import { formatToCurrency } from '../../utility';

const CalculationForm = ({
  onSubmit, error, onReset, taxAmount,
}) => {
  const initialState = {
    year: 2018,
    age: 20,
    taxFreeInvestment: 0,
    income: 0,
  };

  const [userDetails, setUserDetails] = useState(initialState);

  const [validationError, setError] = useState({ message: '', hasError: false });


  const {
    year, age, income, taxFreeInvestment,
  } = userDetails;

  useEffect(() => {
    if (error.isError) setError({ hasError: error.isError, message: error.message });
  }, [error]);

  const validate = () => {
    let isValid = true;
    // eslint-disable-next-line no-restricted-globals
    const hasNonNumber = [year, age, income, taxFreeInvestment].map(Number).some(isNaN);
    if (hasNonNumber) {
      setError({ hasError: true, message: 'Plese enter Numeric Values between [0-9]' });
      isValid = false;
    }
    if (!year || !age || !income || !taxFreeInvestment) {
      setError({ hasError: true, message: 'Plese fill all the details' });
      isValid = false;
    }
    return isValid;
  };

  const calculateTax = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(userDetails);
    }
  };

  const reset = () => {
    setUserDetails(initialState);
    setError({ message: '', hasError: false });
    onReset(-1);
  };

  return (
    <form onSubmit={calculateTax}>
      <FormWrapper dir="column">
        {validationError.hasError && (
          <ErrorWrapper>
            <div>
              {' '}
              { validationError.message}
              {' '}
            </div>
            <div />
          </ErrorWrapper>
        )}
        <FormItemWrapper>
          <FormLabel>
            Age
          </FormLabel>
          <Input
            value={age}
            onChange={({ target }) => setUserDetails({
              ...userDetails, age: Number(target.value),
            })}
            type="number"
            min="20"
            max="100"
          />
        </FormItemWrapper>

        <FormItemWrapper>
          <FormLabel>
            Year
          </FormLabel>
          <Input
            value={year}
            onChange={({ target }) => setUserDetails({
              ...userDetails, year: Number(target.value),
            })}
            type="number"
            min="2018"
            max="2020"
          />
        </FormItemWrapper>


        <FormItemWrapper>
          <FormLabel>
            Annual Income
          </FormLabel>
          <CurrencyInput
            value={income}
            onChange={({ target }) => setUserDetails({
              ...userDetails, income: Number(target.value),
            })}
          />
        </FormItemWrapper>

        <FormItemWrapper>
          <FormLabel>
            Tax Free Investment
          </FormLabel>
          <CurrencyInput
            value={taxFreeInvestment}
            onChange={({ target }) => setUserDetails({
              ...userDetails, taxFreeInvestment: Number(target.value),
            })}
          />
        </FormItemWrapper>

      </FormWrapper>
      <Button border={taxAmount < 0} type="submit" size="large" color="success">
        Calculate
      </Button>
      {(taxAmount >= 0) && (
        <TaxWrapper dir="column">
          <div> You will have to pay annual income tax of </div>
          <FlexWrapper align="center" justify="space-between">
            <Tax>
              {' '}
              {formatToCurrency(taxAmount)}
              {' '}
            </Tax>
            <ResetBtn onClick={reset}>
              New Calculation
            </ResetBtn>
          </FlexWrapper>
        </TaxWrapper>
      )}
    </form>
  );
};

CalculationForm.propTypes = {
  onSubmit: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.instanceOf(Object),
  taxAmount: PropTypes.number,
  onReset: PropTypes.func,
};

CalculationForm.defaultProps = {
  onSubmit: () => {},
  error: { message: '', isError: false },
  taxAmount: -1,
  onReset: () => {},
};

export default CalculationForm;
