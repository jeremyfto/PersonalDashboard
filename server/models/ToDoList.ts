import {ToDoEntry} from './ToDoEntry'
export class ToDoList{
    entries: Array<ToDoEntry>;
    constructor(){
        this.entries = new Array<ToDoEntry>();
    }
    push(entry: ToDoEntry){
        this.entries.push(entry)
    }
}