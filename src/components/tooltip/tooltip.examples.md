## Tooltip Component Demos

```
const TooltipTrigger = require('./tooltip-trigger').default;

const toWrap = () => {
  return (
    <button>Show Tooltip</button>
  );
}

const Test = TooltipTrigger(toWrap);

<div>
  <Test eventType='onClick' tooltipId='2'/>
  <Tooltip tooltipId='2' value='Hello World, I am a Tooltip!'/>
</div>
```
