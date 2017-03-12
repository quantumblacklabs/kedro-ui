
## Dropdown Component

Default dropdown, with no selected options by default, and default unselected text.

```
<Dropdown
    theme='light'
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
    theme='light'
    onOpened={ () => console.log('Opened') }
    onClosed={ () => console.log('Closed') }
    onChanged={ e => console.log(e) }
    width={ 200 }>
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
    <MenuOption primaryText='Menu Item Three' selected={ true } value={ 3 } />
</Dropdown>

```

Null first option

```
<Dropdown
    theme='light'
    onChanged={ e => console.log(e) }
    width={ 200 }>
    <MenuOption primaryText='All' selected={ true } value={ null } />
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
    <MenuOption primaryText='Menu Item Three' value={ 3 } />
</Dropdown>

```

## Dropdown + Sections

Demo description

```
<Dropdown
    onChanged={ e => console.log(e) }
    theme='light'>
    <section>
        <MenuOption primaryText='Menu Item' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
    </section>
    <section>
        <MenuOption primaryText='Menu Three' value={ 3 } />
        <MenuOption primaryText='Menu Four' value={ 4 } />
    </section>
</Dropdown>
```

## Dropdown + Sections + Headings

Demo description

```
<Dropdown
    onChanged={ e => console.log(e) }
    width={ 200 }
    theme='light'>
    <section>
        <span>Heading One</span>
        <MenuOption primaryText='Menu Item' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
        <MenuOption primaryText='Menu Item Three' value={ 3 } />
    </section>
    <section>
        <span>Heading Two</span>
        <MenuOption primaryText='Menu Item Four' value={ 4 } />
        <MenuOption primaryText='Menu Item Five' value={ 5 } />
    </section>
</Dropdown>
```

```
<Dropdown
    onChanged={ e => console.log(e) }
    width={ 200 }
    theme='light'>
    <section>
        <span>Heading One</span>
        <MenuOption primaryText='Menu Item' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
        <MenuOption primaryText='Menu Item Three' value={ 3 } />
    </section>
    <section>
        <span>Heading Two</span>
        <MenuOption primaryText='Menu Item Four' value={ 4 } />
        <MenuOption primaryText='Menu Item Five' selected={ true }  value={ 5 } />
    </section>
</Dropdown>
```
