import Task from "./task.js";
import TaskList from "./tasklist.js";

class App {

    constructor() {

        this.main = new TaskList("main");
        this.activeProject = this.main.getName();
        this.projectList = {};
        this.projectList[this.main.getName()] = this.main;

    }

    getActiveProject() {

        return this.activeProject;

    }

    getProjectList() {

        return this.projectList;

    }

    addTask(title, date, project) {

        const sanitizedTitle = title.replace(/[^\w|^\s]+/g, "");

        if (this.projectList.hasOwnProperty(project) && !this.projectList[project].hasTask(sanitizedTitle) && project && sanitizedTitle.length > 0 && sanitizedTitle.length <= 36) {

            const task = new Task(sanitizedTitle, date);
            task.setProject(project);
            this.projectList[project].addTask(task);
            return true;

        } else {

            return false;

        }

    }

    toggleTask(title, project) {

        if (this.projectList[project].hasTask(title)) {

            this.projectList[project].taskList[title].toggleComplete();

        }

    }

    removeTask(title, project) {

        if (project) {

            delete this.projectList[project].taskList[title];

        } else {

            delete this.projectList[this.getActiveProject()].taskList[title];

        }

    }

    addProject(name) {

        const sanitizedName = name.replace(/[^\w|^\s]+/g, "");

        if (!this.hasProject(sanitizedName) && this.projectList.length !== 6 && sanitizedName.length > 0) {

            const project = new TaskList(sanitizedName);
            this.projectList[sanitizedName] = project;
            return true;

        } else {

            return false;

        }

    }

    hasProject(name) {

        for (const projectName in this.projectList) {

            if (name.toLowerCase() === projectName.toLowerCase()) {

                return true;

            }

        }

        return false;

    }

    setActiveProject(name) {

        if (this.hasProject(name)) {

            this.activeProject = name;

        }

    }

    removeProject(name) {
    
        delete this.projectList[name];

    }

}

export default App;