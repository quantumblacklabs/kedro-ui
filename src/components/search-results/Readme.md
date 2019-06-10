Search results component with dummy data:

```
import SearchResults from 'components/search-results';

const dummyData = [
        { icon: 'copy', label: 'Lorem ipsum dolor sit amet' },
        { icon: 'paste', label: 'Consetetur sadipscing elitr' },
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

<div style={{paddingBottom:'200px'}}>
    <SearchResults
        value=''
        hidden={false}
        results={dummyData}
        theme='light' />
</div>
```

Search results component with custom row element, a search term, and an active row:

```
import SearchResults from 'components/search-results';

const RowItem = ({ text }) => (
    <div style={{ display: 'flex' }}>
        🌧 { text } 🌍
    </div>
);

const dummyData = [
    { label: 'It\'s gonna take a lot to take me away from you' },
    { label: 'There\'s nothing that a hundred men or more could ever do' },
    { label: 'I bless the rains down in Africa' },
    { label: 'Gonna take some time to do the things we never had' },
];

<div className='africa' style={{paddingBottom:'200px'}}>
    <style>{`
        .africa .kui-search-results__row {
            padding-left: 20px;
        }
    `}</style>
    <SearchResults
        activeRow={2}
        hidden={false}
        results={dummyData}
        RowItem={RowItem}
        value='lor'
        theme='light' />
</div>
```
