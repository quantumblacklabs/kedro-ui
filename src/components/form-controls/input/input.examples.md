## Default Input component with minimum and maximum number of properties

```
<section style={{margin: '20px'}}>
    <Input />
    <br />
    <Input
        label='Label duh'
        disabled={false}
        label='Text input'
        onChange={console.log('Input changed')}
        placeholder='Input some text'
        status='success'
        statusDescription='Success!'
        theme='dark'
        value={undefined} />
    <br />
</section>
```

```
<section style={{margin: '20px'}}>
    <Input />
    <Input
        name='Something 1'
        placeholder='Type here 1'
        label='Label duh'/>
    <br />
    <Input
        name='Something 1'
        placeholder='Type here 1'/>
    <br />
    <Input
        name='Something 2'
        placeholder='Type here 2'
        theme='light'
        status='error'
        statusDescription='Something went wrong... Yeah, fix it.'/>
    <br />
    <Input
        name='Something 2'
        placeholder='Type here 2'
        theme='light'
        status='error'
        statusDescription='Something went wrong... Really wrong! Long message... APOCALYPSE!'/>
    <br />
    <Input
        name='Something 2'
        placeholder='Type here 2'
        theme='light'
        status='success'/>
    <br />
    <Input
        name='Something 2'
        placeholder='Type here 2'
        theme='light'
        status='success'
        statusDescription='Even success can have message! YAY!'/>
    <br />
    <Input
        name='Something 3'
        placeholder='Type here 3'
        disabled={true}/>
    <br />
    <Input
        name='Something 3'
        placeholder='Type here 3'
        disabled={true}
        label='Label on disabled'/>
</section>
```
