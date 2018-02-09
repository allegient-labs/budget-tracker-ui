import React, { Component } from "react";
import "./Practice.css";
import GenericCrudComponent from "../Utils/GenericCrudComponent";
import PracticeCard from "./PracticeCard";
import EditGenericCard from "./EditGenericCard";
import axios from "axios";

class PracticeComponent extends Component {
  componentDidMount() {
    axios({
      method: "put",
      url: "http://localhost:8080/projects/11/client",
      data: "http://localhost:8080/clients/1",
      headers: { "Content-Type": "text/uri-list" }
    }).then(client => {
      axios.get("http://localhost:8080/projects/10/client").then(client => {
        console.log(client.data);
      });
    });
  }

  render() {
    return (
      <div>
        <h1>PRACTICES</h1>
        <GenericCrudComponent
          thingName={"Practice"}
          URL_Ext={"practices"}
          inObjectExt={"practices"}
        >
          <PracticeCard />
          <EditGenericCard />
        </GenericCrudComponent>
      </div>
    );
  }
}

export default PracticeComponent;
