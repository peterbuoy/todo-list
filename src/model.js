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
		console.log(`${todoItem.title} added to ${this.name} project`);
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
	projectsMap = new Map();
	currentProjectName = "";
	setCurrent(project) {
		this.currentProjectName = project.name;
	}
	getCurrent() {
		return this.projectsMap.get(this.currentProjectName);
	}
	add(project) { 	
		this.projectsMap.set(project.name, project);
	}
}

export { TodoItem, Projects, Project }
