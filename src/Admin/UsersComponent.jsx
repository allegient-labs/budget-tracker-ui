import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { API_URL } from '../commonVars';
import EnhancedCreateModal from '../utils/EnhancedCreateModal';
import PersonForm from '../utils/PersonForm';
import history from '../history';
import { adalApiFetch, adalApiUpdate } from '../adalConfig';

class UsersComponent extends Component {
  constructor() {
    super();
    this.state = {
      things: [],
      currPageNo: 0,
      totalPages: 0,
      isNext: false,
      nextURL: '',
      prevURL: '',
      modalOpen: false
    };

    this.createPerson = this.createPerson.bind(this);
    this.getThings = this.getThings.bind(this);
    this.toPrevPage = this.toPrevPage.bind(this);
    this.toNextPage = this.toNextPage.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
  }

  getThings(url) {
    const nav_url = url ? url.href : API_URL + '/persons';

    adalApiFetch(axios.get, nav_url, {}).then(things => {
      this.setState({
        totalPages: things.data.page.totalPages,
        currPageNo: things.data.page.number,
        things: things.data._embedded['person'],
        nextURL: things.data._links.next,
        prevURL: things.data._links.prev
      });
    });
  }

  componentDidMount() {
    this.getThings();
  }

  toNextPage() {
    this.getThings(this.state.nextURL);
  }

  toPrevPage() {
    this.getThings(this.state.prevURL);
  }

  createPerson(payload) {
    adalApiUpdate(axios.post, API_URL + '/persons', payload, {}).then(res => {
      this.getThings();
    });
  }

  selectPerson(thing) {
    this.props.rerouteToSelectedUser(thing);
  }

  unselectPerson() {
    this.setState({ selectedPerson: {} });
  }

  render() {
    return (
      <div>
        <div className="thing">
          <h3>Select a Person</h3>
          <EnhancedCreateModal>
            <PersonForm submitAction={this.createPerson} />
          </EnhancedCreateModal>
          {this.state.things.length ? (
            this.state.things.map((thing, i) => {
              return (
                <div className="thingCard" key={i}>
                  <div className="info">
                    <div className="people">
                      <div>{thing.name}</div>
                      <br />
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="buttons">
                      {this.state.deletesShown ? null : (
                        <Button
                          color="blue"
                          icon="arrow circle right"
                          onClick={() => {
                            history.push('./persons/' + thing.id);
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>Retrieving {this.props.thingName}...</h2>
          )}
          {!!this.state.nextURL ? (
            <Button onClick={this.toNextPage}>Next Page</Button>
          ) : null}
          {!!this.state.prevURL ? (
            <Button onClick={this.toPrevPage}>Previous Page</Button>
          ) : null}
          <h1>
            Page: {this.state.currPageNo + 1}/{this.state.totalPages}
          </h1>
        </div>
      </div>
    );
  }
}

export default UsersComponent;
