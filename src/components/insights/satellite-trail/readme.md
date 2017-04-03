*Note: the viewBox property of the demo SVGs below have been set to width and height = 100, so values passed in as props will be rendered based on this coordinate system.*

## Satellite Trails

```
<section className='qb-demo-svg'>
  <svg width={ 800 } height={ 500 } viewBox='0 0 100 100'>
    <SatelliteTrail 
      color='pink'
      dots={ 50 }
      endPos={ { x: 100, y: 10 } }
      firstDotRadius={ 0.5 }
      lastDotRadius={ 0.1 }
      startPos={ { x: 0, y: 10 } } />
    <SatelliteTrail 
      color='powderblue'
      dots={ 10 }
      endPos={ { x: 80, y: 40 } }
      firstDotRadius={ 1 }
      lastDotRadius={ 0.2 }
      startPos={ { x: 0, y: 40 } } />
    <SatelliteTrail 
      color='tomato'
      dots={ 4 }
      endPos={ { x: 50, y: 60 } }
      firstDotRadius={ 0.8 }
      lastDotRadius={ 4 }
      startPos={ { x: 0, y: 60 } } />
  </svg>
</section>
```

## With a border

```
<section className='qb-demo-svg'>
  <svg width={ 800 } height={ 100 } viewBox='0 0 100 100'>
    <SatelliteTrail 
      borderColor='white'
      borderWidth={ 5 }
      color='rgb(200,0,0)'
      dots={ 5 }
      endPos={ { x: 300, y: 30 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 30 }
      startPos={ { x: 0, y: 30 } } />
  </svg>
</section>
```

## Japanese Sea

```
<section style={{ height: '500px' }}>
  <svg width={ 1000 } height={ 500 } viewBox='0 0 100 100'>
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 2 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -120, y: 2 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 2 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -120, y: 2 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 2 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -120, y: 2 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 12 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -108, y: 12 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 12 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -108, y: 12 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 12 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -108, y: 12 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 22 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -120, y: 22 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 22 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -120, y: 22 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 22 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -120, y: 22 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 32 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -108, y: 32 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 32 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -108, y: 32 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 32 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -108, y: 32 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 42 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -120, y: 42 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 42 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -120, y: 42 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 42 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -120, y: 42 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 52 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -108, y: 52 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 52 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -108, y: 52 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 52 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -108, y: 52 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 62 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -120, y: 62 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 62 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -120, y: 62 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 62 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -120, y: 62 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 72 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -108, y: 72 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 72 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -108, y: 72 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 72 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -108, y: 72 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 82 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -120, y: 82 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 82 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -120, y: 82 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 82 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -120, y: 82 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 92 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -108, y: 92 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 92 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -108, y: 92 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 92 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -108, y: 92 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 102 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -120, y: 102 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 102 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -120, y: 102 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 102 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -120, y: 102 } } />

    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 112 } }
      firstDotRadius={ 10 }
      lastDotRadius={ 10 }
      startPos={ { x: -108, y: 112 } } />
    <SatelliteTrail 
      borderColor='rgb(50,64,143)'
      borderWidth={ 2 }
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 112 } }
      firstDotRadius={ 7 }
      lastDotRadius={ 7 }
      startPos={ { x: -108, y: 112 } } />
    <SatelliteTrail 
      borderWidth={ 1 }
      borderColor='rgb(50,64,143)'
      color='white'
      dots={ 44 }
      endPos={ { x: 780, y: 112 } }
      firstDotRadius={ 5 }
      lastDotRadius={ 5 }
      startPos={ { x: -108, y: 112 } } />
    
  </svg>
</section>
```

## Referencing a mask

```
<section className='qb-demo-svg'>
  <svg width={ 800 } height={ 400 } viewBox='0 0 100 100'>
    <SatelliteTrail 
      color='white'
      dots={ 3 }
      endPos={ { x: 120, y: 40 } }
      firstDotRadius={ 20 }
      lastDotRadius={ 20 }
      mask='mask-1'
      startPos={ { x: 0, y: 40 } } />
    <defs>
        <mask id='mask-1'>
            <rect x='-20' y='-20' width='160' height='100' fill='white' stroke='none' />
            <rect x='-20' y='0' width='160' height='1' fill='black' stroke='none' />
        </mask>
    </defs>
  </svg>
</section>
```
