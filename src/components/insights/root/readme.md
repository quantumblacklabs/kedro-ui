### Basic root example

```
const width = 20;
const mainWidth = 500;
const mainHeight = 400;

<section style={ { height: `${ mainHeight }px` } }>
  <svg style={ { margin: '0 auto', display: 'block' } } width={ 1000 } height={ mainHeight }>
    <Root
        x={ 180 }
        y={ 180 }
        radius={ 150 }
        value={ 198 }
        label='Hypotheses' />
  </svg>
</section>
```

### Basic responsiveness

```
const width = 20;
const mainWidth = 500;
const mainHeight = 400;

<section style={ { height: `${ mainHeight }px` } }>
  <svg style={ { margin: '0 auto', display: 'block' } } width={ 1000 } height={ mainHeight }>
    <Root
        x={ 180 }
        y={ 180 }
        radius={ 100 }
        value={ 198 }
        label='Hypotheses' />
  </svg>
</section>
```

### Basic coloring

```
const width = 20;
const mainWidth = 500;
const mainHeight = 400;

<section style={ { height: `${ mainHeight }px` } }>
  <svg style={ { margin: '0 auto', display: 'block' } } width={ 1000 } height={ mainHeight }>
    <Root
        x={ 180 }
        y={ 180 }
        radius={ 100 }
        value={ 198 }
        colorMain='hotpink'
        colorSecondary='white'
        label='Hypotheses' />
  </svg>
</section>
```
