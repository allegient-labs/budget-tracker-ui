import React from 'react';
import ReactDOM from 'react-dom';
import SingleProjectComponent from './SingleProjectComponent';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';

import { shallow, configure, mount } from 'enzyme';

describe('<SingleProjectComponent />', () => {
  configure({ adapter: new Adapter() });

  it('<SingleProjectComponent> should render', () => {
    const wrapper = mount(
      <SingleProjectComponent match={{ params: { personId: 0 } }} />
    );
    expect(wrapper.props().match.params.personId).toEqual(0);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });
});
