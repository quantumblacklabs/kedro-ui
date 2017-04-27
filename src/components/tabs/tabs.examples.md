A basic tabs example (dark)
```
const tabs = [
    'Overview',
    'Location (98)',
    'Sensors',
    'Log',
    'Related'
];

<Tabs
    tabs={tabs} />
```

```
const tabs = [
    'Overview',
    'Location (98)',
    'Sensors',
    'Log',
    'Related long long long long long long long'
];

<Tabs
    selectedIndex={1}
    size='small'
    tabs={tabs} />
```

```
class Wrap extends React.Component {
    constructor(props) {
        super(props);

        this.tabs = [
            'About',
            'Work',
            'Careers',
            'Resources'
        ];

        this.state = {
            selectedMenu: this.tabs[0]
        }

        this._selectedTabChanged = this._selectedTabChanged.bind(this);
    }

    _selectedTabChanged(index) {
        this.setState({ selectedMenu: this.tabs[index] });
    }

    render() {
        return (
            <div>
                <Tabs
                    onSelect={this._selectedTabChanged}
                    selectedIndex={0}
                    size='small'
                    tabs={this.tabs} />
                <span style={{position: 'relative', top: 40, color: 'rgb(255, 255, 255)'}}>Selected Menu: {this.state.selectedMenu}</span>
            </div>
        );
    }
}

<Wrap />
```
