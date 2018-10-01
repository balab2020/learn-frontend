import React, { Component } from 'react';
import './add-todo.css';
import { connect } from 'react-redux';
import addTodo from '../../actions/add-todo';

const AddTodo = ({ dispatch }) => {

    //todo:should be avoided, hack to proceed now
    let input = React.createRef();

    const dispatchAdd = _ => {
        if (!input.current.value.trim()) {
            return
        }
        dispatch(addTodo(input.current.value));
        input.current.value = "";
    };

    return (
        <aside className="add-todo">
            <input type="text" ref={input}></input>
            <button className="btn btn-primary" onClick={dispatchAdd}>
                <span>Add</span>
            </button>
        </aside>
    );
};

//connect the component to store
export default connect()(AddTodo);