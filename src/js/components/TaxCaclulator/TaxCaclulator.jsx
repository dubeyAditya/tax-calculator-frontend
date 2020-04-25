import React, { useState } from 'react';
import TabList from '../../atoms/TabList';
import { TaxCaclulatorWrapper } from './TaxCaclulator.styles';
import CalculationForm from '../CalculationForm';
import TaxDetails from '../TaxDetails';

const TaxCaclulator = (props) => {
  const [selected, setSelected] = useState(1);

  const renderTab = () => (selected === 1 ? <CalculationForm /> : <TaxDetails />);

  return (
    <TaxCaclulatorWrapper dir="column">
      <TabList selected={selected} onChange={setSelected} />
      {renderTab()}
    </TaxCaclulatorWrapper>
  );
};

export default TaxCaclulator;
