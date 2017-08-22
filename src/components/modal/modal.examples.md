```
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
        <Button onClick={this.onTriggered.bind(this)}>Trigger Modal</Button>
        {
          this.state.visible &&
          <Modal
            title='System Message'
            message='This is a test, This is a test, This is a test, This is a test, This is a test.'
            buttonLabel='Confirm'
            onClose={this.onClose.bind(this)}
            visible={this.state.visible}
          />
        }
      </div>
    );
  }
}

<ModalTrigger />
```

```
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
        <Button onClick={this.onTriggered.bind(this)}>Trigger Modal</Button>
        {
          this.state.visible &&
          <Modal
            title='Custom Modal'
            onClose={this.onClose.bind(this)}
            visible={this.state.visible}
          >
            <span style={{color: 'hotpink', marginBottom: '40px'}}>This is a custom modal, with custom content</span>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '20px'}}><Button>one</Button></div>
              <Button>two</Button>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

<ModalTrigger />
```
