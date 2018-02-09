import React from "react";
import { Button, Header, Icon, Modal, Form, Dropdown } from "semantic-ui-react";
/**
*This component enables the inclusion of certain modal properties by props and passes modal close handler to children
*
*props: submitAction
*/
class ProjectCard extends React.Component {
  constructor() {
    super();
    this.state = {selectedDropdownURI:""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler=this.changeHandler.bind(this)
  }

  handleSubmit(evt) {
    if(!this.props.submitAction){
      console.log("Required props: submitAction fn")
    }else{
      if(this.props.crudType==="delete"){
        console.log("delete not implemented")
      }else{
        this.props.submitAction({name:evt.target.name.value, description:evt.target.description.value, startDate:evt.target.startDate.value, endDate:evt.target.endDate.value}, this.state.selectedDropdownURI)
        this.props.handleClose()
      }
    }
  }

  changeHandler(evt, selection) {
    this.setState({ selectedDropdownURI: selection.value });
  }

  render() {
    const thing = this.props.thing && this.props.thing.name?this.props.thing:{name:"", description:"", startDate:"", endDate:""}
    return (
      <Modal.Content>
        {this.props.crudType==="delete"?
        <Button color="red" onClick={this.handleSubmit}>Delete</Button>
        :<Form onSubmit={this.handleSubmit}>
          <label color="white">Name</label>
          <Form.Field>
            <Form.Input
              name="name"
              defaultValue={thing.name}
              placeholder={"Name"}
              required
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="description"
              defaultValue={thing.description}              
              placeholder={"Description"}
              required
            />
          </Form.Field>          
          <Form.Field>
            <input
            name="startDate"
            defaultValue={thing.startDate}            
            placeholder={"Start Date"}
            required
            />
          </Form.Field>
          <Form.Field>
            <input
            name="endDate"
            defaultValue={thing.endDate}                        
            placeholder={"End Date"}
            required
            />
          </Form.Field>          
          <Form.Field>
            <Dropdown
              placeholder={this.props.linkedClient.name}
              fluid
              search
              selection
              name="client"
              onChange={this.changeHandler}
              options={this.props.clientsDropDown}
            />
          </Form.Field>          
          <br/>
          <Form.Button
            type="submit"
            color="green"
            inverted
          >
            <Icon name="checkmark" /> Submit
          </Form.Button>
        </Form>}
      </Modal.Content>
    );
  }
}

export default ProjectCard;