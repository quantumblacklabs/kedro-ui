
## Dropdown Component

Default dropdown, with no selected options by default, and default unselected text.

```

debugCallback = () => {};

<Dropdown
    theme='light'
    onOpened={ debugCallback({ name: 'onOpened' }) }
    onClosed={ () => console.log('Closed') }
    onChanged={ debugCallback({ name: 'onChanged' }) }>
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
</Dropdown>
```
