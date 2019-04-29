Default Input component with minimum and maximum number of properties

```
<section style={{margin: '20px'}}>
    <Input theme='light' />
    <br />
    <Input
        disabled={false}
        label='Name'
        onChange={console.log('Input changed')}
        placeholder='Input text.. e.g. what color is grass?'
        status='success'
        statusDescription='Success!'
        theme='light'
        value='Grass can be green' />
    <br />
</section>
```

Disabled inputs
```
<section style={{margin: '20px'}}>
    <Input
        label='Company address'
        disabled={true}
        placeholder='Alternative address'
        theme='light' />
    <br />
    <Input
        label='P.O.Box'
        disabled={true}
        placeholder='Alternative address'
        theme='light' />
</section>
```

Labeled inputs

```
<section style={{margin: '20px'}}>
    <Input
        disabled={false}
        label='Name'
        theme='light'
        placeholder='Type some input in here...' />
    <br />
    <Input
        label='Name'
        placeholder='Input some text'
        status='success'
        statusDescription='Success!'
        theme='light'
        value='Grass can be green' />
</section>
```

Three different statuses of an input, default styling

```
<section style={{margin: '20px'}}>
    <Input
        placeholder='What is the biggest continent?'
        theme='light'
        status='default'/>
    <br />
    <Input
        placeholder='What is 3D representation of a square?'
        theme='light'
        status='default'
        statusDescription='Default status does not show descriptions.'/>
    <br />
    <Input
        label='Input with label and error status'
        placeholder='What shape does the Earth have?'
        theme='light'
        status='error'
        statusDescription='Something went wrong...'
        value='Earth is flat.'/>
    <br />
    <Input
        placeholder='How many corners does a circle have?'
        theme='light'
        status='error'
        statusDescription='Something went wrong... Long message: The next step is to open a reliable source and search for the circle to find our how many corners it actually has.'
        value='Circle has 4 corners.' />
    <br />
    <Input
        label='Input with label and success status'
        placeholder='Is the universe expanding?'
        theme='light'
        status='success'
        value='The universe is expanding.' />
    <br />
    <Input
        placeholder='Is light a wave or a particle?'
        theme='light'
        status='success'
        statusDescription='True!'
        value='Light is a wave and a particle.' />
</section>
```

First variant of input's status style

```
<section style={{margin: '20px'}}>
    <Input
        label='Input with label and error status'
        placeholder='What shape does the Earth have?'
        theme='light'
        status='error'
        statusDescription='Something went wrong...'
        value='Earth is flat.'
        variant={1} />
    <br />
    <Input
        placeholder='Is light a wave or a particle?'
        theme='light'
        status='success'
        statusDescription='True!'
        value='Light is a wave and a particle.'
        variant={1} />
</section>
```

Second variant of input's status style

```
<section style={{margin: '20px'}}>
    <Input
        label='Input with label and error status'
        placeholder='What shape does the Earth have?'
        theme='light'
        status='error'
        statusDescription='Something went wrong...'
        value='Earth is flat.'
        variant={2} />
    <br />
    <Input
        placeholder='Is light a wave or a particle?'
        theme='light'
        status='success'
        statusDescription='True!'
        value='Light is a wave and a particle.'
        variant={2} />
</section>
```

Set value externally
```
import Button from 'components/button';

class Test extends React.Component {
    constructor() {
        this.state = {
            value: 'Hi'
        };
    }

    onToggle() {
        this.setState({
            value: this.state.value === 'Hi' ? 'Hello' : 'Hi'
        })
    }

    render() {
        return (
            <section style={{margin: '20px'}}>
                <Input
                    label='Set value externally'
                    theme='light'
                    value={this.state.value}
                    variant={2} />
                <div style={{marginTop: '20px'}}>
                    <Button theme='light' onClick={this.onToggle.bind(this)}>Click</Button>
                </div>
            </section>
        )
    }
}

<Test/>

```

Example of a form with dummy validation
```
import Icon from 'components/icon';

const data = [
    {
        label: 'Name',
        placeholder: 'Enter you first names',
        status: 'error',
        statusDescription: 'Something went wrong... Correct the input.',
        key: 'input-1'
    },
    {
        label: 'Surname',
        placeholder: 'Enter you surnames',
        status: 'error',
        key: 'input-2'
    },    
    {
        label: 'Address',
        placeholder: 'Enter your street name',
        status: 'success',
        key: 'input-3'
    },
    {
        label: 'Postcode',
        placeholder: 'Enter your postcode',
        status: 'error',
        statusDescription: 'Something went wrong... Please make sure that your entered postcode is a correct UK postcode. If you do not live in the UK, please enter "N/A". Postcodes of other countries are not allowed to be entered here. Yeah, this is a long message. Quite long.',
        key: 'input-4'
    },
    {
        label: 'City',
        placeholder: 'Enter your city',
        status: 'success',
        statusDescription: 'You live on Earth, yay!',
        key: 'input-5'
    },
];

class Wrap extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          displayStatus: false
      };

      this._validate = this._validate.bind(this);
    }

    _validate() {
        this.setState({
            displayStatus: !this.state.displayStatus
        });
    }

    render() {
        return (
            <div>
                { data.map(d => (
                    <div key={d.key}>
                        <Input
                            label={d.label}
                            placeholder={d.placeholder}
                            status={this.state.displayStatus ? d.status : 'default'}
                            statusDescription={d.statusDescription}
                            theme='light' />
                        <br />
                    </div>
                ))}
                <Icon
                    type='tick'
                    size='large'
                    title='Validate'
                    color='rgb(0, 195, 41)'
                    onClick={this._validate} />
            </div>
        );
    }
}

<Wrap />
```
