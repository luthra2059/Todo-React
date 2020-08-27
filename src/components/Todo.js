import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class Todo extends Component {
    render() {
        return this.props.todo.map((todo)=>(
            <TodoItem key={todo.id} todo={todo}/>
        )) 
    }
}
