import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { API_URL } from '../commonVars';
import history from '../history';
import { adalApiDelete, adalApiFetch, adalApiUpdate } from '../adalConfig';

class ClientsComponent extends Component {
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
    this.deleteThing = this.deleteThing.bind(this);
    this.updateThing = this.updateThing.bind(this);
    this.createThing = this.createThing.bind(this);
    this.getThings = this.getThings.bind(this);
    this.toPrevPage = this.toPrevPage.bind(this);
    this.toNextPage = this.toNextPage.bind(this);
  }

  getThings(url) {
    const nav_url = API_URL + '/clients';

    adalApiFetch(axios.get, nav_url, {}).then(things => {
      this.setState({
        totalPages: things.data.page.totalPages,
        currPageNo: things.data.page.number,
        things: things.data._embedded['clients'],
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

  deleteThing(url, closeFunc) {
    adalApiDelete(axios.del, url.href, {}).then(res => {
      this.getThings();
    });
    closeFunc();
  }

  updateThing(url, closeFunc, payload) {
    adalApiUpdate(axios.put, url.href, payload, {}).then(res => {
      this.getThings();
    });
    closeFunc();
  }

  createThing(url, closeFunc, payload) {
    const nav_url = url ? url.href : API_URL + '/clients';

    adalApiUpdate(axios.post, nav_url, payload, {}).then(res => {
      this.getThings();
    });
    closeFunc();
  }

  render() {
    return (
      <div>
        <div className="thing">
          <h3>Select a Client</h3>
          {this.state.things.length ? (
            this.state.things.map((thing, i) => {
              return (
                <div className="thingCard" key={i}>
                  <div className="info">
                    <div className="clients">
                      <div>{thing.name}</div>
                      <br />
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="buttons">
                      <Button
                        color="blue"
                        icon="arrow circle right"
                        onClick={() => {
                          history.push('./clients/' + thing.id);
                        }}
                      />
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

export default ClientsComponent;
