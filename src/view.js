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
		console.log('in each');
	})
}

const displayNewProjectTab = (project) => {
	const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
	let projectSpan = document.createElement('span');
	projectSpan.textContent = project.name;
	projectSpan.style.backgroudColor = 'red';
	SPAN_NEW_PROJECT.before(projectSpan);
	return projectSpan;
	// should the event listener be here?
	// projectSpan.addEventListener('click', (project) => displayProjectItems(project))
}

const renderNewItem = (item) => {
	const NEW_ITEM_DIV = document.createElement('div');
	const TITLE = document.createElement('span');
	TITLE.style.fontWeight = 'bold';
	const DESCRIPTION = document.createElement('span');
	DESCRIPTION.style.fontStyle = 'italic';
	TITLE.textContent = `${item.title} `;
	DESCRIPTION.textContent = item.description;
	NEW_ITEM_DIV.append(TITLE);
	NEW_ITEM_DIV.append(DESCRIPTION);
	return NEW_ITEM_DIV
}

BTN_ADD_TASK.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

export { toggleModal, displayNewProjectTab, displayProjectItems }