Simple notification

```
const _ = require('lodash');

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNotification: null
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      currentNotification: {
        header: _.uniqueId('Hello') + ':',
        label: _.uniqueId('This is some content '),
        type: ~~(Math.random()*2) ? 'inline' : 'multiline'
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click!</button>
        <NotificationList
        removeAfter={2000} currentNotification={this.state.currentNotification} />
      </div>
    );
  }
}

<Test />
```
