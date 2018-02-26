import React from 'react';
import ReactDOM from 'react-dom';
import SingleClientComponent from './SingleClientComponent';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';

import { shallow, configure, mount } from 'enzyme';

describe('<SingleClientComponent />', () => {
  configure({ adapter: new Adapter() });

  it('<SingleClientComponent> should render', () => {
    const wrapper = mount(
      <SingleClientComponent match={{ params: { personId: 0 } }} />
    );
    expect(wrapper.props().match.params.personId).toEqual(0);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });
});
