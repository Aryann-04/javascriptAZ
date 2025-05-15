let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editId = null;

document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let title = document.getElementById('title').value.trim();
    let description = document.getElementById('description').value.trim();
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;

    if (!title || !dueDate) return alert("Title and Due Date are required");

    if (editId) {
        let index = tasks.findIndex(t => t.id === editId);
        tasks[index] = { id: editId, title, description, dueDate, priority };
        editId = null;
    } else {
        let task = {
            id: Date.now(),
            title,
            description,
            dueDate,
            priority
        };
        tasks.push(task);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    document.getElementById('taskForm').reset();
});

function displayTasks(filter = 'all') {
    let container = document.getElementById('taskList');
    container.innerHTML = '';

    let filtered = filter === 'all' ? tasks : tasks.filter(t => t.priority === filter);

    filtered.forEach(task => {
        let div = document.createElement('div');
        div.className = 'task';
        div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p><strong>Due:</strong> ${task.dueDate}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <div class="actions">
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
        container.appendChild(div);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(document.getElementById('filterPriority').value);
}

function editTask(id) {
    let task = tasks.find(t => t.id === id);
    if (!task) return;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('priority').value = task.priority;
    editId = id;
}

document.getElementById('filterPriority').addEventListener('change', function () {
    displayTasks(this.value);
});

displayTasks();