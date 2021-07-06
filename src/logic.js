class TodoItem {
	constructor(title, description, dueDate, priority, details, project="Inbox") {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.details = details;
		this.project = project;
	}
}

class Project {
	itemList = [];	
	constructor(name) {
		this.name = name;
	}
}

export {TodoItem, Project}