## SearchResults component demos

Search results component used alongside a search input:

```
class SearchBoxWithResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRow: null,
            hideResults: false,
            results: this.filterResults('Lor'),
            value: 'Lor'
        };
    }
    onChange(value) {
        this.setState({
            hideResults: !value,
            results: this.filterResults(value),
            value
        });
    }
    onClick(value) {
        this.setState({
            hideResults: true,
            value
        });
    }
    onMouseOver() {
        this.setState({
            activeRow: null
        })
    }
    filterResults(value) {
        const { results } = this.props;
        const valueRegex = value ? new RegExp(value, 'gi') : '';

        return results.filter(({ label }) => label.match(valueRegex));
    }
    onKeyDown(keyCode) {
        const { results } = this.state;
        const KEYS = {
            '38': -1,
            '40': 1
        };
        if (!(keyCode in KEYS)) {
            return;
        }
        const direction = KEYS[keyCode];
        let { activeRow } = this.state;
        if (activeRow === null) {
            activeRow = (direction > 0) ? 0 : results.length - 1;
        } else {
            activeRow += direction;
        }
        if (activeRow >= results.length || activeRow < 0) {
            activeRow = null;
        }
        this.setState({
            activeRow,
            value: results[activeRow] ? results[activeRow].label : this.state.value
        });
    }
    render() {
        const { activeRow, hideResults, results, value } = this.state;
        const inputStyles = {
            display: 'block',
            width: '320px',
            padding: '5px',
            fontSize: '20px'
        };
        return (
            <div>
                <input
                    onChange={e => this.onChange(e.target.value)}
                    onKeyDown={e => this.onKeyDown(e.keyCode)}
                    placeholder='Search'
                    style={inputStyles}
                    type='search'
                    value={this.state.value} />
                <SearchResults
                    activeRow={activeRow}
                    hidden={hideResults}
                    onClick={value => this.onClick(value)}
                    onMouseOver={() => this.onMouseOver()}
                    results={results}
                    value={value} />
            </div>
        );
    }
}

SearchBoxWithResults.defaultProps = {
    results: [
        { type: 'copy', label: 'Lorem ipsum dolor sit amet' },
        { type: 'paste', label: 'Consetetur sadipscing elitr' },
        { type: 'undo', label: 'Sed diam nonumy eirmod tempor' },
        { type: 'cut', label: 'Invidunt ut labore et dolore magna aliquyam erat' },
        { type: 'refresh', label: 'Sed diam voluptua' },
        { label: 'At vero eos et accusam et justo duo dolores et ea rebum' }
    ]
};

<SearchBoxWithResults />
```

Search results component on its own:

```
const dummyData = [
    { type: 'copy', label: 'Lorem ipsum dolor sit amet' },
    { type: 'paste', label: 'Consetetur sadipscing elitr' },
    { type: 'undo', label: 'Sed diam nonumy eirmod tempor' },
    { type: 'cut', label: 'Invidunt ut labore et dolore magna aliquyam erat' },
    { type: 'refresh', label: 'Sed diam voluptua' },
    { label: 'At vero eos et accusam et justo duo dolores et ea rebum' }
];
<div style={{paddingBottom:'200px'}}>
    <SearchResults
        activeRow={1}
        hidden={false}
        results={dummyData}
        value='lor' />
</div>
```
