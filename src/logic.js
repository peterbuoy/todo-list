import { v4 as uuidv4 } from 'uuid';

class TodoItem {
	constructor(title, description, dueDate, priority, details) {
		this.UUID = uuidv4();
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.details = details;
	}
	getTitleAndUUID() {
		return `|title:${this.title}, UUID:${this.UUID}|`;
	}
}

class Project {
	itemMap = new Map();	
	constructor(name) {
		this.name = name;
	}
	addItem(todoItem) {
		this.itemMap.set(todoItem.UUID, todoItem);
		console.log('item added');
	}
	removeItem(todoItem) {
		this.itemMap.delete(todoItem.UUID);
	}
	printAllItems() {
		return `Project: ${this.name}, Items: ${[...this.itemMap.values()].map(items => items.getTitleAndUUID())}`;
	}
}

export { TodoItem, Project }