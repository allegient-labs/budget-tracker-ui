// import React from 'react'
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'

// class CreatePerson extends React.Component {
//   constructor(){
//     super()
//     this.state={value:""}
//     this.handleChange=this.handleChange.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//   }

//   handleChange(evt){
//     this.setState({value:evt.target.value})
//   }

//   handleSubmit(evt){
//     evt.preventDefault()
//   }

//   render(){
//     return (
//       <Modal trigger={<Button color='green'>Add A Person</Button>} basic size='small'>
//         <Header icon='add circle' content='Create Person' />
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//               <h4>Name:</h4>
//               <input
//                 name="name"
//                 type="text"
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <h4>Email:</h4>
//               <input
//                 name="email"
//                 type="email"
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <h4>Password:</h4>
//               <input
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 required
//               />
//             </div>
//               <Button type="submit" color='green' inverted>
//                 <Icon name='checkmark' /> Submit
//               </Button>
//         </form>
//             <Modal.Actions>
//               <Button basic color='red' inverted>
//                 <Icon name='remove' /> Cancel
//               </Button>
//             </Modal.Actions>
//       </Modal>
//       )
//   }
// }

// export default CreatePerson




import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class CreatePerson extends React.Component {
  constructor(){
    super()
    this.state = { 
      modalOpen:false,
      name:""
     }

    this.handleOpen=this.handleOpen.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.changeHandler=this.changeHandler.bind(this)

  }

  handleOpen(){this.setState({ modalOpen: true })}

  handleClose(){this.setState({ modalOpen: false })}

  changeHandler(evt){
    this.setState({name:evt.target.value})
  }

  render(){
    return(
    <Modal trigger={<Button color='green' onClick={this.handleOpen}>Add A Person</Button>}         
      onClose={()=>this.setState({modalOpen:false})}
      open={this.state.modalOpen}
      basic size='small'>
      <Header icon='add circle' content='Add Person' />
      <Modal.Content>
      <Form>
        <label color="white">Name</label>
        <Form.Field>
          <input onChange={this.changeHandler} value={this.state.value} placeholder={"Insert Name"} />
        </Form.Field>
      </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.props.createF.bind(null, null, this.handleClose, {name:this.state.name})} type='submit' color='green' inverted>
          <Icon name='checkmark' /> Submit
        </Button>
        <Button onClick={this.handleClose} basic color='red' inverted>
          <Icon name='remove' /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

export default CreatePerson