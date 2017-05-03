Single-handler slider component with minimum and maximum number of properties

```
<section>
    <div style={{ margin: '0 0 50px 0' }}>
        <Slider theme='light' />
    </div>
    <div style={{ margin: '0 0 0 0' }}>
        <Slider
            label='Stepped'
            min={0}
            max={100}
            name='slider-step'
            onChange={(e, payload) => { console.log('slider updated', e, payload) }}
            step={20}
            tickStep={20}
            theme='light'
            type='single'
            value={40} />
    </div>
</section>
```

Single-handler slider component with different min and max range

```
<section>
    <Slider
        label='Range of values'
        min={100}
        max={300}
        name='slider-percentage'
        onChange={(e, payload) => { console.log('slider updated', e, payload) }}
        tickStep={50}
        theme='light'
        type='single'
        value={150} />
</section>
```

Multi-ranged slider component

```
<section>
    <div style={{ margin: '0 0 80px 0' }}>
        <Slider
            type='multiple'
            theme='light'
            value={[33, 66]}
            min={10}
            max={220}
            onChange={(e, payload) => { console.log('slider updated', e, payload) }} />
    </div>
    <div style={{ margin: '0 0 0 0' }}>
        <Slider
            type='multiple'
            theme='light'
            step={10}
            tickStep={10}
            min={0}
            max={50}
            label='Selected range of values' />
    </div>
</section>
```
