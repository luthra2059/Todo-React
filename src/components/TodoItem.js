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
                <input type='checkbox' checked={this.props.todo.completed?true:false} onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>{' '}
                {this.props.todo.title}<button onClick={this.props.delTodo.bind(this, this.props.todo.id)}  style={btnStyle}>X</button></h5>
                
            </div>
        )
    }
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

