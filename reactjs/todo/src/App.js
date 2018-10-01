import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list';
import AddTodo from './components/add-todo/add-todo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos:todos
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <main>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <TodoList TodoList={this.state.todos}></TodoList>
        </main>
      </div>
    );
  }
}

export default App;
