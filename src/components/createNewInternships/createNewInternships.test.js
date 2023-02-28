import React from 'react';
import { shallow, render, mount } from 'enzyme';
import createNewInternships from './createNewInternships';

describe('createNewInternships', () => {
  let props;
  let shallowcreateNewInternships;
  let renderedcreateNewInternships;
  let mountedcreateNewInternships;

  const shallowTestComponent = () => {
    if (!shallowcreateNewInternships) {
      shallowcreateNewInternships = shallow(<createNewInternships {...props} />);
    }
    return shallowcreateNewInternships;
  };

  const renderTestComponent = () => {
    if (!renderedcreateNewInternships) {
      renderedcreateNewInternships = render(<createNewInternships {...props} />);
    }
    return renderedcreateNewInternships;
  };

  const mountTestComponent = () => {
    if (!mountedcreateNewInternships) {
      mountedcreateNewInternships = mount(<createNewInternships {...props} />);
    }
    return mountedcreateNewInternships;
  };  

  beforeEach(() => {
    props = {};
    shallowcreateNewInternships = undefined;
    renderedcreateNewInternships = undefined;
    mountedcreateNewInternships = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
