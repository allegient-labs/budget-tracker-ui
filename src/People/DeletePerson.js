import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const DeletePerson = () => (
  <Modal trigger={<Button color='red' icon="erase"></Button>} basic size='small'>
    <Header icon='warning' content='Are You Sure You Want To Delete User?' />
    <Modal.Content>
      <p>There is no undo</p>
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

export default DeletePerson