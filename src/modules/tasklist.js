class TaskList {

    constructor(name) {

        this.name = name;
        this.taskList = {};

    }

    getName() {

        return this.name;

    }

    getTaskList() {

        return this.taskList;

    }

    addTask(task) {

        this.taskList[task.getTitle()] = task;

    }

    hasTask(title) {

        for (const taskTitle in this.taskList) {

            if (title.toLowerCase() === taskTitle.toLowerCase()) {

                return true;

            }

        }

        return false;

    }

    removeTask(taskTitle) {

        if (this.taskList.hasOwnProperty(taskTitle)) {

            delete this.taskList[taskTitle];

        }

    }

}

export default TaskList;