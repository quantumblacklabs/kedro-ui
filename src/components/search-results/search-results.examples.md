## SearchResults component demos

Search results component, usually used alongside a search input.

```
class SearchBoxWithResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    onChange(value) {
        this.setState({
            value
        });
    }
    render() {
        const dummyData = [
            { type: 'copy', label: 'Lorem ipsum dolor sit amet' },
            { type: 'paste', label: 'Consetetur sadipscing elitr' },
            { type: 'undo', label: 'Sed diam nonumy eirmod tempor' },
            { type: 'cut', label: 'Invidunt ut labore et dolore magna aliquyam erat' },
            { type: 'refresh', label: 'Sed diam voluptua' },
            { label: 'At vero eos et accusam et justo duo dolores et ea rebum' }
        ];
        const inputStyles = {
            display: 'block',
            width: '320px',
            padding: '5px',
            fontSize: '20px'
        };
        return (
            <div>
                <input
                    type='search'
                    placeholder='Search'
                    style={inputStyles}
                    value={this.state.value}
                    onChange={e => this.onChange(e.target.value)} />
                <SearchResults
                    results={dummyData}
                    value={this.state.value} />
            </div>
        );
    }
}

<SearchBoxWithResults />
```
