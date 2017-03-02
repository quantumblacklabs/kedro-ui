
## Default Dropdown

Demo description

```
<Dropdown
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }>
    <MenuItem primaryText='Menu Item One' onClick={ () => console.log('Menu item tapped') } />
    <MenuItem primaryText='Menu Item Two' />
</Dropdown>

```


## Narrow Dropdown + Icons

Demo description

```
<Dropdown defaultText='Edit' width={ 100 }>
    <MenuItem primaryText='Undo' icon='undo' iconPosition='left' />
    <MenuItem primaryText='Redo' icon='refresh' iconPosition='left' />
    <MenuItem primaryText='Cut' icon='cut' iconPosition='left' />
    <MenuItem primaryText='Copy' icon='copy' iconPosition='left' />
    <MenuItem primaryText='Paste' icon='paste' iconPosition='left' />
</Dropdown>
```

## Narrow Dropdown + Icons after

Demo description

```
<Dropdown defaultText='Edit' width={ 100 }>
    <MenuItem primaryText='Undo' icon='undo' />
    <MenuItem primaryText='Redo' icon='refresh' />
    <MenuItem primaryText='Cut' icon='cut' />
    <MenuItem primaryText='Copy' icon='copy' />
    <MenuItem primaryText='Paste' icon='paste' />
</Dropdown>
```

## Dropdown + Sections

Demo description

```
<Dropdown
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }>
    <section>
        <MenuItem primaryText='Menu Item' onClick={ () => console.log('Menu item tapped') } />
        <MenuItem primaryText='Menu Item Two' />
    </section>
    <section>
        <MenuItem primaryText='Menu Item' onClick={ () => console.log('Menu item tapped') } />
        <MenuItem primaryText='Menu Item Two' />
    </section>
</Dropdown>
```

## Dropdown + Sections + Headings

Demo description

```
<Dropdown>
    <section>
        <span>Heading One</span>
        <MenuItem primaryText='Menu Item' onClick={ () => console.log('Menu item tapped') } />
        <MenuItem primaryText='Menu Item Two' />
    </section>
    <section>
        <span>Heading Two</span>
        <MenuItem primaryText='Menu Item' onClick={ () => console.log('Menu item tapped') } />
        <MenuItem primaryText='Menu Item Two' />
    </section>
</Dropdown>
```
