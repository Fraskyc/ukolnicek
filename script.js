
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
  });
  
  function loadTasks() {
    const categories = ["work", "home", "other"];
    categories.forEach(category => {
      const tasks = JSON.parse(localStorage.getItem(category)) || [];
      tasks.forEach(task => addTaskElement(category, task));
    });
  }
  
  function addTask(category) {
    const input = document.getElementById(`${category}Input`);
    const task = input.value.trim();
    if (task) {
      addTaskElement(category, task);
      saveTask(category, task);
      input.value = "";
    }
  }
  
  function addTaskElement(category, task) {
    const taskList = document.getElementById(`${category}Tasks`);
    const li = document.createElement("li");
    li.textContent = task;
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Odebrat";
    removeButton.className = "remove-btn";
    removeButton.onclick = function() {
      removeTask(category, task, li);
    };
  
    li.appendChild(removeButton);
    taskList.appendChild(li);
  }
  
  function saveTask(category, task) {
    const tasks = JSON.parse(localStorage.getItem(category)) || [];
    tasks.push(task);
    localStorage.setItem(category, JSON.stringify(tasks));
  }
  
  function removeTask(category, task, element) {
    const tasks = JSON.parse(localStorage.getItem(category)) || [];
    const updatedTasks = tasks.filter(t => t !== task);
    localStorage.setItem(category, JSON.stringify(updatedTasks));
    element.remove();
  }
  