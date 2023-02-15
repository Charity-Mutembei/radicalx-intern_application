import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MainTitle from './MainTitle';

describe('MainTitle', () => {
  let props;
  let shallowMainTitle;
  let renderedMainTitle;
  let mountedMainTitle;

  const shallowTestComponent = () => {
    if (!shallowMainTitle) {
      shallowMainTitle = shallow(<MainTitle {...props} />);
    }
    return shallowMainTitle;
  };

  const renderTestComponent = () => {
    if (!renderedMainTitle) {
      renderedMainTitle = render(<MainTitle {...props} />);
    }
    return renderedMainTitle;
  };

  const mountTestComponent = () => {
    if (!mountedMainTitle) {
      mountedMainTitle = mount(<MainTitle {...props} />);
    }
    return mountedMainTitle;
  };  

  beforeEach(() => {
    props = {};
    shallowMainTitle = undefined;
    renderedMainTitle = undefined;
    mountedMainTitle = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
