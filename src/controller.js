import { TodoItem, Projects, Project } from "./model";
import { toggleModal, displayNewProjectTab, displayProjectItems } from "./view"
import "./style.css";

// Initialization
const projects = new Projects();
let inbox = new Project('Inbox')
projects.add(inbox);
projects.setCurrent(inbox)
displayNewProjectTab(inbox).addEventListener('click', () => {
	projects.setCurrent(inbox)
	displayProjectItems(projects.getCurrent());
	console.log(`current project is ${projects.getCurrent().name}`);
})
// end init

const newProject = () => {
	let projectName = prompt('Enter name for project');
	if (projectName == null || projectName == '') return console.log('invalid project name');
	if(projects.projectsMap.has(projectName)) {
		return alert('Sorry, this project already exists!');
	}
	let project = new Project(projectName);
	projects.add(project);
	const ADD_NEW_PROJECT = document.getElementById('span_new_project');
	let newProjectSpan = document.createElement('span');
	newProjectSpan.textContent = project.name;
	ADD_NEW_PROJECT.before(newProjectSpan);
	newProjectSpan.addEventListener('click', () => {
		projects.setCurrent(projects.projectsMap.get(project.name));
		displayProjectItems(projects.getCurrent());
		console.log(`current project is ${projects.getCurrent().name}`);
	})
}

const editItemAndFixListeners = (itemUUID) => {
	event.preventDefault();
	let currentProject = projects.getCurrent();
	let currentItem = currentProject.itemMap.get(itemUUID);
	currentItem.title = document.getElementById('input_title').value;
	currentItem.description = document.getElementById('input_description').value;
	currentItem.dueDate = document.getElementById('input_date').value;
	currentItem.priority = document.getElementById('input_priorities').value;
	currentItem.details = document.getElementById('input_details').value;
	document.getElementById('form_new_task').reset();
	toggleModal();
	displayProjectItems(currentProject);
	FORM_NEW_TASK.removeEventListener('submit', (event) => editItemAndFixListeners(itemUUID));
	FORM_NEW_TASK.addEventListener('submit', handleNewTaskCreation);
}

const handleEditItem = (itemUUID) => {
	FORM_NEW_TASK.removeEventListener('submit', handleNewTaskCreation);
	console.log(`itemUUID is ${itemUUID}`);
	let currentProject = projects.getCurrent();
	let currentItem = currentProject.itemMap.get(itemUUID);
	document.getElementById('input_title').value = currentItem.title;
	document.getElementById('input_description').value = currentItem.description;
	document.getElementById('input_date').value = currentItem.dueDate;
	document.getElementById('input_priorities').value = currentItem.priority;
	document.getElementById('input_details').value = currentItem.details;
	FORM_NEW_TASK.addEventListener('submit', (event) => editItemAndFixListeners(itemUUID));
}

const handleNewTaskCreation = (event) => {
	event.preventDefault();
	console.log('hello handle task creation');
	let title = document.getElementById('input_title').value;
	let description = document.getElementById('input_description').value;
	let date = document.getElementById('input_date').value;
	let priority = document.getElementById('input_priorities').value;
	let details = document.getElementById('input_details').value;
	let itemProps = [title, description, date, priority, details];
	let newItem = new TodoItem(...itemProps);
	let currentProject = projects.getCurrent();
	currentProject.addItem(newItem);
	displayProjectItems(currentProject);
	document.getElementById('form_new_task').reset();
	toggleModal();
}

const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
SPAN_NEW_PROJECT.addEventListener('click', newProject);

const FORM_NEW_TASK = document.getElementById('form_new_task');
FORM_NEW_TASK.addEventListener('submit', handleNewTaskCreation);

export { handleEditItem }