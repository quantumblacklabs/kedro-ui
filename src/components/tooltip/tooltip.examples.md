## Tooltip Component Demos

Basic Tooltip component use
```
<Tooltip show={true} value='Hello World, Im a tooltip!' />
```

You can provide the Tooltip with a header, to break up the content
```
<Tooltip show={true} header='-- This is a header---' value='Hello World, Im a tooltip!' />
```

If you want the Tooltip to adhere to a certain width, you can pass a value down, this will also trigger an ellipsis if the content extends passed the bounds
```
<Tooltip show={true} width='200px' value='Hello World, Im a tooltip! And this is a very long piece of text that will be cut off' />
```

Using the Tooltip in conjunction with the HOC tooltip trigger, which allows you to compose a complex component - giving it tooltip displaying abilities.
```
const _ = require('lodash');
const TooltipTrigger = require('./tooltip-trigger').default;

const id = _.uniqueId();
class MyComponent extends React.Component {
  render() {
    return (
      <Dropdown {...this.props}>
        <MenuOption primaryText='Menu Item One' value={ 1 } />
        <MenuOption primaryText='Menu Item Two' value={ 2 } />
      </Dropdown>
    );
  }
}

const DropDownTTTrigger = TooltipTrigger(MyComponent);

<div>
  <DropDownTTTrigger
    theme='light'
    onOpened={ null }
    onClosed={ null }
    onChanged={ null }
    displayDirection='top'
    tooltipId={id}/>
  <Tooltip header='-- How to use menu' tooltipId={id} value='Click the main label, and select an item'/>
</div>
```

You can provide the wrapped component with a display direction for where you want the Tooltip to display from.
```
const _ = require('lodash');
const TooltipTrigger = require('./tooltip-trigger').default;

class MyComponent extends React.Component {
  render() {
    return <Icon {...this.props} />
  }
}

const id1 = _.uniqueId();
const id2 = _.uniqueId();
const id3 = _.uniqueId();
const IconTooltipTrigger = TooltipTrigger(MyComponent);

<div>
  <IconTooltipTrigger
    type='undo'
    size='xlarge'
    title=''
    theme='light'
    displayDirection='bottom'
    tooltipId={id1}/>
  <IconTooltipTrigger
    type='refresh'
    size='xlarge'
    title=''
    theme='light'
    displayDirection='top'
    tooltipId={id2}/>
  <IconTooltipTrigger
    type='paste'
    size='xlarge'
    title=''
    theme='light'
    displayDirection='right'
    tooltipId={id3}/>
  <Tooltip tooltipId={id1} value='Undo Action'/>
  <Tooltip tooltipId={id2} value='Refresh Page'/>
  <Tooltip tooltipId={id3} header='-This is an info header-' value='Refresh Page'/>
</div>
```
