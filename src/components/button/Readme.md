Regular buttons
```
<section>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light'>Hello world!</Button>
    </div>
    <div style={{ display: 'inline-block' }}>
        <Button theme='light' mode='secondary'>Hello world!</Button>
    </div>
</section>
```

Small buttons
```
<section>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light' size='small'>Hello world!</Button>
    </div>
    <div style={{ display: 'inline-block' }}>
        <Button theme='light' size='small' mode='secondary'>Hello world!</Button>
    </div>
</section>
```

Disabled buttons
```
<section>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light' disabled>Hello world!</Button>
    </div>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light' mode='secondary' disabled>Hello world!</Button>
    </div>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light' size='small' disabled>Hello world!</Button>
    </div>
    <div style={{ display: 'inline-block' }}>
        <Button theme='light' size='small' mode='secondary' disabled>Hello world!</Button>
    </div>
</section>
```

Button with Icon
```
import Icon from 'components/icon';

<section>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light'><Icon type='paste' size='small' theme='light' /> Hello world!</Button>
    </div>
    <div style={{ display: 'inline-block' }}>
        <Button theme='light' mode='secondary'>
            <Icon type='paste' size='small' theme='light' />
            <span>Hello world!</span>
        </Button>
    </div>
</section>
```

Button with 'wipe' hover effect
```
<section>
    <div style={{ marginRight: '12px', display: 'inline-block' }}>
        <Button theme='light' animation='wipe'>Hello world!</Button>
    </div>
    <div style={{ display: 'inline-block' }}>
        <Button theme='light' animation='wipe' mode='secondary'>Hello world!</Button>
    </div>
</section>
```
