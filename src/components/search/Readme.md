Search component with working autocomplete:

```
const results = [
    { icon: 'copy', label: 'Lorem\\ ipsum dolor sit amet' },
    { icon: 'paste', label: 'Consetetur (sadipscing) elitr' },
    { icon: 'undo', label: 'Sed diam nonumy eirmod tempor' },
    { icon: 'cut', label: 'Invidunt ut labore et dolore magna aliquyam erat' },
    { icon: 'refresh', label: 'Sed diam voluptua' },
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
];

<Search
    results={results}
    theme='light'
    onSubmit={({ e, data }) => {
        console.log(data);
        e.preventDefault();
    }} />
```

Search component with custom row element, which is kept open by default:

```
import Button from 'components/button';

const RowItem = ({ text }) => (
    <div style={{ display: 'flex' }}>
        ➡️ { text } ⬅️
    </div>
);

const dummyData = Array.from(Array(30).keys()).map(i => ({
    label: `Lorem ipsum dolor sit amet ${i}` }
));

class SearchActiveRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentActiveRow: 1
        };
    }

    onGetNewRow() {
        this.setState({
            currentActiveRow: Math.floor(Math.random() * 30) + 1    
        });
    }

    render() {
        return (
            <div style={{paddingBottom:'200px'}}>
                <div style={{marginRight: '40px', marginBottom: '40px'}}>
                    <Button onClick={this.onGetNewRow.bind(this)} theme='light'>Change active row</Button>
                </div>
                <Search
                    activeRow={this.state.currentActiveRow}
                    showResults={true}
                    results={dummyData}
                    RowItem={RowItem}
                    searchResultsProps={{ onClick: console.log }}
                    theme='light'
                    value='lor' />
            </div>
        );
    }
}

<SearchActiveRow />
```
