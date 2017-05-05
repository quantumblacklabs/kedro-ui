Simple, single line, notification

```
<div style={{ width: '500px' }}>
  <Notification type='inline' headerLabel='Hello World!' label='This is a notification'/>
</div>
```

You can change the display type to multiline if you want to break up the content

```
<div style={{ width: '500px' }}>
  <Notification icon='refresh' type='multiline' headerLabel='Hello World!' label='This is a notification, maybe it has much more content than a normal notification. This is a notification, maybe it has much more content than a normal notification. This is a notification, maybe it has much more content than a normal notification'/>
</div>
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
