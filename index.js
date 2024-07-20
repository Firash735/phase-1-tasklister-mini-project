function addTaskToList(taskDescription) {
    // ... previous code ...
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => taskItem.remove());
    
    taskItem.appendChild(deleteButton);
  }
  function addTaskToList(taskDescription) {
    // ... previous code ...
    
    const priority = document.getElementById("task-priority").value;
    taskItem.classList.add(priority);
  }