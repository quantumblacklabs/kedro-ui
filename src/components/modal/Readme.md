Basic modal component, could be used for system messages with user confirmation

```
import Button from 'components/button';

/**
 * Basic Modal Trigger Example
 */
class ModalTrigger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  onTriggered() {
    this.setState({
      visible: true
    })
  }

  onClose() {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button theme='light' onClick={this.onTriggered.bind(this)}>Trigger Modal</Button>
        {
          this.state.visible &&
          <Modal
            theme='light'
            title='Warning!'
            message='Are you sure you want to delete the current item? You cannot undo this action.'
            buttonLabel='Confirm Deletion'
            onClose={this.onClose.bind(this)}
            visible={this.state.visible} />
        }
      </div>
    );
  }
}

<ModalTrigger />
```

Example showing how you can use custom modal content

```
import Button from 'components/button';
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

/**
 * Custom Modal Trigger Example
 */
class ModalTrigger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  onTriggered() {
    this.setState({
      visible: true
    })
  }

  onClose() {
    this.setState({
      visible: false
    })
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: '40px'
    };

    return (
      <div>
        <Button theme='light' onClick={this.onTriggered.bind(this)}>Trigger Modal</Button>
        {
          this.state.visible &&
          <Modal
            theme='light'
            title='Custom Modal'
            onClose={this.onClose.bind(this)}
            visible={this.state.visible}>
            <p style={{fontSize: '2rem', color: 'rgba(0, 0, 0, 0.55)', marginBottom: '40px'}}>Please select reason for deletion. We need to track this for auditing.</p>
            <Dropdown
                theme='light'
                onOpened={ null }
                onClosed={ null }
                onChanged={ null }
                width={ 170 }>
                <MenuOption primaryText='Redundant' value={ 1 } />
                <MenuOption primaryText='Duplicate' value={ 2 } />
                <MenuOption primaryText='Out of date' value={ 2 } />
            </Dropdown>
            <div style={containerStyle}>
              <div style={{marginRight: '20px'}}>
              <Button
                theme='light'
                onClick={this.onClose.bind(this)}
                size='small'
                type='secondary'>
                Cancel
              </Button>
              </div>
              <Button
                theme='light'
                onClick={this.onClose.bind(this)}
                size='small'>
                OK
              </Button>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

<ModalTrigger />
```
