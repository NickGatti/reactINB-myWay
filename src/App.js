import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import Messages from './components/Messages'

class App extends Component {
  state = {
    toolbar: {
      "id": 1,
      "numberOfReadMessages": 0
    },
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  userReadMessage = (message) => {
    message.read = 'read'
    this.setState(this.state.messages.concat(message))
  }

  userStarredMessage = (message) => {
    message.starred = !message.starred
    this.setState(this.state.messages.concat(message))
  }

  userSelectedMessage = (message) => {
    message.selected = !message.selected
    this.setState(this.state.messages.concat(message))
  }

  selectedIndicator = () => {
    let amountSelected = this.state.messages.filter( message => {
      return message.selected
    } ).length

    let action = ''

    if (amountSelected === this.state.messages.length) {
      action = '-check'
    } else if (amountSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }

    return action
  }

  selectedIndicatorInteractionFunc = () => {
    let amountSelected = this.state.messages.filter( message => {
      return message.selected
    } ).length

    if (amountSelected === this.state.messages.length) {
      //uncheck all
      this.setState({
        messages: this.state.messages.map( message => {
          message.selected = false
          return message
        } )
      })
    } else {
      //check all
      this.setState({
        messages: this.state.messages.map( message => {
          message.selected = true
          return message
        } )
      })
    }
  }

  markAsReadButtonFunc = (action) => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    this.setState(this.state.messages.concat(selectedMessages.map( message => {
      message.read = action
      return message
    } )))
  }

  deleteMessageButtonFunc = () => {
    this.setState({
      messages: this.state.messages.filter( message => {
        return !message.selected
      } )
    })
  }

  applyLabelDropDownFunc = (apply, action) => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    if (apply) {
      this.setState(this.state.messages.concat( selectedMessages.map( message => {
        message.labels.push(action)
        return message
      }) ))
    } else {
      this.setState(this.state.messages.concat( selectedMessages.map( message => {
        message.labels.splice(action, 1)
        return message
      }) ))
    }
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          messages={this.state.messages}
          selectedIndicator={this.selectedIndicator}
          selectedIndicatorInteractionFunc={this.selectedIndicatorInteractionFunc}
          markAsReadButtonFunc={this.markAsReadButtonFunc}
          deleteMessageButtonFunc={this.deleteMessageButtonFunc}
          applyLabelDropDownFunc={this.applyLabelDropDownFunc}
        />
        <Messages
          messages={this.state.messages}
          userReadMessage={this.userReadMessage}
          userStarredMessage={this.userStarredMessage}
          userSelectedMessage={this.userSelectedMessage}
        />
      </div>
    );
  }
}

export default App;
