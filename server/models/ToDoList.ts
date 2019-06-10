import {ToDoEntry} from './ToDoEntry'
export class ToDoList{
    carrier: Array<ToDoEntry>;
    constructor(){
        this.carrier = new Array<ToDoEntry>();
    }
    push(entry: ToDoEntry){
        this.carrier.push(entry)
    }
}