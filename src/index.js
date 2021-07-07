import { TodoItem, Project } from "./Logic";
import "./style.css";

const DIV_NEW_PROJECT = document.getElementById('div_new_project');
const DIV_ITEM_CONTAINER = document.getElementById('div_item_container');

// make new inbox, add to list, add to dom
let projectInbox =  new Project('Inbox');
let projectSpan = document.createElement('span');
projectSpan.textContent = projectInbox.name;
DIV_NEW_PROJECT.before(projectSpan);

// make new item, add to inbox, add to dom
let item1 = new TodoItem('title', 'description', '2021-10-10', 1, 'no details');
projectInbox.addItem(item1);
let newItem = document.createElement('div');
newItem.textContent = item1.getTitleAndUUID();
DIV_ITEM_CONTAINER.append(newItem);

const newProject = () => {
		let projectName = prompt('Enter name for project');
		console.log(`projectName is ${projectName}`);
		if (projectName == null || projectName == '') return console.log('hello');
		let project = new Project(projectName);
		let item = document.createElement('span');
		item.textContent = project.name;
		item.addEventListener('click', () => setCurrentProject('Personal'))
		DIV_NEW_PROJECT.before(item);
	}
DIV_NEW_PROJECT.addEventListener('click', newProject);
