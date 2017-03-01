
## Default Dropdown

Demo description

```
<Dropdown
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }>
    <MenuItem primaryText='Menu Item' onClick={ () => console.log('Menu item tapped') } />
    <MenuItem primaryText='Menu Item gdsgds ds gsd' />
</Dropdown>

```


## Narrow Dropdown + Icons

Demo description

```
<Dropdown defaultText='Edit' width={ 100 }>
    <MenuItem primaryText='Undo' />
    <MenuItem primaryText='Redo' />
    <MenuItem primaryText='Cut' />
    <MenuItem primaryText='Copy' />
    <MenuItem primaryText='Paste' />
</Dropdown>
```

## Narrow Dropdown + Icons after

Demo description

```
<Dropdown defaultText='Edit' width={ 100 }>
    <MenuItem primaryText='Undo' />
    <MenuItem primaryText='Redo' />
    <MenuItem primaryText='Cut' />
    <MenuItem primaryText='Copy' />
    <MenuItem primaryText='Paste' />
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
        <MenuItem primaryText='Menu Item gdsgds ds gsd' />
    </section>
    <section>
        <MenuItem primaryText='Menu Item' onClick={ () => console.log('Menu item tapped') } />
        <MenuItem primaryText='Menu Item gdsgds ds gsd' />
    </section>
</Dropdown>
```

## Dropdown + Sections + Headings

Demo description

```
<Dropdown>
    <MenuItem primaryText='Menu Item' />
    <MenuItem primaryText='Menu Item' />
</Dropdown>
```
