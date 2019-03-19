Simple Event Indicator

```
import EventIndicator from 'components/event-indicator';

<div style={{ width: '80px', height: '80px' }}>
    <EventIndicator
        colorIndex={2}
        count={5}
        name='Indications'
        theme='light' />
</div>
```

Multiple Event Indicators

```
import EventIndicator from 'components/event-indicator';


<div style={{ width: '240px', height: '80px' }}>
    <EventIndicator
        colorIndex={0}
        count={5}
        name='onClicked'
        theme='light' />
    <EventIndicator
        colorIndex={1}
        count={8}
        name='onValueChanged'
        theme='light' />
    <EventIndicator
        colorIndex={2}
        count={2}
        name='onStateChanged'
        theme='light' />
</div>
```

Clickable Icon demonstrating event indicator updates (top right)
