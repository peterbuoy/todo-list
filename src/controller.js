import { TodoItem, newProject, Projects } from "./model";
import { toggleModal, renderNewProject } from "./view"
import "./style.css";

const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
const DIV_ITEM_CONTAINER = document.getElementById('div_item_container');
// Initialization
// make inbox, add to list, add to dom

// BROKEN FIX ME PLS, new projects are no longer created with the 
const projects = new Projects();
projects.add('Inbox');
//console.log(projects.projectList[0]);

let item1 = new TodoItem('title', 'description', '2021-10-10', 'high', 'no details');
let newItem = document.createElement('div');
newItem.textContent = item1.getTitleAndPartialUUID();
DIV_ITEM_CONTAINER.append(newItem);

SPAN_NEW_PROJECT.addEventListener('click', newProject);

const handleNewTaskCreation = (event) => {
	event.stopPropagation();
	event.preventDefault();
	console.log('hello handle task creation');
	let title = document.getElementById('input_title').value;
	let description = document.getElementById('input_description').value;
	let date = document.getElementById('input_date').value;
	let priority = document.getElementById('input_priorities').value;
	let details = document.getElementById('input_details').value;
	let todoItemProps = [title, description, date, priority, details];
	let item1 = new TodoItem(...todoItemProps);
	projects.projectList[0].addItem(item1);
	console.log(projects.projectList[0].printAllItems());
	document.getElementById('form_new_task').reset();
	toggleModal();
}

const FORM_NEW_TASK = document.getElementById('form_new_task');
// this event listener overrides submit btn validation
console.log('hello');
FORM_NEW_TASK.addEventListener('submit', handleNewTaskCreation);
