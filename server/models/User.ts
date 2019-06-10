//Notes: LOCATION4WEATHER, LOCATIONFORTIME
//Late game project could expand on calender and allow scheduling and connection to todo list. Not going to be part of Initial Product
import { ToDoList } from './ToDoList'
export class User {
    Username: string;
    Passhash: string;
    UserToDoList;
    constructor(Username: string, Passhash: string){
        this.Username = Username;
        this.Passhash = Passhash;
        this.UserToDoList = new ToDoList()
    }
}