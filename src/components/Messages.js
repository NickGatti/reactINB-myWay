import React, { Component } from 'react'

import Message from './Message'

class Messages extends Component {

render() {
    let listOfMessages = this.props.messages.map( (message, index) => {
        return (
                <Message
                    key={index}
                    message={message}
                    userReadMessage={this.props.userReadMessage}
                    userStarredMessage={this.props.userStarredMessage}
                    userSelectedMessage={this.props.userSelectedMessage}
                />
            )
            } )
        return (
            <div>{listOfMessages}</div>
        )
    }
}

export default Messages
