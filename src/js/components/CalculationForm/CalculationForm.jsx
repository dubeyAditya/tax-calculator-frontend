import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  FlexWrapper, FormWrapper, FormItemWrapper, FormLabel,
  ErrorWrapper,
} from '../../styles';
import { CurrencyInput, Input, Button } from '../../atoms';
import { Tax, TaxWrapper } from './CalculationForm.styles';
import taxCalculatorService from '../../services/tax-calculator.service';

const CalculationForm = ({ userId }) => {
  const [userDetails, setUserDetails] = useState({
    year: 2018,
    age: 20,
    taxFreeInvestment: 0,
    income: 0,
  });

  const [error, setError] = useState({ message: '', hasError: false });

  const [taxAmount, setTaxAmount] = useState(null);

  const {
    year, age, income, taxFreeInvestment,
  } = userDetails;

  const calculateTax = (e) => {
    e.preventDefault();
    if (year && age && income && taxFreeInvestment) {
      console.log(userDetails);

      taxCalculatorService.calculateTax(userDetails)
        .then((amount) => setTaxAmount(amount),
          (err) => setError({ hasError: true, message: err.message }));

      //
    } else {
      setError({ hasError: true, message: 'Plese fill all the details' });
    }
  };

  useEffect(() => {
    console.log(userDetails);
  });


  return (
    <form onSubmit={calculateTax}>
      {error.hasError && (
        <ErrorWrapper>
          <div>
            {' '}
            { error.message }
            {' '}
          </div>
          <div />
        </ErrorWrapper>
      )}
      <FormWrapper dir="column">
        <FormItemWrapper>
          <FormLabel>
            Age
          </FormLabel>
          <Input
            value={age}
            onChange={({ target }) => setUserDetails({
              year, income, taxFreeInvestment, age: target.value,
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
              income, taxFreeInvestment, age, year: target.value,
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
              year, taxFreeInvestment, age, income: target.value,
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
              year, taxFreeInvestment: target.value, age, income,
            })}
          />
        </FormItemWrapper>

      </FormWrapper>
      <Button type="submit" size="large" color="success">
        Calculate
      </Button>
      {taxAmount && (
        <TaxWrapper dir="column">
          <div> You will have to pay annual income tax of </div>
          <FlexWrapper justify="space-between">
            <Tax>
              {' '}
              {taxAmount}
              {' '}
            </Tax>
            <Button size="normal" color="success"> Save </Button>
          </FlexWrapper>
        </TaxWrapper>
      )}
    </form>
  );
};

CalculationForm.propTypes = {
  userId: PropTypes.string,
};

CalculationForm.defaultProps = {
  userId: '',
};

export default CalculationForm;
