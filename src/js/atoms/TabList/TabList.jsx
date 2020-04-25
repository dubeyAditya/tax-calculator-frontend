import React from 'react';
import PropTypes from 'prop-types';
import { TabListWrapper, Tab } from './TabList.styles';


const TabList = ({ selected, onChange }) => {
  const handleTabChange = (tab) => () => onChange(tab);

  return (
    <div className="TabListWrapper">
      <TabListWrapper>
        <Tab onClick={handleTabChange(1)} selected={selected === 1}>
          <span>Tax Calculator</span>
        </Tab>
        <Tab onClick={handleTabChange(2)} selected={selected === 2}>
          <span>History</span>
        </Tab>
      </TabListWrapper>
    </div>
  );
};

TabList.propTypes = {
  selected: PropTypes.number,
  onChange: PropTypes.func,
};

TabList.defaultProps = {
  selected: 0,
  onChange: () => { },
};

export default TabList;
