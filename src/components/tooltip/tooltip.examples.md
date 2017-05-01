Basic Tooltip component use
```
<Tooltip show={true}>
  <span>Hello World, Im a tooltip!</span>
</Tooltip>
```

You can provide the Tooltip with a complex child structure to render
```
<Tooltip show={true}>
  <div>- Header -</div>
  <span>Hello World, Im a tooltip!</span>
  <ul>
    <li>- one</li>
    <li>- two</li>
    <li>- three</li>
  </ul>
</Tooltip>
```

If you want the Tooltip to adhere to a certain width, you can pass a value down, you can also specify whether or not you wish the text to wrap inside the tooltip
```
<Tooltip show={true} width='200px' wrapText={false}>
  <span>Hello World, Im a tooltip! And this is a very long piece of text that will be cut off!</span>
</Tooltip>
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
        <MenuOption primaryText='Menu Item One' value={1} />
        <MenuOption primaryText='Menu Item Two' value={2} />
      </Dropdown>
    );
  }
}

const DropDownTTTrigger = TooltipTrigger(MyComponent);

<div>
  <DropDownTTTrigger
    theme='light'
    onOpened={null}
    onClosed={null}
    onChanged={null}
    displayDirection='top'
    tooltipId={id}/>
  <Tooltip tooltipId={id} width='150px' show={true}>
    <div>-- How to use menu</div>
    <span>Click the main label, and select an item</span>
  </Tooltip>
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
  <Tooltip tooltipId={id1} show={true}>
    <span>Undo Action</span>
  </Tooltip>
  <Tooltip tooltipId={id2} show={true}>
    <span>Refresh Page</span>
  </Tooltip>
  <Tooltip tooltipId={id3} show={true}>
    <span>Copy Page</span>
  </Tooltip>
</div>
```
