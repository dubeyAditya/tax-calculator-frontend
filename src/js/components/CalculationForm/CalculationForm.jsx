import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, FormItemWrapper, FormLabel } from '../../styles';
import { CurrencyInput, Input } from '../../atoms';

const CalculationForm = (props) => (
  <FormWrapper dir="column">
    <FormItemWrapper>
      <FormLabel>
        Age
      </FormLabel>
      <Input type="number" min="20" max="100" />
    </FormItemWrapper>

    <FormItemWrapper>
      <FormLabel>
        Year
      </FormLabel>
      <Input type="number" min="2018" max="2020" />
    </FormItemWrapper>


    <FormItemWrapper>
      <FormLabel>
        Annual Income
      </FormLabel>
      <CurrencyInput />
    </FormItemWrapper>

    <FormItemWrapper>
      <FormLabel>
        Tax Free Investment
      </FormLabel>
      <CurrencyInput />
    </FormItemWrapper>
  </FormWrapper>
);

CalculationForm.propTypes = {
  // bla: PropTypes.string,
};

CalculationForm.defaultProps = {
  // bla: 'test',
};

export default CalculationForm;
