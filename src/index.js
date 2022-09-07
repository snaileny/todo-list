import App from "./modules/app.js";
import UI from "./modules/ui.js";
import "./css/index.css";

const elements = {

    projectList: document.querySelector(".project-list"),
    taskList: document.querySelector(".task-list"),
    inputElements: {

        filterActive: document.querySelector("#task-active-filter"),
        filterDate: document.querySelector("#task-date-filter"),
        taskTitle: document.querySelector(".task-title-input"),
        taskDate: document.querySelector(".task-date-input"),
        projectName: document.querySelector("#project-name-input")
    
    }

}

const errors = {

    task: "Tasks can't be duplicates!",
    project: "Project names must be different!"

}

const app = new App();
const ui = new UI(app, elements);
ui.render();

function eventHandler(e) {

    const taskTitle = elements.inputElements.taskTitle.value;
    const taskDate = elements.inputElements.taskDate.value;
    const projectName = elements.inputElements.projectName.value;

    if (e.target.className === "add-task-button") {

        const added = app.addTask(taskTitle, taskDate, app.getActiveProject());
        
        if (!added) {

            alert(errors.task);

        }

        ui.render();

    } if (e.target.className === "remove-task-button") {

        const taskTitle = e.target.parentElement.dataset.taskTitle;
        app.removeTask(taskTitle, app.getActiveProject());
        ui.render();

    } if (e.target.className === "complete-task-checkbox") {

        const taskTitle = e.target.parentElement.dataset.taskTitle;
        app.toggleTask(taskTitle, app.getActiveProject());
        ui.render();

    } if (e.target.className === "add-project-button") {

        const added = app.addProject(projectName);

        if (!added) {

            alert(errors.project);

        }

        app.setActiveProject(projectName);
        ui.render();

    } if (e.target.className === "project") {

        const selectedProject = e.target.dataset.projectName;
        app.setActiveProject(selectedProject);
        ui.render();

    } if (e.target.className === "remove-project-button") {

        const selectedProject = e.target.parentElement.dataset.projectName;
        app.removeProject(selectedProject);
        app.setActiveProject(app.main.getName());
        ui.render();

    } if (e.target.className === "clear-completed-button") {

        const taskList = app.projectList[app.getActiveProject()].getTaskList();

        for (const taskTitle in taskList) {

            const task = taskList[taskTitle];

            if (task.isActive() === false) {

                app.removeTask(taskTitle);

            }

        }

        ui.render();

    } if (e.target.className === "clear-all-button") {

        const taskList = app.projectList[app.getActiveProject()].getTaskList();

        for (const taskTitle in taskList) {

            app.removeTask(taskTitle);

        }

        ui.render();

    } if (e.target.tagName === "SELECT") {

        ui.render();

    }

}

document.addEventListener("click", eventHandler);