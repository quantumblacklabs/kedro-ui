A dropdown component with no selected options by default, and default unselected text.
A plain array of Menu Options will get wrapped inside a padded section automatically.

```
<Dropdown
    theme='light'
    onOpened={ null }
    onClosed={ null }
    onChanged={ null }>
    <MenuOption primaryText='Menu Item One' value={ 1 } />
    <MenuOption primaryText='Menu Item Two' value={ 2 } />
</Dropdown>
```

Or you can define the single section yourself. You may want to do this if you also require a heading next to the options.
```
<Dropdown
    theme='light'
    onOpened={ null }
    onClosed={ null }
    onChanged={ null }>
    <section>
        <span>Heading</span>
        <MenuOption primaryText='Menu Item One' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
    </section>
</Dropdown>
```


An initial selected menu option.

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


Programmatic opening and closing of the Dropdown via `.open()` and `.close()` API methods.

```
class Wrap extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <Dropdown
                    theme='light'
                    ref='dropdown'>
                    <MenuOption primaryText='All' selected={ true } value={ null } />
                    <MenuOption primaryText='One' value={ 1 } />
                    <MenuOption primaryText='Two' value={ 2 } />
                </Dropdown>
                <button onClick={ () => this.refs.dropdown.open() }>Open</button>
                <button onClick={ () => this.refs.dropdown.close() }>Close</button>
            </div>
        );
    }
}

<Wrap />

```


Using sections and headings to group menu options.

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

A selected option within sections.
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
        <MenuOption primaryText='Menu Item Five' selected={ true } value={ 5 } />
    </section>
</Dropdown>
```


Icons within menu options.
```
<Dropdown
    onChanged={ e => console.log(e) }
    width={ 200 }
    theme='light'>
    <section>
        <span>Heading One</span>
        <MenuOption icon='paste' primaryText='Menu Item' value={ 1 } />
        <MenuOption icon='copy' primaryText='Menu Item Two' value={ 2 } />
        <MenuOption icon='refresh' primaryText='Menu Item Three' value={ 3 } />
    </section>
</Dropdown>
```


Icons within menu options, positioned on the left.
```
<Dropdown
    onChanged={ e => console.log(e) }
    width={ 200 }
    theme='light'>
    <section>
        <span>Heading One</span>
        <MenuOption iconPosition='left' icon='paste' primaryText='Menu Item' value={ 1 } />
        <MenuOption iconPosition='left' icon='copy' primaryText='Menu Item Two' value={ 2 } />
        <MenuOption iconPosition='left' icon='refresh' primaryText='Menu Item Three' value={ 3 } />
    </section>
</Dropdown>
```
