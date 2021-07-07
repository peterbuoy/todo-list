import { v4 as uuidv4 } from 'uuid';

class TodoItem {
	constructor(title, description, dueDate, priority, details) {
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
	removeItemByID(todoItemUUID) {
		this.itemMap.delete(todoItemUUID);
		console.log('item deleted');
	}
	printAllItems() {
		return `Project: ${this.name}, Items: ${[...this.itemMap.values()].map(items => items.getTitleAndUUID())}`;
	}
}

export { TodoItem, Project }
