import React, { Component } from 'react';
import './add-todo.css';
import TodoModel from '../../models/todo';
import ReactDOM from 'react-dom';

export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.action = '';
        this.setAction = this.setAction.bind(this);
    }

    setAction(evt) {
        this.action = evt.target.value;
    }

    resetAction(){
        this.action = '';
        const component = ReactDOM.findDOMNode(this);
        component.querySelector('input').value = '';
    }

    addTodo() {
        if (this.action) {
            this.props.addTodo(new TodoModel(this.action));
           this.resetAction();
        }
    }

    render() {
        return (
            <aside className="add-todo">
                <input type="text" name='action' onChange={this.setAction}></input>
                <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>
                    <span>Add</span>
                </button>
            </aside>
        );
    }
} 