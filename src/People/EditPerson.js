import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const EditPerson = (props) =>  (
  <Modal trigger={<Button color='teal'>Edit</Button>} basic size='small'>
    <Header icon='write' content='Edit User' />
    <Header content={props.user.name}/>
    <Modal.Content>
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default EditPerson