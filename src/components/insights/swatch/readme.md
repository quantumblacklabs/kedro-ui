## Default swatch with color
```
<section className='qb-demo qb-demo--light qb-demo--vcenter qb-demo--hcenter'>
  <Swatch color='red'   title='problem' />
  <Swatch color='green' title='ok' />
</section>
```

## Custom size swatches, custom margin
```
<section className='qb-demo qb-demo--light qb-demo--vcenter qb-demo--hcenter'>
  <Swatch size={ 16 } margin={ 1 }  color='rgb(0, 157, 249)' />
  <Swatch size={ 24 } margin={ 5 }  color='rgb(0, 157, 249)' />
  <Swatch size={ 36 } margin={ 10 } color='rgb(255, 0, 222)' />
  <Swatch size={ 24 } margin={ 5 }  color='rgb(255, 0, 222)' />
  <Swatch size={ 16 } margin={ 1 }  color='rgb(0, 157, 249)' />
</section>
```

## With labels
```
<section className='qb-demo qb-demo--light qb-demo--vcenter qb-demo--hcenter'>
  <Swatch color='lightGrey' label='2' />
  <Swatch color='green'     label='4' />
  <Swatch color='lightGrey' label='0' />
  <Swatch color='lightGrey' label='0' />
  <Swatch color='lightGrey' label='1' />
</section>
```

## With labels, positioned at the top, left, bottom, right
```
const narrowGroupStyle = { width: '34px', display: 'inline-block' };
const normalGroupStyle = { width: '50px', display: 'inline-block' };
const wideGroupStyle = { width: '100%', display: 'inline-block' };
const wrapperStyle = { width: '25%' };

<section className='qb-demo qb-demo--light qb-demo--vcenter qb-demo--hcenter'>
  <div style={
      { ...wrapperStyle, marginLeft: '10%' }
      }>
      <div style={ narrowGroupStyle }>
        <Swatch
            color='chocolate'
            label='12'
            labelPosition='top' />
      </div>
      <div style={ narrowGroupStyle }>
        <Swatch
            color='chocolate'
            label='14'
            labelPosition='top' />
      </div>
  </div>
  <div style={ wrapperStyle }>
    <div style={ normalGroupStyle }>
      <Swatch
        color='royalblue'
        label='A'   
        labelPosition='right' />
    </div>
    <div style={ normalGroupStyle }>
      <Swatch
        color='tomato'
        label='B'
        labelPosition='right' />
    </div>
  </div>
  <div style={ wrapperStyle }>
    <div style={ narrowGroupStyle }>
      <Swatch
        color='crimson'
        label='2'
        labelPosition='bottom' />
    </div>
    <div style={ narrowGroupStyle }>
      <Swatch
        color='lightgrey'
        label='0'
        labelPosition='bottom' />
    </div>
  </div>
  <div style={ wrapperStyle }>
    <div style={ wideGroupStyle }>
      <Swatch
        color='cornflowerblue'
        label='Cornflowerblue'
        labelPosition='left' />
    </div>
    <div style={ wideGroupStyle }>
      <Swatch
        color='fuchsia'
        label='Fuchsia'
        labelPosition='left' />
    </div>
  </div>
</section>
```

## Tapped event handling (console.logs)
```
<section className='qb-demo qb-demo--light qb-demo--vcenter qb-demo--hcenter'>
  <Swatch color='green' data={ { id: 123 } } title='click me' onTapped={ data => console.log('tapped', data) } />
</section>
```
