import { TodoItem, Project } from "./Logic";

let item1 = new TodoItem('test', 'test description', '2021-10-10', '1', 'no details');
console.log('hello');
console.log(item1.getTitleAndUUID());
let projectInbox =  new Project('Inbox');
projectInbox.addItem(item1);
console.log(projectInbox.printAllItems());

let projectPersonal = new Project('Personal');
projectInbox.moveItem(item1, projectPersonal);
console.log('item1 moved from inbox to personal');
console.log(projectPersonal.printAllItems());
let item2 = new TodoItem('test2', 'test description2', '2021-10-11', '3', 'big details');
projectPersonal.addItem(item2);
console.log(projectPersonal.printAllItems());
