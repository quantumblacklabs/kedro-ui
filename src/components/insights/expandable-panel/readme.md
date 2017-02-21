## A basic expandable-panel demo (open)
```
<section className='qb-demo' style={ { background: "#FFFFFF", padding: '20px' } }>
  <ExpandablePanel isOpen={ true }>
    <span className='type--semibold'>
      Component Series A07
    </span>
  </ExpandablePanel>
</section>
```

## A basic expandable-panel demo (closed)
```
<section className='qb-demo' style={ { background: "#FFFFFF", padding: '20px' } }>
  <ExpandablePanel isOpen={ false }>
    <span className='type--semibold'>
      Component Series A07
    </span>
  </ExpandablePanel>
</section>
```

## An expandable-panel showing a potential parent interaction
```
const SectionView = React.createClass({
    getInitialState() {
      return {
        isOpen: true
      }
    },

    onClick() {
      this.setState({ isOpen: !this.state.isOpen});
    },

    render() {
      const style = { background: "#FFFFFF", padding: '20px' };
      const content = { background: "#FFFFFF", padding: '20px' };
      return <section className='qb-demo' { ...state } style={ style }>
               <div style={ { marginBottom: '10px' } }>
                 <Button
                    type='secondary'
                    size='medium'
                    label={ this.state.isOpen ? 'Close' : 'Open' }
                    onTapped={ () => { this.onClick() } } />
                </div>
                <ExpandablePanel
                    isOpen={ this.state.isOpen }
                    bgColor="rgb(208, 238, 255)"
                    borderColor="rgb(0, 157, 249)">
                  <span className='type--semibold'>
                    Component Series A07
                  </span>
                  <div className='content' style={ content }>
                    <span>Content piece one</span>
                  </div>
                </ExpandablePanel>
             </section>
    }
});

<SectionView></SectionView>
```
