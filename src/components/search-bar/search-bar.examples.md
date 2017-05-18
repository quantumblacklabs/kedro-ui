Search bar component, used (usually in addition with a results box) for user search.

```
<SearchBar theme='light'/>
```

```
const styleParent = {
  display: 'flex',
  flexDirection: 'column'
};

const styleChild = {
  marginBottom: '20px'
};

<div style={styleParent}>
  <div style={styleChild}>
    <SearchBar theme='light' iconType='copy'/>
  </div>
  <div style={styleChild}>
    <SearchBar theme='light' iconType='refresh'/>
  </div>
</div>
```

```
class ChangeParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    this.setState({
      currentText: text
    });
  }

  render() {
    const style = {
      color: 'grey',
      margin: '20px 0'
    };

    return (
      <div>
        <SearchBar value={this.state.currentText} onChange={this.onChange} theme='light' iconType='refresh'/>
        <div style={style}>Text From SearchBar: {this.state.currentText}</div>
        <Button size='small' theme='light' onClick={()=> { this.setState({currentText: 'something'}); }}>Set External Value</Button>
      </div>
    );
  }
}

<ChangeParent />
```
