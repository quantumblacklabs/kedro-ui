## Use in Scatter Chart

```

const data = [
    { x: 0, y: 50, name: 'var 1' },
    { x: 40, y: 80, name: 'var 1' },
    { x: 80, y: 200, name: 'var 13' }
];

<section className='qb-demo-svg'>
    <ScatterChart width={ 900 } height={ 300 } 
        margin={ { top: 20, right: 5, bottom: 0, left: 5 } } 
        data={ data }
        fill='blanchedalmond'
        fillOpacity='0.2'
        stroke='blanchedalmond'
        strokeWidth='1'
        radius={ 20 } >
        <XAxis dataKey={ 'x' } axisLine={ false }  />
        <YAxis dataKey={ 'y' } axisLine={ false } />
        <Tooltip content={ (payload) => payload.name } />
    </ScatterChart>
</section>

```
