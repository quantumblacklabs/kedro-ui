Simple notification

```
const _ = require('lodash');

class NotificationListDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNotification: null
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const icons = ['copy', 'refresh', 'search'];

    this.setState({
      currentNotification: {
        icon: icons[Math.floor(Math.random() * icons.length)],
        header: _.uniqueId('Hello') + ':',
        label: _.uniqueId('This is some content '),
        type: ~~(Math.random()*2) ? 'inline' : 'multiline'
      }
    })
  }

  render() {
    return (
      <div>
        <Button theme='light' animation='wipe' onClick={this.onClick}>
          Create New Persistent Notification
        </Button>
        <NotificationList
          theme='light'
          width='500px'
          currentNotification={this.state.currentNotification} />
      </div>
    );
  }
}

<NotificationListDemo />
```

```
const _ = require('lodash');

class NotificationListDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNotification: null
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const icons = ['copy', 'refresh', 'search'];

    this.setState({
      currentNotification: {
        icon: icons[Math.floor(Math.random() * icons.length)],
        header: _.uniqueId('Hello') + ':',
        label: _.uniqueId('This is some content '),
        type: ~~(Math.random()*2) ? 'inline' : 'multiline'
      }
    })
  }

  render() {
    return (
      <div>
        <Button theme='light' animation='wipe' onClick={this.onClick}>
          Create New Self Removing Notification
        </Button>
        <NotificationList
          theme='light'
          width='500px'
          removeAfter={2000}
          currentNotification={this.state.currentNotification} />
      </div>
    );
  }
}

<NotificationListDemo />
```
