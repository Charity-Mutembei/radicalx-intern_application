import React from 'react';
import { shallow, render, mount } from 'enzyme';
import InternshipTable from './InternshipTable';

describe('InternshipTable', () => {
  let props;
  let shallowInternshipTable;
  let renderedInternshipTable;
  let mountedInternshipTable;

  const shallowTestComponent = () => {
    if (!shallowInternshipTable) {
      shallowInternshipTable = shallow(<InternshipTable {...props} />);
    }
    return shallowInternshipTable;
  };

  const renderTestComponent = () => {
    if (!renderedInternshipTable) {
      renderedInternshipTable = render(<InternshipTable {...props} />);
    }
    return renderedInternshipTable;
  };

  const mountTestComponent = () => {
    if (!mountedInternshipTable) {
      mountedInternshipTable = mount(<InternshipTable {...props} />);
    }
    return mountedInternshipTable;
  };  

  beforeEach(() => {
    props = {};
    shallowInternshipTable = undefined;
    renderedInternshipTable = undefined;
    mountedInternshipTable = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
