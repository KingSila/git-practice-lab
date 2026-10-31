const STORAGE_KEY = 'daymark-tasks-v1';

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const emptyState = document.querySelector('#empty-state');
const taskCount = document.querySelector('#task-count');
const progressLabel = document.querySelector('#progress-label');
const clearCompletedButton = document.querySelector('#clear-completed');

let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved)
      ? saved.filter(task => task && typeof task.id === 'string' && typeof task.text === 'string' && typeof task.done === 'boolean')
      : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  list.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement('li');
    item.className = `task-item${task.done ? ' done' : ''}`;

    const check = document.createElement('button');
    check.className = 'check-button';
    check.type = 'button';
    check.setAttribute('aria-label', task.done ? `Mark ${task.text} incomplete` : `Complete ${task.text}`);
    check.textContent = task.done ? '✓' : '';
    check.addEventListener('click', () => toggleTask(task.id));

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    const remove = document.createElement('button');
    remove.className = 'delete-button';
    remove.type = 'button';
    remove.setAttribute('aria-label', `Delete ${task.text}`);
    remove.textContent = '×';
    remove.addEventListener('click', () => deleteTask(task.id));

    item.append(check, text, remove);
    list.append(item);
  }

  const completed = tasks.filter(task => task.done).length;
  emptyState.hidden = tasks.length > 0;
  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`;
  progressLabel.textContent = `${completed} of ${tasks.length} complete`;
  clearCompletedButton.disabled = completed === 0;
}

function addTask(text) {
  tasks.unshift({ id: crypto.randomUUID(), text: text.trim(), done: false });
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTask(text);
  form.reset();
  input.focus();
});

clearCompletedButton.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.done);
  saveTasks();
  renderTasks();
});

renderTasks();
