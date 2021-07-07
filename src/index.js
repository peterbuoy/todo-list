import { TodoItem, Project } from "./Logic";
import "./style.css";

const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
const DIV_ITEM_CONTAINER = document.getElementById('div_item_container');
// Initialization
// make inbox, add to list, add to dom
let projectInbox =  new Project('Inbox');
let projectSpan = document.createElement('span');
projectSpan.textContent = projectInbox.name;
SPAN_NEW_PROJECT.before(projectSpan);
// make item, add to inbox, add to dom
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
		SPAN_NEW_PROJECT.before(item);
	}

const modal = document.querySelector(".modal");
const BTN_ADD_TASK = document.querySelector("#btn_add_task");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

BTN_ADD_TASK.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

SPAN_NEW_PROJECT.addEventListener('click', newProject);

const handleNewTaskCreation = (e) => {
	let title = document.getElementById('input_title').value;
	let description = document.getElementById('input_description').value;
	let date = document.getElementById('input_date').value;
	let priority = document.getElementById('input_priorities').value;
	let details = document.getElementById('input_details').value;
	toggleModal();
	let item1 = new TodoItem(title, description, date, priority, details);
	projectInbox.addItem(item1);
	console.log(projectInbox.printAllItems());
}

const BTN_CONFIRM_TASK = document.getElementById('btn_confirm_task');
BTN_CONFIRM_TASK.addEventListener('click', handleNewTaskCreation);
