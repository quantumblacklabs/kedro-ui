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
    tabs={tabs}
    theme='light' />
```
Small tabs with a long text label
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
    tabs={tabs}
    theme='light' />
```
Tabs which toggle content on the page. Note the use of IDs with aria-labelledby and focus management to improve screen-reader accessibility.
```
class Wrap extends React.Component {
    constructor(props) {
        super(props);

        this.tabData = [
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

    _selectedTabChanged(e, { selectedIndex, href }) {
        this.setState({ selectedIndex }, () => {
            this.tabs.querySelector(href).focus();
        });
    }

    render() {
        const { selectedIndex } = this.state;

        return (
            <div ref={ el => { this.tabs = el; }}>
                <Tabs
                    onSelect={this._selectedTabChanged}
                    selectedIndex={selectedIndex}
                    size='small'
                    tabs={this.tabData}
                    theme='light' />
                {
                    this.tabData.map((tab, i) => (
                        <div
                            aria-labelledby={`tab-${tab.text.toLowerCase()}`}
                            hidden={selectedIndex !== i}
                            id={tab.text.toLowerCase()}
                            key={tab.text}
                            style={{
                                color: 'grey',
                                display: selectedIndex === i ? 'block' : 'none',
                                outline: 'none',
                                position: 'relative',
                                top: 40
                            }}
                            tabIndex='-1'>
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

Tabs as links to webpages. Opens Google in a new browser tab with target="_blank".
```
const tabs = [
    { text: 'Home', href: '/' },
    { text: 'Quantum Black', href: 'https://www.quantumblack.com/' },
    { text: 'Google', href: 'https://google.com', target: '_blank' }
];

<Tabs
    tabs={tabs}
    theme='light' />
```
