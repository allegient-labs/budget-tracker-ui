import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
/**
 *This component enables the inclusion of certain modal properties by props and passes modal close handler to children
 *
 *props: thingName
 */
class EnhancedCreateModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    const thingName = this.props.thingName ? this.props.thingName : 'Item';
    const triggerButtonColor = 'green';
    const triggerButtonText = 'Add';
    const triggerButtonIcon = 'plus';
    const inModalText = 'Create ' + thingName;
    const inModalIcon = 'add circle';

    const children = this.props.children;
    return (
      <Modal
        trigger={
          <Button color={triggerButtonColor} onClick={this.handleOpen}>
            {triggerButtonIcon ? <Icon name={triggerButtonIcon} /> : null}
            {triggerButtonText}
          </Button>
        }
        onClose={this.handleClose}
        open={this.state.modalOpen}
        basic
        size="small"
      >
        <Header icon={inModalIcon} content={inModalText} />
        {children
          ? React.cloneElement(children, { handleClose: this.handleClose })
          : null}
        <Modal.Actions>
          <Button onClick={this.handleClose} basic color="red" inverted>
            <Icon name="close" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EnhancedCreateModal;
