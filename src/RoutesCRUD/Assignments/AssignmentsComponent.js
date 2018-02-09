import React, { Component } from "react";
import "./Practice.css";
import GenericCrudComponent from "../Utils/GenericCrudComponent";
import AssignmentCard from "./AssignmentCard";
import EditGenericCard from "./EditGenericCard";

class AssignmentsComponent extends Component {
  render() {
    return (
      <div>
        <h1>ASSIGNMENTS</h1>
        <GenericCrudComponent
          thingName={"Assignment"}
          URL_Ext={"assignments"}
          inObjectExt={"assignments"}
        >
          <AssignmentCard />
          <EditGenericCard />
        </GenericCrudComponent>
      </div>
    );
  }
}

export default AssignmentsComponent;
