import { v4 as uuidv4 } from 'uuid';

class TodoItem {
	constructor(title, description, dueDate, priority, details) {
		// UUID may be used in the future as property to move items between projects
		this.UUID = uuidv4();
		this.completed = false;
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.details = details;
	}
	setCompleted() {
		this.completed = true
	}
	getTitleAndPartialUUID() {
		return `|title:${this.title}, UUID:${this.UUID.substring(0,6)}|`;
	}
}

class Project {
	itemMap = new Map();	
	constructor(name) {
		this.name = name;
	}
	addItem(todoItem) {
		this.itemMap.set(todoItem.UUID, todoItem);
		console.log(`${todoItem.name} added to ${this.name} project`);
	}
	removeItemByID(itemUUID) {
		this.itemMap.delete(itemUUID);
		console.log('item deleted');
	}
	printAllItems() {
		return `Project: ${this.name}, Items: ${[...this.itemMap.values()].map(items => items.getTitleAndPartialUUID())}`;
	}
}

class Projects {
	projectList = [];
	add(name) {
		let newProject = new Project(name);
		console.log('help');
		this.projectList.push(newProject);
	}
}

// this needs to be split into a view and dom
// honestly might just scrap the entire thing
const newProject = () => {
	// view/logic things
	let projectName = prompt('Enter name for project');
	if (projectName == null || projectName == '') return console.log('invalid project name');
	let project = new Project(projectName);
	// dom things
	const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
	let item = document.createElement('span');
	item.textContent = project.name;
	SPAN_NEW_PROJECT.before(item);
}



export { TodoItem, Projects, newProject }
