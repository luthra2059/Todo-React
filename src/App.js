import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/layout/Header";
import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import { v4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";
export default class App extends Component {
  state = {
    todo: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todo: res.data }));
  }
  markComplete = (id) => {
    this.setState({
      todo: this.state.todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todo: [...this.state.todo.filter((todo) => todo.id !== id)],
        })
      );
  };
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        res.data.id = v4();
        this.setState({ todo: [...this.state.todo, res.data] });
      });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todo
                    delTodo={this.delTodo}
                    todo={this.state.todo}
                    markComplete={this.markComplete}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
