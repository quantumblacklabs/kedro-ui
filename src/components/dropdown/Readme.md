A dropdown component with no selected options by default, and default unselected text.
A plain array of Menu Options will get wrapped inside a padded section automatically.
```
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

<div style={{ display: 'flex', flexDirection: 'column' }}>
    <Dropdown
        theme='light'
        onOpened={ null }
        onClosed={ null }
        onChanged={ null }
        width={ 170 }>
        <MenuOption primaryText='Menu Item One' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
    </Dropdown>
    <Dropdown
        theme='light'
        onOpened={ null }
        onClosed={ null }
        onChanged={ null }
        width={ 170 }>
        <MenuOption primaryText='Menu Item One' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
        <MenuOption primaryText='Menu Item Three' value={ 3 } />
        <MenuOption primaryText='Menu Item Four' value={ 4 } />
    </Dropdown>
</div>
```


Or you can define the single section yourself. You may want to do this if you also require a heading next to the options.
```
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

<Dropdown
    theme='light'
    onOpened={ null }
    onClosed={ null }
    onChanged={ null }
    width={ 170 }>
    <section>
        <span>Heading</span>
        <MenuOption primaryText='Menu Item One' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
    </section>
</Dropdown>
```


An initial selected menu option.
```
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

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
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';
import Button from 'components/button';

class Wrap extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div style={{ marginRight: '20px', display: 'inline-block' }}>
                    <Dropdown
                        theme='light'
                        ref={ dropdown => { this._dropdown = dropdown; } }>
                        <MenuOption primaryText='All' selected={ true } value={ null } />
                        <MenuOption primaryText='One' value={ 1 } />
                        <MenuOption primaryText='Two' value={ 2 } />
                    </Dropdown>
                </div>
                <div style={{ marginRight: '20px', display: 'inline-block' }}>
                    <Button size='small' onClick={ () => this._dropdown.open() }>Open</Button>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <Button size='small' onClick={ () => this._dropdown.close() }>Close</Button>
                </div>
            </div>
        );
    }
}

<Wrap />

```


Using sections and headings to group menu options.
```
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

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
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

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
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

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
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

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

Scrollable dropdown with many children
```
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';

<Dropdown width={ 200 } theme='light'>
    <MenuOption primaryText='Menu Item 1' value={ 1 } />
    <MenuOption primaryText='Menu Item 2' value={ 2 } />
    <MenuOption primaryText='Menu Item 3' value={ 3 } />
    <MenuOption primaryText='Menu Item 4' value={ 4 } />
    <MenuOption primaryText='Menu Item 5' value={ 5 } />
    <MenuOption primaryText='Menu Item 6' value={ 6 } />
    <MenuOption primaryText='Menu Item 7' value={ 7 } />
    <MenuOption primaryText='Menu Item 8' value={ 8 } />
    <MenuOption primaryText='Menu Item 9' value={ 9 } />
    <MenuOption primaryText='Menu Item 10' value={ 10 } />
    <MenuOption primaryText='Menu Item 11' value={ 11 } />
    <MenuOption primaryText='Menu Item 12' value={ 12 } />
    <MenuOption primaryText='Menu Item 13' value={ 13 } />
    <MenuOption primaryText='Menu Item 14' value={ 14 } />
    <MenuOption primaryText='Menu Item 15' value={ 15 } />
    <MenuOption primaryText='Menu Item 16' value={ 16 } />
    <MenuOption primaryText='Menu Item 17' value={ 17 } />
    <MenuOption primaryText='Menu Item 18' value={ 18 } />
    <MenuOption primaryText='Menu Item 19' value={ 19 } />
    <MenuOption primaryText='Menu Item 20' value={ 20 } />
    <MenuOption primaryText='Menu Item 21' value={ 21 } />
    <MenuOption primaryText='Menu Item 22' value={ 22 } />
    <MenuOption primaryText='Menu Item 23' value={ 23 } />
    <MenuOption primaryText='Menu Item 24' value={ 24 } />
    <MenuOption primaryText='Menu Item 25' value={ 25 } />
</Dropdown>
```
The selected option state will update when passing new child props, but should otherwise stay the same when updating other props.
Edit the text field below to see how the selected option changes when altering the child values, but stays the same when updating the width.
```
import Dropdown from 'components/dropdown';
import MenuOption from 'components/menu-option';
import Input from 'components/input';
import Slider from 'components/slider';

class DropdownStateTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'one,two,three',
            width: 320
        };
    }
    render() {
        return (
            <div>
                <Dropdown theme='light' width={this.state.width}>
                    {
                        this.state.text.split(',')
                        .filter(Boolean)
                        .map((d,i) => (
                            <MenuOption
                                key={d + i}
                                primaryText={d}
                                value={d}
                                selected={d  === 'two'} />
                        ))
                    }
                </Dropdown>
                <br />
                <br />
                <Input
                    theme='light'
                    value={this.state.text}
                    onChange={(e, { value }) => {
                        this.setState({
                            text: value
                        });
                    }} />
                <br />
                <Slider
                    label='Width'
                    min={200}
                    max={400}
                    onChange={(e, { max }) => {
                        this.setState({
                            width: max
                        });
                    }}
                    step={10}
                    theme='light'
                    value={this.state.width} />
            </div>
        );
    }
}
<DropdownStateTest />
```
