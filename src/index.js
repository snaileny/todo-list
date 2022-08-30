import App from "./modules/app.js";
import "./css/index.css";

const inputs = {

    filterActive: document.querySelector("#task-active-filter"),
    filterDate: document.querySelector("#task-date-filter"),
    taskTitle: document.querySelector(".task-title-input"),
    taskDate: document.querySelector(".task-date-input"),
    projectName: document.querySelector("#project-name-input")

}

const elements = {

    projectList: document.querySelector(".project-list"),
    taskList: document.querySelector(".task-list")

}

const errors = {

    task: "Tasks can't be duplicates!",
    project: "Project names must be different!"

}

const app = new App();
render();

function eventHandler(e) {

    const taskTitle = inputs.taskTitle.value;
    const taskDate = inputs.taskDate.value;
    const projectName = inputs.projectName.value;

    if (e.target.className === "add-task-button") {

        const added = app.addTask(taskTitle, taskDate, app.getActiveProject());
        
        if (!added) {

            alert(errors.task);

        }

        render();

    } if (e.target.className === "remove-task-button") {

        const taskTitle = e.target.parentElement.dataset.taskTitle;
        app.removeTask(taskTitle, app.getActiveProject());
        render();

    } if (e.target.className === "complete-task-checkbox") {

        const taskTitle = e.target.parentElement.dataset.taskTitle;
        app.toggleTask(taskTitle, app.getActiveProject());
        render();

    } if (e.target.className === "add-project-button") {

        const added = app.addProject(projectName);

        if (!added) {

            alert(errors.project);

        }

        app.setActiveProject(projectName);
        render();

    } if (e.target.className === "project") {

        const selectedProject = e.target.dataset.projectName;
        app.setActiveProject(selectedProject);
        render();

    } if (e.target.className === "remove-project-button") {

        const selectedProject = e.target.parentElement.dataset.projectName;
        app.removeProject(selectedProject);
        app.setActiveProject(app.main.getName());
        render();

    } if (e.target.className === "clear-completed-button") {

        const taskList = app.projectList[app.getActiveProject()].getTaskList();

        for (const taskTitle in taskList) {

            const task = taskList[taskTitle];

            if (task.isActive() === false) {

                app.removeTask(taskTitle);

            }

        }

        render();

    } if (e.target.className === "clear-all-button") {

        const taskList = app.projectList[app.getActiveProject()].getTaskList();

        for (const taskTitle in taskList) {

            app.removeTask(taskTitle);

        }

        render();

    } if (e.target.tagName === "SELECT") {

        render();

    }

}

function render() {

    const renderTasks = () => {

        const checkFilterActive = (filterActive, taskActive) => {
    
            if (filterActive === "active" && taskActive === true) {
    
                return true;
    
            } else if (filterActive === "completed" && taskActive === false) {
    
                return true;
    
            } else if (filterActive === "all") {
    
                return true;
    
            } else {
    
                return false;
                
            }
    
        }
    
        const checkFilterDate = (filterDate, taskTimestamp) => {
    
            const CURRENT_DATE = new Date().toISOString().slice(0, 10);
            const CURRENT_TIMESTAMP = Date.parse(CURRENT_DATE);
            const TASK_SECONDS = Math.floor(taskTimestamp / 1000);
            const CURRENT_SECONDS =  Math.floor(CURRENT_TIMESTAMP / 1000);
            const UPCOMING_SECONDS = 604800;
    
            if (TASK_SECONDS === CURRENT_SECONDS && filterDate === "today") {
    
                return true;
    
            } else if (TASK_SECONDS < CURRENT_SECONDS + UPCOMING_SECONDS && filterDate === "upcoming") {
    
                return true;
    
            } else if (filterDate === "all") {
    
                return true;
    
            } else {
    
                return false;
    
            }
    
        }
        
        const projects = app.getProjectList();
        const filterActive = inputs.filterActive.value;
        const filterDate = inputs.filterDate.value;
        let taskListTemplate = ``;
    
        for (const projectName in projects) {
    
            const tasks = projects[projectName].getTaskList();
    
            for (const taskTitle in tasks) {
    
                const task = tasks[taskTitle];
                const taskProject = task.getProject();
                const taskDate = task.getDate();
                const taskTimestamp = task.getTimestamp();
                const taskActive = task.isActive();
                const checkBoxState = taskActive ? "" : "checked";
                const taskCompleteClass = taskActive ? "" : "-complete";
        
                const taskTemplate = `
                <div class="task${taskCompleteClass}" data-task-title="${taskTitle}" data-task-project="${taskDate}" data-task-active="${taskActive}">
                    <input type="checkbox" id="complete-${taskTitle}" class="complete-task-checkbox" ${checkBoxState}>
                    <div class="task-content">
                        <label for="complete-${taskTitle}" class="task-title">${taskTitle}</label>
                        <p class="task-date">${taskDate}</p>
                    </div>
                    <button type="button" class="remove-task-button">X</button>
                </div>
                `;
        
                if (app.getActiveProject() === taskProject && checkFilterActive(filterActive, taskActive) && checkFilterDate(filterDate, taskTimestamp)) {
        
                    taskListTemplate += taskTemplate;
        
                }
        
            }
    
        }
    
        elements.taskList.innerHTML = taskListTemplate;
    
    }
    
    const renderProjects = () => {
    
        const projects = app.getProjectList();
        let projectListTemplate = ``;
    
        for (const projectName in projects) {

            const projectActiveClass = app.getActiveProject() === projectName ? "-active" : "";
    
            if (projectName !== app.main.getName()) {
    
                const projectTemplate = `
                <span class="project${projectActiveClass}" data-project-name="${projectName}">${projectName}<button class="remove-project-button">X</button></span>
                `
                projectListTemplate += projectTemplate;
    
            } else {
    
                const projectTemplate = `
                <span class="project${projectActiveClass}" data-project-name="main">Main</span>
                `
                projectListTemplate += projectTemplate;
    
            }
    
        }
    
        elements.projectList.innerHTML = projectListTemplate;
    
    }

    renderTasks();
    renderProjects();

}

document.addEventListener("click", eventHandler);