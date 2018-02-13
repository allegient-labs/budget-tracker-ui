import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import CreateButton from "./CreateButton";
import DeleteButton from "./DeleteButton";
import { API_URL } from "../../commonVars";

//needs thingName prop: string, needs URL_Ext:string, needs
class GenericCrudComponent extends Component {
  constructor() {
    super();
    this.state = {
      things: [],
      deletesShown: false,
      currPageNo: 0,
      totalPages: 0,
      isNext: false,
      nextURL: "",
      prevURL: "",
      modalOpen: false
    };
    this.deleteThing = this.deleteThing.bind(this);
    this.updateThing = this.updateThing.bind(this);
    this.createThing = this.createThing.bind(this);

    this.getThings = this.getThings.bind(this);

    this.showDeletes = this.showDeletes.bind(this);
    this.toPrevPage = this.toPrevPage.bind(this);
    this.toNextPage = this.toNextPage.bind(this);
  }

  getThings(url) {
    const nav_url = url ? url.href : API_URL + "/" + this.props.URL_Ext;

    axios.get(nav_url).then(things => {
      this.setState({
        totalPages: things.data.page.totalPages,
        currPageNo: things.data.page.number,
        things: things.data._embedded[this.props.inObjectExt],
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

  deleteThing(url, closeFunc) {
    axios.delete(url.href).then(res => {
      this.getThings();
    });
    closeFunc();
  }

  updateThing(url, closeFunc, payload) {
    axios.put(url.href, payload).then(res => {
      this.getThings();
    });
    closeFunc();
  }

  createThing(url, closeFunc, payload) {
    const nav_url = url ? url.href : API_URL + "/" + this.props.URL_Ext;

    axios.post(nav_url, payload).then(res => {
      this.getThings();
    });
    closeFunc();
  }

  render() {
    return (
      <div className="thing">
        <CreateButton
          thingName={this.props.thingName}
          createF={this.createThing}
        />
        <Button color="red" onClick={this.showDeletes}>
          Modify a {this.props.thingName}
        </Button>
        {this.state.things.length ? (
          this.state.things.map((thing, i) => {
            return (
              <div className="peopleCard" key={i}>
                <div className="info">
                  {this.props.children
                    ? React.cloneElement(this.props.children[0], {
                        thing: thing
                      })
                    : null}
                </div>
                <div className="buttons">
                  {this.state.deletesShown ? (
                    <div className="buttons">
                      {this.props.children
                        ? React.cloneElement(this.props.children[1], {
                            thingName: this.props.thingName,
                            thing: thing,
                            updateF: this.updateThing
                          })
                        : null}
                      <DeleteButton
                        thingName={this.props.thingName}
                        thing={thing}
                        deleteF={this.deleteThing}
                      />
                    </div>
                  ) : null}
                </div>
                <hr />
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
    );
  }
}

export default GenericCrudComponent;
