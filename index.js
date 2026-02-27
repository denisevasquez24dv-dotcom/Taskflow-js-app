// CLASES (POO)
class Tarea {
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = false;
        this.fechaCreacion = new Date().toLocaleString(); 
    }

// Método para cambiar estado
    cambiarEstado() {
        this.completada = !this.completada;
    }
}

// CLASE GESTOR DE TAREAS
class GestorTareas {
    constructor() {
        this.tareas = JSON.parse(localStorage.getItem('mis_tareas')) || [];
    }

    agregarTarea(desc) {
        const nueva = new Tarea(Date.now(), desc);
        this.tareas.push(nueva);
        this.actualizarStorage();
    }

    // Método para eliminar 
    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.actualizarStorage();
    }

    actualizarStorage() {
        localStorage.setItem('mis_tareas', JSON.stringify(this.tareas));
    }
}

const miGestor = new GestorTareas();

//  EVENTOS Y MANIPULACIÓN DEL DOM 
const formulario = document.querySelector('#form-tareas');
const listaUl = document.querySelector('#lista-tareas');
const inputTarea = document.querySelector('#input-tarea');
const mensajeEstado = document.querySelector('#status-msg');

// Función para mostrar las tareas en el HTML 
const render = () => {
    listaUl.innerHTML = ''; 
    
    miGestor.tareas.forEach(t => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${t.descripcion}</span>
            <button class="btn-delete" onclick="borrar(${t.id})">❌</button>
        `;

        // Evento MOUSEOVER 
        li.addEventListener('mouseover', () => {
            li.style.borderLeftColor = "#ff4081"; // Cambia el color del borde al pasar el mouse
        });
        li.addEventListener('mouseout', () => {
            li.style.borderLeftColor = "#1a73e8";
        });

        listaUl.appendChild(li);
    });
};

// Evento KEYUP 
inputTarea.addEventListener('keyup', (e) => {
    // Ejemplo: Si el usuario presiona una tecla, podemos verla en consola
    if (e.key === "Enter") console.log("Usuario intentó enviar con Enter");
});

// JAVASCRIPT ASÍNCRONO 
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (inputTarea.value.trim() !== "") {
        let tiempo = 3; // Empezamos contador en 3 segundos
        mensajeEstado.innerText = `Guardando en ${tiempo}...`;

        //Contador regresivo con setInterval
        const cuentaRegresiva = setInterval(() => {
            tiempo--;
            if (tiempo > 0) {
                mensajeEstado.innerText = `Guardando en ${tiempo}...`;
            } else {
                clearInterval(cuentaRegresiva);
            }
        }, 1000);

        // Retardo final con setTimeout
        setTimeout(() => {
            miGestor.agregarTarea(inputTarea.value);
            render();
            inputTarea.value = '';
            mensajeEstado.innerText = "";
            alert("¡Tarea guardada con éxito!"); 
        }, 3000); // Ajustado a 3 seg para que coincida con el contador
    }
});

//  CONSUMO DE APIS
const cargarTareasIniciales = async () => {
    try {
    
        const datosDesdeAPI = await obtenerTareasDeAPI(); 
        
        const tareasEspañol = [
            "Completar el proyecto",
            "Estudiar para el examen",
            "Subir el código a GitHub",
            "Revisar la documentación de MDN"
        ];
        
        tareasEspañol.forEach(titulo => {
            miGestor.agregarTarea(titulo);
        });
        
        render();
    } catch (error) {
        console.error("Error al cargar tareas:", error);
    }
};
// Función global para que el botón "onclick" funcione
window.borrar = (id) => {
    miGestor.eliminarTarea(id);
    render();
};

// Inicialización de la App
window.addEventListener('load', () => {
    if (miGestor.tareas.length === 0) {
        cargarTareasIniciales();
    } else {
        render();
    }
});
