import AppBaseModel from './basemodel';
export default class ToDoList extends AppBaseModel {
    constructor() {
        super();
        this.todos = [];
    }
}