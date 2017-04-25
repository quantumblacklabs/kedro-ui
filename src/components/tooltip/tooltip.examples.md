## Tooltip Component Demos

Basic tooltip example, showing single line text display

```
<Tooltip value='Hello World, I am a Tooltip!'/>
```

You can provide the tooltip with an exact width, this will trigger an ellipsis
if the text extends passed that specified width.

```
<Tooltip
  value='Hello World, I am a Tooltip! And this is a long piece of text'
  width='200px' />
```

The tooltip component can also take a header property, this can be used to visually
separate the content contained inside the tooltip.

```
<Tooltip
  header='— Tooltip Header'
  value='Hello World, I am a Tooltip! And this is a long piece of text'
  width='200px' />
```
