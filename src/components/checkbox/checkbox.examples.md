Checkbox examples
```
<section>
  <Checkbox
    label='Hello World'
    name='test-1'
    value={1}
    theme='light' />
  <Checkbox
    label='Hello World'
    disabled={true}
    name='test-2'
    value={1}
    theme='light' />
  <Checkbox
    label='Hello World'
    checked={true}
    name='test-3'
    value={1}
    theme='light' />
  <Checkbox
    label='Hello World'
    checked={true}
    disabled={true}
    name='test-4'
    value={1}
    theme='light' />
</section>
```
Toggle Checkbox programmatically
```
class Wrap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          checked: false
      }
    }

    _onChangeCheckbox(e, { checked }) {
        this.setState({ checked });
    }

    _toggleCheckbox() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div>
                <div style={{ marginRight: '20px', display: 'inline-block' }}>
                    <Checkbox
                        checked={this.state.checked}
                        label='Hello World'
                        name='toggle-test'
                        value={1}
                        theme='light'
                        onChange={this._onChangeCheckbox.bind(this)} />
                </div>
                <div style={{ marginRight: '20px', display: 'inline-block' }}>
                    <Button size='small' onClick={this._toggleCheckbox.bind(this)}>Toggle Checkbox</Button>
                </div>
            </div>
        );
    }
}

<Wrap />
```
