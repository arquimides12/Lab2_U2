import "./components/espe-header.js";
import "./components/espe-task-list.js";
import "./components/espe-task-items.js";
import "./components/espe-task-form.js";
import "./components/espe-task-detail.js";
import '../css/styles.css'; // Asegúrate de que la ruta esté correcta

let tasks = [
    {
        id: 1,
        name: 'Reunión de Proyecto',
        notes: 'Preparar presentación para la reunión con el equipo.',
        time: '10:00',
        priority: 'alta',
        date: 'hoy',
        completed: false
    },
    {
        id: 2,
        name: 'Hacer ejercicio',
        notes: '30 minutos de cardio y pesas',
        time: '18:00',
        priority: 'media',
        date: 'hoy',
        completed: false
    },
    {
        id: 3,
        name: 'Comprar víveres',
        notes: 'Leche, huevos, pan y frutas',
        time: '15:30',
        priority: 'baja',
        date: 'mañana',
        completed: false
    },
];

let theme = 'dark';
let currentView = 'fecha'; 

// Referencias a los componentes
const header = document.getElementById('header');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const taskDetail = document.getElementById('taskDetail');
const tabFecha = document.getElementById('tab-fecha');
const tabPrioridad = document.getElementById('tab-prioridad');

// Inicializar estado
taskList.tasks = tasks;
taskList.theme = theme;
header.theme = theme;
taskForm.theme = theme;
taskDetail.theme = theme;

// Manejar cambio de tema
header.addEventListener('theme-toggle', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    header.theme = theme;
    taskList.theme = theme;
    taskForm.theme = theme;
    taskDetail.theme = theme;
});

// Manejar eventos del taskList
taskList.addEventListener('task-deleted', (e) => {
    const id = e.detail.task.id;
    tasks = tasks.filter(t => t.id !== id);
    taskList.tasks = [...tasks];
});

taskList.addEventListener('task-edit', (e) => {
    taskForm.task = e.detail.task;
    taskForm.open = true;
});

taskList.addEventListener('add-task-requested', () => {
    taskForm.task = null; // Nueva tarea
    taskForm.open = true;
});

taskList.addEventListener('task-selected', (e) => {
    taskDetail.task = e.detail.task;
    taskDetail.open = true;
});

// Manejar eventos del formulario
taskForm.addEventListener('close', () => {
    taskForm.open = false;
});

taskForm.addEventListener('save-task', (e) => {
    const taskData = e.detail;
    
    if (taskData.id) {
        // Editar tarea existente
        const index = tasks.findIndex(t => t.id === taskData.id);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...taskData };
        }
    } else {
        // Nueva tarea
        const newTask = {
            ...taskData,
            id: Date.now(), // ID único basado en timestamp
            completed: false
        };
        tasks.push(newTask);
    }
    
    taskList.tasks = [...tasks];
    taskForm.open = false;
});

// Manejar eventos del detalle de tarea
taskDetail.addEventListener('close', () => {
    taskDetail.open = false;
});

taskDetail.addEventListener('edit-task', (e) => {
    taskDetail.open = false;
    taskForm.task = e.detail.task;
    taskForm.open = true;
});

taskDetail.addEventListener('task-completed', (e) => {
    const task = e.detail.task;
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
        tasks[index].completed = true;
        taskList.tasks = [...tasks];
    }
});

// Manejar pestañas de vista
tabFecha.addEventListener('click', (e) => {
    e.preventDefault();
    currentView = 'fecha';
    tabFecha.classList.add('active');
    tabPrioridad.classList.remove('active');
    taskList.view = 'fecha';
});

tabPrioridad.addEventListener('click', (e) => {
    e.preventDefault();
    currentView = 'prioridad';
    tabPrioridad.classList.add('active');
    tabFecha.classList.remove('active');
    taskList.view = 'prioridad';
});