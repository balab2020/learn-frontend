import TodoModel from '../models/todo';

export default function todos(state = [], action) {
    
    const data = action.payLoad;

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                new TodoModel(data.action, data.id, data.state)
            ];
        default:
            return state; // should return the state as it is if no action found
    }
}