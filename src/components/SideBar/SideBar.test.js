import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SideBar from './SideBar';

describe('SideBar', () => {
  let props;
  let shallowSideBar;
  let renderedSideBar;
  let mountedSideBar;

  const shallowTestComponent = () => {
    if (!shallowSideBar) {
      shallowSideBar = shallow(<SideBar {...props} />);
    }
    return shallowSideBar;
  };

  const renderTestComponent = () => {
    if (!renderedSideBar) {
      renderedSideBar = render(<SideBar {...props} />);
    }
    return renderedSideBar;
  };

  const mountTestComponent = () => {
    if (!mountedSideBar) {
      mountedSideBar = mount(<SideBar {...props} />);
    }
    return mountedSideBar;
  };  

  beforeEach(() => {
    props = {};
    shallowSideBar = undefined;
    renderedSideBar = undefined;
    mountedSideBar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
