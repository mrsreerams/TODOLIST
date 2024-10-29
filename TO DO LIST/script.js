let todoList = [];

// Function to render tasks
function renderTasks() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';
    todoList.forEach((task, index) => {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.classList.add('todo-text');
        taskText.textContent = task.text;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        // Edit button
        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(index);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);

        li.appendChild(taskText);
        li.appendChild(buttonsDiv);

        todoListElement.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        todoList.push({ text: taskText });
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task.');
    }
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt('Edit your task:', todoList[index].text);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        todoList[index].text = newTaskText.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    todoList.splice(index, 1);
    renderTasks();
}
