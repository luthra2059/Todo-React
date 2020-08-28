import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
export default class Todo extends Component {
    
    render() {
        return this.props.todo.map((todo)=>(
            <TodoItem delTodo={this.props.delTodo} key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        )) 
    }
}
Todo.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}