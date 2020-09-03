Search bar component, used (usually in addition with a results box) for user search.

```
import SearchBar from 'components/search-bar';

<SearchBar theme='light'/>
```

```
import SearchBar from 'components/search-bar';

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
import SearchBar from 'components/search-bar';
import Button from 'components/button';

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
        <SearchBar value={this.state.currentText} onChange={this.onChange} theme='light' />
        <div style={style}>Text From SearchBar: {this.state.currentText}</div>
        <Button size='small' theme='light' onClick={()=> { this.setState({currentText: 'something'}); }}>Set External Value</Button>
      </div>
    );
  }
}

<ChangeParent />
```

```
import SearchBar from 'components/search-bar';
import Button from 'components/button';

class FocusParent extends React.Component {
  constructor(props) {
    super(props);
    
    this.setFocused = this.setFocused.bind(this);
    this.focusTimeout = null;

    this.state = {
      isFocused: false
    };
  }

  setFocused(isFocused) {
    this.setState({ isFocused });
    clearTimeout(this.focusTimeout);

    if (isFocused) {
      this.focusTimeout = setTimeout(() => {
        this.setState({ isFocused: false });
      }, 5000);
    }
  }

  render() {
    const style = {
      color: 'grey',
      margin: '20px 0'
    };

    const isFocused = this.state.isFocused;
    const text = isFocused ? 'Blur in 5 seconds...' : 'Focus';

    return (
      <div>
        <SearchBar 
          theme='light' 
          focused={this.state.isFocused}
          onFocus={() => this.setFocused(true)} 
          onBlur={() => this.setFocused(false)}
        />
        <Button 
          size='small' 
          theme='light'
          disabled={this.state.isFocused}
          onClick={() => this.setFocused(true)}
        >{text}</Button>
        <Button 
          size='small' 
          theme='light' 
          onClick={() => this.setFocused(false)}
        >Blur</Button>
      </div>
    );
  }
}

<FocusParent />
```