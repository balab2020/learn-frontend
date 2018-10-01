import React, { Component } from 'react';
import './todo-list.css';
import Todo from '../todo/todo';
export default class TodoList extends Component {
    render() {
        return (
            <ul className="todos">
                {
                    this.props.TodoList.map(t => {
                        return (
                            <li>
                                <Todo Data={t}></Todo>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}