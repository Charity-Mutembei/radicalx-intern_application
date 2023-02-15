import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Internship from './Internship';

describe('Internship', () => {
  let props;
  let shallowInternship;
  let renderedInternship;
  let mountedInternship;

  const shallowTestComponent = () => {
    if (!shallowInternship) {
      shallowInternship = shallow(<Internship {...props} />);
    }
    return shallowInternship;
  };

  const renderTestComponent = () => {
    if (!renderedInternship) {
      renderedInternship = render(<Internship {...props} />);
    }
    return renderedInternship;
  };

  const mountTestComponent = () => {
    if (!mountedInternship) {
      mountedInternship = mount(<Internship {...props} />);
    }
    return mountedInternship;
  };  

  beforeEach(() => {
    props = {};
    shallowInternship = undefined;
    renderedInternship = undefined;
    mountedInternship = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
