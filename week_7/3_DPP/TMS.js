function Task(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.subTasks = [];
    }
    // Prototype method using 'this'
    Task.prototype.complete = function() {
    this.completed = true;
    console.log(`Task "${this.title}" marked as completed.`);
    };
    // Method to add subtask (using regular function for proper 'this'
    binding)
    Task.prototype.addSubTask = function(subTaskTitle) {
    this.subTasks[this.subTasks.length] = new Task(subTaskTitle, "");
    console.log(`Subtask "${subTaskTitle}" added to
    "${this.title}".`);
    };
    // TaskManager constructor function
    function TaskManager() {
    this.tasks = [];
    }
    // Method to add a task
    TaskManager.prototype.addTask = function(title, description) {
    const task = new Task(title, description);
    this.tasks[this.tasks.length] = task;
    console.log(`Task "${title}" added.`);
    return task;
    };
    // Anonymous function for event handling (simulated)
    TaskManager.prototype.onTaskComplete = function(taskTitle) {
    setTimeout(function() {
    console.log(`Event: Task "${taskTitle}" has been completed!`);
    }, 1000);
    };
    // Recursive function to complete all tasks and subtasks
    TaskManager.prototype.completeAllTasks = function(taskList) {
    for (let i = 0; i < taskList.length; i++) {
    taskList[i].complete();
    if (taskList[i].subTasks.length > 0) {
    this.completeAllTasks(taskList[i].subTasks);
    }
    }
    };
    // Pure function example
    function getCompletedTaskCount(tasks) {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
    count++;
    }
    }
    return count;
    }
    // Impure function example
    TaskManager.prototype.removeCompletedTasks = function() {
    const initialLength = this.tasks.length;
    let activeTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
    if (!this.tasks[i].completed) {
    activeTasks[activeTasks.length] = this.tasks[i];
    }
    }
    this.tasks = activeTasks;
    console.log(`Removed ${initialLength - this.tasks.length}
    completed tasks.`);
    };
    // Usage example
    const taskManager = new TaskManager();
    const task1 = taskManager.addTask("Learn JavaScript", "Study advanced
    JS concepts");
    task1.addSubTask("Understand 'this' keyword");
    task1.addSubTask("Learn about closures");
    const task2 = taskManager.addTask("Build a project", "Apply JS
    knowledge in a real project");
    // Using the anonymous function
    taskManager.onTaskComplete(task1.title);
    // Complete all tasks (recursive function)
    taskManager.completeAllTasks(taskManager.tasks);
    // Using pure function
    console.log("Completed tasks:",
    getCompletedTaskCount(taskManager.tasks));
    // Using impure function
    taskManager.removeCompletedTasks();
    // Demonstrating 'this' behavior in different contexts
    const standalone = task1.complete;
    standalone(); // 'this' is undefined or global object
    const arrowFunction = () => {
    console.log(this); // 'this' is lexically bound
    };
    arrowFunction();