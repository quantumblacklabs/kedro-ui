Search results component with dummy data:

```
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
const RowItem = ({ text }) => (
    <div style={{ display: 'flex' }}>
        ➡️ { text } ⬅️
    </div>
);

const dummyData = [
    { label: 'Lorem ipsum dolor sit amet' },
    { label: 'Consetetur sadipscing elitr' },
    { label: 'Sed diam nonumy eirmod tempor' },
    { label: 'Invidunt ut labore et dolore magna aliquyam erat' },
    { label: 'Sed diam voluptua' },
    { label: 'At vero eos et accusam et justo duo dolores et ea rebum' }
];

<div style={{paddingBottom:'200px'}}>
    <SearchResults
        activeRow={1}
        hidden={false}
        results={dummyData}
        RowItem={RowItem}
        value='lor'
        theme='light' />
</div>
```
