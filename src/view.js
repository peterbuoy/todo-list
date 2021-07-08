import { handleEditItem } from './controller'
import "./style.css";


const modal = document.querySelector(".modal");
const BTN_ADD_TASK = document.querySelector("#btn_add_task");
const closeButton = document.querySelector(".close-button");

const toggleModal = () => modal.classList.toggle("show-modal");

const displayProjectItems = (project) => {
	const DIV_ITEM_CONTAINER = document.getElementById('div_item_container');
	while(DIV_ITEM_CONTAINER.lastChild && DIV_ITEM_CONTAINER.lastChild.id != 'btn_add_task') {
		DIV_ITEM_CONTAINER.lastChild.remove();
	}
	project.itemMap.forEach((value) => {
		DIV_ITEM_CONTAINER.append(renderNewItem(value));
	})
	console.log(project)
}

const displayNewProjectTab = (project) => {
	const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
	let projectSpan = document.createElement('span');
	projectSpan.textContent = project.name;
	projectSpan.style.backgroudColor = 'red';
	SPAN_NEW_PROJECT.before(projectSpan);
	return projectSpan;
}

const renderNewItem = (item) => {
	const NEW_ITEM_DIV = document.createElement('div');
	const TITLE = document.createElement('span');
	TITLE.style.fontWeight = 'bold';
	TITLE.textContent = `${item.title} `;

	const DESCRIPTION = document.createElement('span');
	DESCRIPTION.style.fontStyle = 'italic';
	DESCRIPTION.textContent = item.description;

	const EDIT_BUTTON = document.createElement('button');
	EDIT_BUTTON.textContent = 'edit';

	NEW_ITEM_DIV.append(TITLE);
	NEW_ITEM_DIV.append(DESCRIPTION);
	NEW_ITEM_DIV.append(EDIT_BUTTON);
	EDIT_BUTTON.addEventListener('click', () => {
			toggleModal()
			document.getElementById('header_task').textContent = 'Edit Task'
			document.getElementById('btn_confirm_task').style.display = 'none';
			document.getElementById('btn_confirm_edit').style.display = 'block';
			handleEditItem(item.UUID);
		})
	return NEW_ITEM_DIV
}


BTN_ADD_TASK.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

export { toggleModal, displayNewProjectTab, displayProjectItems }