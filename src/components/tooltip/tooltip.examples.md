## Tooltip Component Demos

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
  <Tooltip tooltipId={id3} value='Refresh Page'/>
</div>
```
