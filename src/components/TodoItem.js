import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom: '1pc #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through':'none'
        }
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                <h5>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>{' '}
                {this.props.todo.title}</h5>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
