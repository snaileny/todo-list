class UI {

    constructor(app, elements) {

        this.app = app;
        this.elements = elements;

    }

    render() {

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
            
            const projects = this.app.getProjectList();
            const filterActive = this.elements.inputElements.filterActive.value;
            const filterDate = this.elements.inputElements.filterDate.value;
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
                    <div class="task${taskCompleteClass}" data-task-title="${taskTitle}" data-task-project="${taskProject}" data-task-active="${taskActive}">
                        <input type="checkbox" id="complete-${taskTitle}" class="complete-task-checkbox" ${checkBoxState}>
                        <div class="task-content">
                            <label for="complete-${taskTitle}" class="task-title">${taskTitle}</label>
                            <p class="task-date">${taskDate}</p>
                        </div>
                        <button type="button" class="remove-task-button">X</button>
                    </div>
                    `;
            
                    if (this.app.getActiveProject() === taskProject && checkFilterActive(filterActive, taskActive) && checkFilterDate(filterDate, taskTimestamp)) {
            
                        taskListTemplate += taskTemplate;
            
                    }
            
                }
        
            }
        
            this.elements.taskList.innerHTML = taskListTemplate;
        
        }
        
        const renderProjects = () => {
        
            const projects = this.app.getProjectList();
            let projectListTemplate = ``;
        
            for (const projectName in projects) {
    
                const projectActiveClass = this.app.getActiveProject() === projectName ? "-active" : "";
        
                if (projectName !== this.app.main.getName()) {
        
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
    
            this.elements.projectList.innerHTML = projectListTemplate;
        
        }
    
        renderTasks();
        renderProjects();
    
    }

}

export default UI;