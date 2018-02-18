import React, { Component } from 'react'

import Message from './Message'

class Messages extends Component {

render() {
    let listOfMessages = this.props.messages.map( (message, index) => { 
        return (
                <Message 
                    key={index} 
                    message={message} 
                    toggleMessageChange={this.props.toggleMessageChange}
                />
            )
            } )
        return (
            <div>{listOfMessages}</div>
        )
    }
}

export default Messages