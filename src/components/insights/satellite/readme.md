## An active and focused Satellite example with onClick, onHoverIn and onHoverOut event handlers:
```
<section className='qb-demo' style={{ height: '100px' }}>
    <svg width={ 400 } height={ 100 }>
        <Satellite
            active={ true }
            state='focused'
            data={ {id: 'marketing'} }
            onHoverIn={ data => { console.log('onHoverIn', data) } }
            onHoverOut={ data => { console.log('onHoverOut', data) } }
            onTapped={ data => { console.log('onTapped', data) } }
            radius={ 30 }
            color='rgb(38, 192, 33)'
            x={ 50 }
            y={ 40 } />
    </svg>
</section>
```

## Active and state: normal Satellite example:
```
<section className='qb-demo' style={{ height: '100px' }}>
    <svg width={ 400 } height={ 100 }>
        <Satellite
            active={ true }
            state='normal'
            x={ 50 }
            y={ 40 }
            radius={ 30 }
            color='red' />
    </svg>
</section>
```

## Active and blurred Satellite example:
```
<section className='qb-demo' style={{ height: '100px' }}>
    <svg width={ 400 } height={ 100 }>
        <Satellite
            active={ true }
            state='blurred'
            x={ 80 }
            y={ 50 }
            radius={ 45 }
            color='pink'
            centreColor='black' />
    </svg>
</section>
```

## Inactive and focused Satellite example:
```
<section className='qb-demo' style={{ height: '100px' }}>
    <svg width={ 400 } height={ 100 }>
        <Satellite
            active={ false }
            state='focused'
            radius={ 30 }
            color='rgb(38, 192, 33)'
            x={ 180 }
            y={ 50 }
            borderWidth={ 10 } />
    </svg>
</section>
```

## Inactive and state: normal Satellite example:
```
<section className='qb-demo' style={{ height: '100px' }}>
    <svg width={ 400 } height={ 100 }>
        <Satellite
            active={ false }
            state='normal'
            x={ 50 }
            y={ 40 }
            radius={ 30 }
            color='red' />
    </svg>
</section>
```

## Inactive and blurred Satellite example:
```
<section className='qb-demo' style={{ height: '100px' }}>
    <svg width={ 400 } height={ 100 }>
        <Satellite
            active={ false }
            state='blurred'
            x={ 50 }
            y={ 60 }
            radius={ 25 }
            color='bada55'
            centreRadius= { 10 } />
    </svg>
</section>
```
