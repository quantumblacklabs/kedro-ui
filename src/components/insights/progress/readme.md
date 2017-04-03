## Eight step progress:
```
<section className='qb-demo qb-demo--vcenter qb-demo--hcenter' style={{ height: '250px' }}>
    <Progress
        activeStage={ 2 }
        height={ 250 }
        stages={ 8 }
        width={ 500 }
    />
</section>
```

## Two step progress:
```
<section className='qb-demo qb-demo--vcenter qb-demo--hcenter'  style={{ height: '250px' }}>
    <Progress
        activeStage={ 1 }
        activeColor='rgb(200, 190, 30)'
        activeTrailColor='rgb(200, 190, 30)'
        activeRadius={ 60 }
        color='rgb(100, 100, 200)'
        height={ 200 }
        radius={ 20 }
        radiusBorderWidth={ 10 }
        stages={ 2 }
        trailColor='rgb(100, 100, 200)'
        width={ 400 }
    />
</section>
```

## Simple circles without lines and satellite:
```
<section className='qb-demo qb-demo--vcenter qb-demo--hcenter'  style={{ height: '250px' }}>
    <Progress
        activeStage={ 4 }
        activeColor='rgb(100, 250, 30)'
        activeTrailColor='rgba(0, 0, 0, 0)'
        activeRadius={ 0 }
        color='rgb(100, 250, 30)'
        height={ 200 }
        radius={ 20 }
        stages={ 10 }
        trailColor='rgba(0, 0, 0, 0)'
        width={ 400 }
    />
</section>
```

## No space and no lines between stages:
```
<section className='qb-demo qb-demo--vcenter qb-demo--hcenter'  style={{ height: '250px' }}>
    <Progress
        activeStage={ 3 }
        activeColor='rgb(200, 190, 30)'
        activeTrailColor='rgb(200, 190, 30)'
        activeRadius={ 60 }
        color='rgb(200, 190, 30)'
        height={ 200 }
        radius={ 71 }
        stages={ 6 }
        trailColor='rgba(0, 0, 0, 0)'
        width={ 500 }
    />
</section>
```

## F1 progress status:
```
const rowStyle = { color: 'white', width: '400px', margin: '10px', display: 'flex', justifyContent: 'space-between' };
const nameStyle = { width: '200px' };
const lapStyle = { width: '80px', textAlign: 'right' };
const tyreGroupStyle = { width: '120px', align: 'left', paddingLeft: '25px' };

<section className='qb-demo qb-demo--vcenter qb-demo--hcenter' style={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
    <span style={{ width: '400px', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '18px' }}>Formula 1 Belgian Grand Prix</span>
        <span style={{ fontSize: '12px' }}>16th lap of 44</span>
    </span>
    <Progress
        stages={ 44 }
        activeStage={ 16 }
        activeRadius={ 6 }
        activeColor='rgb(220, 50, 50)'
        activeTrailColor='rgba(0, 0, 0, 0)'
        activeRadiusBorderWidth={ 1 }
        color='rgb(255, 255, 255)'
        trailColor='rgba(0, 0, 0, 0)'
        height={ 70 }
        width={ 415 }
    />
    <div style={ rowStyle }>
        <span style={ nameStyle }>DRIVER</span>
        <span style={ lapStyle }>LAP TIME</span>
        <span style={ tyreGroupStyle }>TYRE STRATEGY</span>
    </div>
    <div style={ rowStyle }>
        <span style={ nameStyle }>1. LEWIS HAMILTON</span>
        <span style={ lapStyle }>1:29.546</span>
        <div style={ tyreGroupStyle }>
            <svg width={ 100 } height={ 20 }>
                <Pair
                    animated={ false }
                    highlightColor='rgb(42, 155, 55)'
                    leftLabelBackground='rgb(42, 155, 55)'
                    leftLabel='I'
                    rightLabel=''
                    width={ 20 }
                    x={ 0 }
                    y={ 0 }/>
                <Pair
                    animated={ false }
                    highlightColor='rgb(200, 155, 15)'
                    leftLabelBackground='rgb(200, 155, 15)'
                    leftLabel='S'
                    rightLabel=''
                    width={ 20 }
                    x={ 24 }
                    y={ 0 }/>
                <Pair
                    animated={ false }
                    highlightColor='rgb(200, 155, 15)'
                    leftLabelBackground='rgb(200, 155, 15)'
                    leftLabel='S'
                    rightLabel=''
                    width={ 20 }
                    x={ 48 }
                    y={ 0 }/>
            </svg>
        </div>
    </div>
    <div style={ rowStyle }>
        <span style={ nameStyle }>2. SEBASTIAN VETTEL</span>
        <span style={ lapStyle }>+0.421</span>
        <div style={ tyreGroupStyle }>
            <svg width={ 100 } height={ 20 }>
                <Pair
                    animated={ false }
                    highlightColor='rgb(42, 155, 55)'
                    leftLabelBackground='rgb(42, 155, 55)'
                    leftLabel='I'
                    rightLabel=''
                    width={ 20 }
                    x={ 0 }
                    y={ 0 }/>
                <Pair
                    animated={ false }
                    highlightColor='rgb(200, 155, 15)'
                    leftLabelBackground='rgb(200, 155, 15)'
                    leftLabel='S'
                    rightLabel=''
                    width={ 20 }
                    x={ 24 }
                    y={ 0 }/>
                <Pair
                    animated={ false }
                    highlightColor='rgb(40, 100, 205)'
                    leftLabelBackground='rgb(40, 100, 205)'
                    leftLabel='W'
                    rightLabel=''
                    width={ 20 }
                    x={ 48 }
                    y={ 0 }/>
            </svg>
        </div>
    </div>
    <div style={ rowStyle }>
        <span style={ nameStyle }>3. NICO ROSBERG</span>
        <span style={ lapStyle }>+1.150</span>
        <div style={ tyreGroupStyle }>
            <svg width={ 100 } height={ 20 }>
                <Pair
                    animated={ false }
                    highlightColor='rgb(42, 155, 55)'
                    leftLabelBackground='rgb(42, 155, 55)'
                    leftLabel='I'
                    rightLabel=''
                    width={ 20 }
                    x={ 0 }
                    y={ 0 }/>
                <Pair
                    animated={ false }
                    highlightColor='rgb(200, 155, 15)'
                    leftLabelBackground='rgb(200, 155, 15)'
                    leftLabel='S'
                    rightLabel=''
                    width={ 20 }
                    x={ 24 }
                    y={ 0 }/>
            </svg>
        </div>
    </div>
    <div style={ rowStyle }>
        <span style={ nameStyle }>4. FERNANDO ALONSO</span>
        <span style={ lapStyle }>+1.605</span>
        <div style={ tyreGroupStyle }>
            <svg width={ 100 } height={ 20 }>
                <Pair
                    animated={ false }
                    highlightColor='rgb(40, 100, 205)'
                    leftLabelBackground='rgb(40, 100, 205)'
                    leftLabel='W'
                    rightLabel=''
                    width={ 20 }
                    x={ 0 }
                    y={ 0 }/>
                <Pair
                    animated={ false }
                    highlightColor='rgb(200, 155, 15)'
                    leftLabelBackground='rgb(200, 155, 15)'
                    leftLabel='S'
                    rightLabel=''
                    width={ 20 }
                    x={ 24 }
                    y={ 0 }/>
            </svg>
        </div>
    </div>
</section>
```
