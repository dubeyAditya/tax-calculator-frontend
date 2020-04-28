import React, { useState } from 'react';
import TabList from '../../atoms/TabList';
import { TaxCaclulatorWrapper } from './TaxCaclulator.styles';
import CalculationForm from '../CalculationForm';
import TaxDetails from '../TaxDetails';
import taxCalculatorService from '../../services/tax-calculator.service';

const TaxCaclulator = () => {
  const [selected, setSelected] = useState(1);

  const [taxAmount, setTaxAmount] = useState(-1);

  const [taxHistory, settaxHistory] = useState([]);

  const [error, setError] = useState({ hasError: true, message: '' });

  const calculate = (userDetails) => {
    taxCalculatorService.calculateTax(userDetails)
      .then((amount) => setTaxAmount(amount),
        (err) => setError({ hasError: true, message: err.message }));
  };

  const fetchTaxHistory = () => {
    taxCalculatorService.getTaxHistory().then((list) => settaxHistory(list),
      (err) => setError({ hasError: true, message: err.message }));
  };

  const handleTabChange = (tab) => {
    // eslint-disable-next-line no-unused-expressions
    (tab === 2) ? fetchTaxHistory() : '';
    setSelected(tab);
  };

  const renderTab = () => (selected === 1
    ? (
      <CalculationForm
        taxAmount={taxAmount}
        onReset={setTaxAmount}
        onSubmit={calculate}
        error={error}
      />
    )
    : <TaxDetails history={taxHistory} />);

  return (
    <TaxCaclulatorWrapper dir="column">
      <TabList selected={selected} onChange={handleTabChange} />
      {renderTab()}
    </TaxCaclulatorWrapper>
  );
};

export default TaxCaclulator;
