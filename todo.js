// Get task list and form elements
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const addTaskBtn = document.getElementById('add-task-btn');
const allBtn = document.getElementById('all-btn');
const activeBtn = document.getElementById('active-btn');
const completedBtn = document.getElementById('completed-btn');

// Initialize tasks array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Set initial active filter button
allBtn.classList.add('active');

// Function to add task
function addTask(title, description) {
    const task = {
        title,
        description,
        completed: false
    };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList();
}

// Function to render task list
function renderTaskList(filter = 'all') {
    taskList.innerHTML = '';
    let filteredTasks = tasks;
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }
    filteredTasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.innerHTML = `
            <span>${task.title}</span>
            <p>${task.description}</p>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        `;
        taskElement.querySelector('.complete-btn').addEventListener('click', () => {
            task.completed = !task.completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTaskList(getFilter());
        });
        taskElement.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTaskList(getFilter());
        });
        taskElement.querySelector('.edit-btn').addEventListener('click', () => {
            const newTitle = prompt('Enter new title:', task.title);
            const newDescription = prompt('Enter new description:', task.description);
            if (newTitle && newDescription) {
                task.title = newTitle;
                task.description = newDescription;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTaskList(getFilter());
            }
        });
        taskList.appendChild(taskElement);
    });
}

// Function to get current filter
function getFilter() {
    if (allBtn.classList.contains('active')) {
        return 'all';
    } else if (activeBtn.classList.contains('active')) {
        return 'active';
    } else if (completedBtn.classList.contains('active')) {
        return 'completed';
    }
}

// Add event listener to form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(titleInput.value, descriptionInput.value);
    titleInput.value = '';
    descriptionInput.value = '';
});

// Add event listener to add task button
addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(titleInput.value, descriptionInput.value);
    titleInput.value = '';
    descriptionInput.value = '';
});

// Add event listeners to filter buttons
allBtn.addEventListener('click', () => {
    allBtn.classList.add('active');
    activeBtn.classList.remove('active');
    completedBtn.classList.remove('active');
    renderTaskList('all');
});

activeBtn.addEventListener('click', () => {
    activeBtn.classList.add('active');
    allBtn.classList.remove('active');
    completedBtn.classList.remove('active');
    renderTaskList('active');
});

completedBtn.addEventListener('click', () => {
    completedBtn.classList.add('active');
    allBtn.classList.remove('active');
    activeBtn.classList.remove('active');
    renderTaskList('completed');
});

// Render task list on page load
renderTaskList();