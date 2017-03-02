
## Dropdown Component

Default dropdown, with no selected options by default, and default unselected text.

```
<Dropdown
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }
    onChanged={ e => console.log(e) }>
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
</Dropdown>

```

Default selected option

```
<Dropdown
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }
    onChanged={ e => console.log(e) }>
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
    <MenuOption primaryText='Menu Item Three' selected={ true } value={ 3 } />
</Dropdown>

```

Null first option

```
<Dropdown
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }
    onChanged={ e => console.log(e) }>
    <MenuOption primaryText='All' selected={ true } />
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
    <MenuOption primaryText='Menu Item Three' value={ 3 } />
</Dropdown>

```
