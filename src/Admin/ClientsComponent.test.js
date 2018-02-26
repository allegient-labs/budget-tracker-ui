import React from 'react';
import ReactDOM from 'react-dom';
import ClientsComponent from './ClientsComponent';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';

import { shallow, configure, mount } from 'enzyme';

describe('<ClientsComponent />', () => {
  configure({ adapter: new Adapter() });

  it('<ClientsComponent> should render', () => {
    const wrapper = mount(
      <ClientsComponent match={{ params: { personId: 0 } }} />
    );
    expect(wrapper.props().match.params.personId).toEqual(0);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });
});
