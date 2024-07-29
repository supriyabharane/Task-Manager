document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Add task
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Add task to the list
    function addTask(taskText) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
