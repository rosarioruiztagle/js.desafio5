const input = document.querySelector('input');
const btn = document.getElementById('agregar');
const tareas = document.getElementById('tareas');
const total = document.getElementById('total');
const hechas = document.getElementById('hechas');

const queHaceres = [
    { id: 1, name: 'Hacer la cama', completed: false },
    { id: 2, name: 'Armar mi maleta', completed: false },
    { id: 3, name: 'Lavar la loza', completed: false }
];

const agregar = () => {
    const tareaDelInput = input.value.trim();
    if (!tareaDelInput) {
        alert('ERROR: Debes ingresar una tarea.');
        return;
    }

    const nueva = {
        id: queHaceres.length + 1,
        name: tareaDelInput,
        completed: false
    };

    queHaceres.push(nueva);
    input.value = ''; 
    renderizar();
};

btn.addEventListener('click', agregar);


const renderizar = () => {
    let html = '';
    let realizado = 0;

    queHaceres.forEach((queHacer) => {
        html += `
            <div>
                <p>${queHacer.id}</p>
                <p>
                    <span>${queHacer.name}</span>
                    <input type="checkbox" ${queHacer.completed ? 'checked' : ''} onclick="changeStatus(${queHacer.id})">
                    <button onclick="deleteTask(${queHacer.id})">Eliminar</button>
                </p>
            </div>
        `;
        if (queHacer.completed) {
            realizado++;
        }
    });

    tareas.innerHTML = html;
    total.textContent = queHaceres.length;
    hechas.textContent = realizado;
};

const changeStatus = (id) => {
    queHaceres.forEach((queHacer) => {
        if (queHacer.id === id) {
            queHacer.completed = !queHacer.completed;
        }
    });
    renderizar();
};

const deleteTask = (id) => {
    queHaceres.splice(queHaceres.findIndex((tarea) => tarea.id === id), 1);
    renderizar();
};

renderizar();