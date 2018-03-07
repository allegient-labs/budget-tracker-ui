import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../commonVars';
import { Button } from 'semantic-ui-react';
import history from '../history';
import EnhancedCreateModal from '../utils/EnhancedCreateModal';
import ProjectForm from '../utils/ProjectForm';
import { adalApiFetch, adalApiUpdate } from '../adalConfig';

class ProjectsComponent extends Component {
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

    this.createThing = this.createThing.bind(this);
    this.getThings = this.getThings.bind(this);
    this.showDeletes = this.showDeletes.bind(this);
    this.toPrevPage = this.toPrevPage.bind(this);
    this.toNextPage = this.toNextPage.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
    this.unselectPerson = this.unselectPerson.bind(this);
  }

  getThings(url) {
    adalApiFetch(axios.get, API_URL + '/projects', {}).then(things => {
      this.setState({
        totalPages: things.data.page.totalPages,
        currPageNo: things.data.page.number,
        things: things.data._embedded['project'],
        nextURL: things.data._links.next,
        prevURL: things.data._links.prev
      });
    });
  }

  componentDidMount() {
    this.getThings();
  }

  showDeletes() {
    if (this.state.deletesShown) {
      this.setState({ deletesShown: false });
    } else {
      this.setState({ deletesShown: true });
    }
  }

  toNextPage() {
    this.getThings(this.state.nextURL);
  }

  toPrevPage() {
    this.getThings(this.state.prevURL);
  }

  createThing(payload, selectedDropdownURI) {
    const nav_url = API_URL + '/projects';
    adalApiUpdate(axios.post, nav_url, payload, {})
      .then(res => {
        adalApiUpdate(
          axios.put,
          res.data._links.client.href,
          selectedDropdownURI,
          {
            headers: { 'Content-Type': 'text/uri-list' }
          }
        );
      })
      .then(() => {
        this.getThings();
      });
  }

  selectPerson(thing) {
    this.props.rerouteToSelectedProject(thing);
  }

  unselectPerson() {
    this.setState({ selectedPerson: {} });
  }

  render() {
    return (
      <div>
        <div className="thing">
          <h3>Select a Project</h3>
          <EnhancedCreateModal>
            <ProjectForm submitAction={this.createThing} />
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
                      <Button
                        color="blue"
                        icon="arrow circle right"
                        onClick={() => {
                          history.push('/admin/projects/' + thing.id);
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

export default ProjectsComponent;
