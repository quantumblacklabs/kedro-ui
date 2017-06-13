A basic toggle example
```
<Toggle theme='light' />
```

A bold example with label
```
<section style={{ width: 150 }}>
    <Toggle label='Lift' texts={['UP', 'DOWN']} type='bold' value={false} theme='light' />
</section>
```

A disabled example
```
<section style={{ width: 200 }}>
    <Toggle label='Disabled' disabled={true} texts={['TRUE', 'FALSE']} theme='light' />
</section>
```

A list of toggles
```
const style = {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(255, 255, 255, 0.12)',
    paddingTop: 19,
    paddingBottom: 16
};
<section style={{ width: 250 }}>
    <div style={style}>
        <Toggle label='Wifi' type='bold' value={false} theme='light' />
    </div>
    <div style={style}>
        <Toggle label='GPS' type='bold' value={true} theme='light' />
    </div>
    <div style={style}>
        <Toggle label='4G' type='bold' value={true} theme='light' />
    </div>
    <div style={style}>
        <Toggle label='Bluetooth' type='bold' value={false} theme='light' />
    </div>
</section>
```

Programmatic opening and closing of the Dropdown via `.open()` and `.close()` API methods.
```
const style = {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(255, 255, 255, 0.12)',
    paddingTop: 19,
    paddingBottom: 16
};
class Wrap extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          status: true
      };

      this._handleButtonClick = this._handleButtonClick.bind(this);
    }

    _handleButtonClick() {
        this.setState({ status: !this.state.status });
    }

    render() {
        return (
            <section style={{ width: 250 }}>
                <div style={style}>
                    <Toggle label='Bluetooth' type='bold' value={this.state.status} theme='light' />
                </div>
                <div style={style}>
                    <Button size='small' onClick={ () => this._handleButtonClick() }>Change</Button>
                </div>
            </section>
        );
    }
}

<Wrap />

```
