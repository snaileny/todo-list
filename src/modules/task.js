class Task {

    constructor(title, date) {

        this.title = title;
        this.date = date;
        this.project = null;
        this.active = true;

    }

    getTitle() {

        return this.title;

    }

    getDate() {

        return this.date;

    }

    getTimestamp() {

        return Date.parse(this.date);

    }

    getProject() {

        return this.project;

    }

    setProject(project) {

        this.project = project;

    }

    isActive() {

        return this.active;

    }

    toggleComplete() {

        if (this.active === true) {

            this.active = false;

        } else {

            this.active = true;

        }

    }

}

export default Task;