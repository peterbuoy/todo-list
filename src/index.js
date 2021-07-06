import { TodoItem, Project } from "./Logic";
import "./style.css";

const DIV_NEW_PROJECT = document.getElementById('div_new_project');

let currentProject = "Inbox";
const setCurrentProject = (name) => {
	currentProject = name;
	console.log('currentProject expression invoked');
}

// make new inbox, add to list, update dom
let projectInbox =  new Project('Inbox');
let item = document.createElement('div');
item.textContent = projectInbox.name;
DIV_NEW_PROJECT.before(item);

const newProject = () => {
		let project = new Project(prompt('enter name for new project'));
		let item = document.createElement('div');
		item.textContent = project.name;
		item.addEventListener('click', () => setCurrentProject('Personal'))
		DIV_NEW_PROJECT.before(item);
	}
DIV_NEW_PROJECT.addEventListener('click', newProject);


