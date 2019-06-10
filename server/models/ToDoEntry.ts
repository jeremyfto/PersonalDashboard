export class ToDoEntry {
    Entry: string;
    createdat: Date;
    constructor(entry){
        this.Entry = entry;
        this.createdat = new Date();
    }
}
