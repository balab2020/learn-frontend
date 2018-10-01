import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/todo-list';
import AddTodo from './components/add-todo/add-todo';
import AppHeader from'./components/app-header/app-header';

export default () => (
  <div className="App">
    <AppHeader Title="Todo"></AppHeader>
    <main>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </main>
  </div>
);
