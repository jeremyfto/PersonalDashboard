import {User} from './models/User'
import {ToDoEntry} from './models/ToDoEntry'
var test = new User("Jeremyfto","asfasdf")
test.UserToDoList .push(new ToDoEntry("Test"))
console.log(test)