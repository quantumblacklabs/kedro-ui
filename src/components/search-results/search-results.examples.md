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
        return (
            <div onKeyDown={e => this.onKeyDown(e.keyCode)}>
                <Input
                    aria={{
                        expanded: !hideResults,
                        activedescendant: hideResults ? null : 'cbn-searchresults-selected'
                    }}
                    onChange={e => this.onChange(e.target.value)}
                    placeholder='Search'
                    theme='light'
                    value={this.state.value} />
                <SearchResults
                    activeRow={activeRow}
                    hidden={hideResults}
                    onClick={value => this.onClick(value)}
                    onMouseOver={() => this.onMouseOver()}
                    results={results}
                    theme='light'
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
        { label: 'At vero eos et accusam et justo duo dolores et ea rebum' },
        { label: 'Vel, facere officia consectetur labore' },
        { label: 'Quaerat quo reprehenderit' },
        { label: 'Nisi ipsam totam optio illo' },
        { label: 'Delectus hic aspernatur corporis culpa' },
        { label: 'Placeat eveniet quod, illum' },
        { label: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' },
        { label: 'Laudantium, totam rem aperiam' },
        { label: 'Eaque ipsa quae ab illo inventore veritatis' },
        { label: 'Et quasi architecto beatae vitae dicta sunt explicabo' },
        { label: 'Nemo enim ipsam' },
        { label: 'Voluptatem quia voluptas sit aspernatur aut odit' },
        { label: 'Aut fugit, sed quia consequuntur magni dolores eos qui' },
        { label: 'Ratione voluptatem sequi nesciunt' },
        { label: 'Neque porro quisquam est, qui dolorem ipsum quia dolor' },
        { label: 'Sit amet, consectetur, adipisci velit, sed quia non numquam eius' },
        { label: 'Modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem' }
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
        theme='light'
        value='lor' />
</div>
```
