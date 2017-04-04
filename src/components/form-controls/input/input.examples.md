## Default Input component with minimum and maximum number of properties

```
<section style={{margin: '20px'}}>
    <Input />
    <br />
    <Input
        disabled={false}
        label='Name'
        onChange={console.log('Input changed')}
        placeholder='Input text.. e.g. what color is grass?'
        status='success'
        statusDescription='Success!'
        theme='dark'
        value='Grass can be green' />
    <br />
</section>
```

## Disabled inputs
```
<section style={{margin: '20px'}}>
    <Input
        label='Company address'
        disabled={true}
        placeholder='Alternative address' />
    <br />
    <Input
        label='P.O.Box'
        disabled={true}
        placeholder='Alternative address' />
</section>
```

## Labeled inputs

```
<section style={{margin: '20px'}}>
    <Input
        disabled={false}
        label='Name'
        theme='dark'
        placeholder='Type some input in here...' />
    <br />
    <Input
        label='Name'
        placeholder='Input some text'
        status='success'
        statusDescription='Success!'
        theme='dark'
        value='Grass can be green' />
</section>
```

## Three different statuses of an input

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
