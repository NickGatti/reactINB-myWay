import React, { Component } from 'react'

class Toolbar extends Component {

render() {
    let numberOfReadMessages = this.props.messages.filter( message => {
        return !message.read
      } ).length

        return (
            <div 
                className="row toolbar"
            >
            <div 
                className="col-md-12"
            >
                <p 
                    className="pull-right"
                >
                <span 
                    className="badge badge"
                >{numberOfReadMessages}</span>
                unread messages
                </p>

                <a className="btn btn-danger">
                <i className="fa fa-plus"></i>
                </a>

                <button 
                    className="btn btn-default"
                    onClick={() => this.props.selectedIndicatorInteractionFunc()}
                >
                <i className={`fa fa${this.props.selectedIndicator()}-square-o`}></i>
                </button>

                <button 
                    className="btn btn-default"
                    onClick={() => this.props.markAsReadButtonFunc(true)}
                >Mark As Read</button>

                <button 
                    className="btn btn-default"
                    onClick={() => this.props.markAsReadButtonFunc(false)}
                >Mark As Unread</button>

                <select 
                    className="form-control label-select" 
                    onChange={ () => this.props.applyLabelDropDownFunc( true, document.querySelectorAll('select')[0].value ) }
                >
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <select 
                    className="form-control label-select"
                    onChange={ () => this.props.applyLabelDropDownFunc( false, document.querySelectorAll('select')[1].value ) }
                >
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <button 
                    className="btn btn-default"
                    onClick={() => this.props.deleteMessageButtonFunc()}
                >
                <i className="fa fa-trash-o"></i>
                </button>
            </div>
            </div>
        )
    }
}

export default Toolbar