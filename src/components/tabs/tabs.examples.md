A basic tabs example
```
const tabs = [
    { text: 'Overview' },
    { text: 'Location (98)' },
    { text: 'Sensors' },
    { text: 'Log' },
    { text: 'Related' }
];

<Tabs
    tabs={tabs} />
```

```
const tabs = [
    { text: 'Overview' },
    { text: 'Location (98)' },
    { text: 'Sensors' },
    { text: 'Log' },
    { text: 'Related long long long long long long long' }
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
            { text: 'About', href: '#about' },
            { text: 'Work', href: '#work' },
            { text: 'Careers', href: '#careers' },
            { text: 'Resources', href: '#resources' }
        ];

        this.state = {
            selectedIndex: 0
        };

        this._selectedTabChanged = this._selectedTabChanged.bind(this);
    }

    _selectedTabChanged(e, { selectedIndex }) {
        this.setState({ selectedIndex });
    }

    render() {
        const { selectedIndex } = this.state;

        return (
            <div>
                <Tabs
                    onSelect={this._selectedTabChanged}
                    selectedIndex={selectedIndex}
                    size='small'
                    tabs={this.tabs} />
                {
                    this.tabs.map((tab, i) => (
                        <div
                            aria-labelledby={`tab-{tab.text.toLowerCase()}`}
                            hidden={selectedIndex !== i}
                            id={tab.text.toLowerCase()}
                            key={tab.text}
                            style={{
                                color: 'rgb(255, 255, 255)',
                                display: selectedIndex === i ? 'block' : 'none',
                                position: 'relative',
                                top: 40
                            }}>
                            Selected Menu: { tab.text }
                        </div>
                    ))
                }
            </div>
        );
    }
}

<Wrap />
```
