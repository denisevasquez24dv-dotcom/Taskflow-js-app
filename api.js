// api.js
const obtenerTareasDeAPI = async () => { 
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
        if (!respuesta.ok) throw new Error("No se pudo conectar con la API");
        const datos = await respuesta.json();
        return datos; 
    } catch (error) {
        console.error("Error en la petición API:", error);
        return [];
    }
};
