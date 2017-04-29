Single-handler slider component with minimum and maximum number of properties

```
<section>
    <Slider type='single' theme='light' label='Range Input' value={34} />
</section>
```

Multi-ranged slider component with minimum and maximum number of properties

```
<section>
    <Slider type='multiple' theme='light' value={[0, 76]} />
    <br />
    <Slider type='multiple' theme='light' step={25} tickStep={25} label='Lable goes here' />
</section>
```
