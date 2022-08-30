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

    setProjectList(object) {

        this.projectList = object;

    }

    addTask(title, date, project) {

        if (this.projectList.hasOwnProperty(project) && !this.projectList[project].hasTask(title) && project && title.length > 0 && title.length <= 36) {

            const task = new Task(title, date);
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

        if (!this.hasProject(name) && this.projectList.length !== 6 && name.length > 0) {

            const project = new TaskList(name);
            this.projectList[name] = project;
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