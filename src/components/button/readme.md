## A Button Component

A Primary Button
```
<section className='qb-demo' style={{ height: 100, padding: 10 }}>
    <Button
        data={ { test: 123 } }
        type='primary'
        size='medium'
        label='Primary Button'
        onTapped={ data => { console.log('Primary Button Tapped', data) } } />
</section>
```
