## Data summary used as a legend for status indication:
```
const _createCustomIcon = opt => {
    return <Satellite
        borderWidth={ opt.borderWidth }
        centreColor={ opt.centreColor }
        centreRadius={ opt.centreRadius }
        color={ opt.color }
        radius={ opt.radius }
        state={ opt.state }
        x={ opt.width / 2 }
        y={ opt.height / 2 }
    />;
};

const data = [
    {   id: 0,
        label: 'Dropped',          
        value: 0,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(229, 229, 229)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 1,
        label: 'Requires attention',
        value: 1,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(255, 25, 25)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 2,
        label: 'Potential issue',      
        value: 2,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(255, 159, 0)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 3,
        label: 'On track',      
        value: 1,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(38, 192, 34)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 4,
        label: 'Completed',        
        value: 0,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(0, 157, 249)', centreRadius: 1.5, radius: 8, state: 'normal' }
    }
];

<section className='qb-demo qb-demo--vcenter qb-demo--hcenter' style={{ height: '250px' }}>
    <section style={{ width: '300px'}}>
        <DataSummary
            data={ data }
            icon={ _createCustomIcon }
            heading={ 'Current Status' }
        />
    </section>
</section>
```

## Data summary used as a legend for status indication - highlighted row:
```
const _createCustomIcon = opt => {
    return <Satellite
        borderWidth={ opt.borderWidth }
        centreColor={ opt.centreColor }
        centreRadius={ opt.centreRadius }
        color={ opt.color }
        radius={ opt.radius }
        state={ opt.state }
        x={ opt.width / 2 }
        y={ opt.height / 2 }
    />;
};

const data = [
    {   id: 0,
        label: 'Dropped',          
        value: 0,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(229, 229, 229)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 1,
        label: 'Requires attention',
        value: 1,
        selected: true,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(255, 25, 25)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 2,
        label: 'Potential issue',      
        value: 2,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(255, 159, 0)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 3,
        label: 'On track',      
        value: 1,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(38, 192, 34)', centreRadius: 1.5, radius: 8, state: 'normal' }
    },
    {   id: 4,
        label: 'Completed',        
        value: 0,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 1, centreColor: 'rgb(229, 229, 229)', color: 'rgb(0, 157, 249)', centreRadius: 1.5, radius: 8, state: 'normal' }
    }
];

<section className='qb-demo qb-demo--vcenter qb-demo--hcenter' style={{ height: '250px' }}>
    <section style={{ width: '300px' }}>
        <DataSummary
            data={ data }
            icon={ _createCustomIcon }
            heading={ 'Current Status' }
            tappedPropName={ 'onClick' }
            onTapped={ (e) => { console.log('clicked', e) } }
        />
    </section>
</section>
```

## Data summary used as a legend for ingestion process:
```
const _createCustomIcon = opt => {
    return <Satellite
        borderWidth={ opt.borderWidth }
        centreColor={ opt.centreColor }
        centreRadius={ opt.centreRadius }
        color={ opt.color }
        radius={ opt.radius }
        state={ opt.state }
        x={ opt.width / 2 }
        y={ opt.height / 2 }
    />;
};

const data = [
    {   id: 0,
        label: '0. Not started',          
        value: 0,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 7, radius: 7, state: 'focused' }
    },
    {   id: 1,
        label: '1. Make initial contact',
        value: 1,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 6, radius: 7, state: 'focused' }
    },
    {   id: 2,
        label: '2. Acquire sample',      
        value: 2,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 5, radius: 7, state: 'focused' }
    },
    {   id: 3,
        label: '3. Agree strategy',      
        value: 1,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 3, radius: 7, state: 'focused' }
    },
    {   id: 4,
        label: '4. Extract data',        
        value: 0,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 2, radius: 7, state: 'focused' }
    },
    {   id: 5,
        label: '5. Transfer data',       
        value: 1,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 2, radius: 7, state: 'focused' }
    },
    {   id: 6,
        label: '6. Ingest data',         
        value: 0,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 1, radius: 7, state: 'focused' }
    },
    {   id: 7,
        label: '7. Validate data',       
        value: 0,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 0, centreColor: 'rgb(0, 117, 185)', color: 'rgb(34, 49, 69)', centreRadius: 0.5, radius: 7, state: 'focused' }
    },
    {   id: 8,
        label: '8. Completed',           
        value: 1,
        selected: false,
        iconProps: { width: 17, height: 17, borderWidth: 3, centreColor: 'rgb(34, 49, 69)', color: 'rgb(0, 117, 185)', centreRadius: 5, radius: 7, state: 'focused' }
    }
];

<section className='qb-demo qb-demo--vcenter qb-demo--hcenter' style={{ height: '400px' }}>
    <section style={{ width: '300px'}}>
        <DataSummary
            data={ data }
            icon={ _createCustomIcon }
            heading={ 'Ingestion Process' }
            tappedPropName={ 'onClick' }
            onTapped={ (e) => { console.log('clicked', e) } }
        />
    </section>
</section>
```
