A basic toggle example
```
<Toggle />
```

A bold example with label
```
<section style={{ width: 150 }}>
    <Toggle label='Wifi' type='bold' value='off' />
</section>
```

A list of toggles (works only on dark theme)
```
const style = {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(255, 255, 255, 0.12)',
    paddingTop: 19,
    paddingBottom: 16
};
<section style={{ width: 250 }}>
    <div style={style}>
        <Toggle label='Wifi' type='bold' value='off' />
    </div>
    <div style={style}>
        <Toggle label='GPS' type='bold' value='on' />
    </div>
    <div style={style}>
        <Toggle label='4G' type='bold' value='on' />
    </div>
    <div style={style}>
        <Toggle label='Bluetooth' type='bold' value='off' />
    </div>
</section>
```
