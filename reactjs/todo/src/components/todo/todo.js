import React, { Component } from 'react';
import './todo.css';

export default class Todo extends Component {
    render() {
        return (
            <a href="#" className="todo">
                <span>{this.props.Data.action}</span>
            </a>
        );
    }
}