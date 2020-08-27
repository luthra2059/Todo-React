import "./App.css";
import Todo from "./components/Todo";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: "Take the trash out",
        completed: false,
      },
      {
        id: 2,
        title: "New meeting with Ramandeep",
        completed: false,
      },
      {
        id: 3,
        title: "Class Assignment",
        completed: false,
      },
    ]
  };
  markComplete = (id) => {
    this.setState({
        todo: this.state.todo.map(todo=>{
            if(todo.id===id){
                todo.completed=!todo.completed
            }
            return todo;
        })
    })
}
  render() {
    
    return (
      <div className="App">
        <Todo todo={this.state.todo} markComplete={this.markComplete}/>
      </div>
    );
  }
}
