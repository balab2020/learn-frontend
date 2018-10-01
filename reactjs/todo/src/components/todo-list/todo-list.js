import React, { Component } from 'react';
import './todo-list.css';
import Todo from '../todo/todo';
import { connect } from 'react-redux';

const TodoList = (data) => (
    <ul className="todos">
        {
            data.todos.map(todo => {
                return (
                    <li>
                        <Todo key={Math.random()} Data={todo}></Todo>
                    </li>
                );
            })
        }
    </ul>);

const mapStateToProps = state => {
    return { 
        todos: state 
    }
};

export default connect(
    mapStateToProps
)(TodoList);