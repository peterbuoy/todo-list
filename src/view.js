const modal = document.querySelector(".modal");
const BTN_ADD_TASK = document.querySelector("#btn_add_task");
const closeButton = document.querySelector(".close-button");

const toggleModal = () => modal.classList.toggle("show-modal");
const renderNewProject = (name) => {
	const SPAN_NEW_PROJECT = document.getElementById('span_new_project');
	let project = document.createElement('span');
	project.textContent = name;
	SPAN_NEW_PROJECT.before(project);
}
const renderNewTask = () => {
	
}
BTN_ADD_TASK.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

export { toggleModal, renderNewProject }