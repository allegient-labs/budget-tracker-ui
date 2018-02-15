import React from 'react';
import ReactDOM from 'react-dom';
import SingleAssignmentComponent from './SingleAssignmentComponent';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';

import { shallow, configure, mount } from 'enzyme';

describe('<SingleAssignmentComponent />', () => {
  configure({ adapter: new Adapter() });

  it('<SingleAssignmentComponent> should render', () => {
    const wrapper = mount(
      <SingleAssignmentComponent match={{ params: { personId: 0 } }} />
    );
    expect(wrapper.props().match.params.personId).toEqual(0);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });
});
