import React from 'react';
import ReactDOM from 'react-dom';
import UsersComponent from './UsersComponent';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import TestRenderer from 'react-test-renderer';
import { shallow, configure, mount } from 'enzyme';

jest.mock('axios', () => {
  const examplePersons = {
    data: {
      _embedded: {
        person: [
          {
            id: 6,
            name: 'Kyle Burns',
            _links: {
              self: {
                href: 'http://localhost:8080/persons/6'
              },
              person: {
                href: 'http://localhost:8080/persons/6'
              }
            }
          },
          {
            id: 7,
            name: 'Style Burns',
            _links: {
              self: {
                href: 'http://localhost:8080/persons/6'
              },
              person: {
                href: 'http://localhost:8080/persons/6'
              }
            }
          }
        ]
      },
      _links: {
        first: {
          href: 'http://localhost:8080/persons?page=0&size=20'
        },
        self: {
          href: 'http://localhost:8080/persons'
        },
        next: {
          href: 'http://localhost:8080/persons?page=1&size=20'
        },
        last: {
          href: 'http://localhost:8080/persons?page=1&size=20'
        },
        profile: {
          href: 'http://localhost:8080/profile/persons'
        }
      },
      page: {
        size: 20,
        totalElements: 25,
        totalPages: 1,
        number: 0
      }
    }
  };
  return {
    get: jest.fn(() => Promise.resolve(examplePersons))
  };
});
var axios = require('axios');
configure({ adapter: new Adapter() });

describe('<UsersComponent />', () => {
  it('fetch articles on #componentDidMount', () => {
    const component = shallow(<UsersComponent />);
    component.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/persons');
  });

  it('componentDidMount gets persons info from api and renders persons', () => {
    const component = shallow(<UsersComponent />);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/persons');
    setImmediate(() => {
      component.update();
      expect(component.find('.people').length).toEqual(2);
    });
  });
});
