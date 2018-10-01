import TodoModel from '../models/todo';

export default function (message) {
    return {
        type: "ADD_TODO",
        payLoad: new TodoModel(message)
    };
}