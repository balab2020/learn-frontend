//https://www.npmjs.com/package/node-json-db
var JsonDB = require('node-json-db');

export default class TodoDataBase {

    constructor() {
        this.db = new JsonDB("todo", true, false);
        this.db.push('/store/todo', {
            items:[]
        });
    }

    addTodo(todo){
        this.db.push('/store/todo', {
            items:[{
                todo
            }]
        });
    }
}
