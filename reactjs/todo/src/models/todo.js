import AppBaseModel from './basemodel';

export default class Todo extends AppBaseModel {
    constructor(action = "", id = "", state = '') {
        super();
        this.id = id;
        this.action = action;
        this.state = state;
    }
}
