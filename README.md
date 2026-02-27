Taskflow: Gestor de tareas
Este proyecto es un gestor de tareas dinámico, desarrollado para el módulo de Programación avanzada en Javascript.
La aplicación combina una interfaz moderna con lógica basada en estándares actuales. La herramienta permite crear, listar y eliminar tareas, garantizando que la información se mantenga guardada incluso despúes de cerrar el navegador.

Demostración Funcional 
A través de este link puedes visualizar la aplicación funcionando:(https://denisevasquez24dv-dotcom.github.io/Taskflow-js-app/).

Tecnologías Utilizadas 
-JavaScript (ES6+): Uso de clases POO para la gestión de lógica.
-Manipulación del DOM: Interactividad total mediante async/await para el consumo de la API de JSONPlaceholder. 
-Implementación se setTimeout para simular retardos de servidor y setInterval para procesos de control en segundo plano.
-Persistencia: Almacenamiento local para que las tareas del usuario no se pierdan al cerrar el navegador.

Diseño y personalización 
Este proyecto incluye:
Paleta de colores como: fondo gris azulado, con tarjetas de tareas azul suave y bordes en azul cobalto.
Animaciones de entrada fadeIn y efectos de cambio de color al pasar el mouse por los botones.

Estructura de Archivos 
-Index html: interfaz de usuario, define la estructura semántica es el esqueleto que permite que el navegador entienda donde va el título, el input y la lista.
-style css: Diseño y animaciones personalizadas, contiene la identidad visual para que la aplicación sea atractiva.
-index.js: Lógica principal y manejo del DOM, maneja la interacción del usuario y la lógica de las clases tarea y gestor de tareas.
-api.js: Modulo de conexión asincrónica externa, se encarga exclusivamente de la conexión con el servidor externo mediante procesos asincrónicos. 

Justificación de la Estructura 
He decidido organizar el proyecto por las siguientes razones técnicas. 
-Escalabilidad y Mantenimiento: al tener la lógica de la API en api.js y la gestión de tareas en index.js, siendo más sencillo para localizar errores o añadir nuevas funciones sin romper el resto del código.
-Legibilidad: el separar el diseño (style.css) de la estructura index.html y la lógica js evitando así, archivos excesivamente largos y dificíles de leer siguiendo buenas prácticas de desarrollo web.
-Modularidad: el archivo api.js actúa como un servicio independiente, ya que si en el futuro se decidiera cambiar la api de JSONPlaceholder por otra, solo habría que modificar ese archivo sin modificar la lógica de la interfaz.


Referencias:
● MDN JavaScript
● Guía de ECMAScript 6
● JSONPlaceholder API

● POO en JavaScript - Artículo
● fetch() y manejo de promesas - Documentación
● Ejemplo de aplicación en GitHub

•	MDN Web Docs (Mozilla): Consultada para la implementación de la API de Almacenamiento Web (LocalStorage) y la manipulación de eventos del DOM.
•	Documentación de ECMAScript 6 (ES6+): Utilizada como base para la sintaxis de clases (POO), funciones de flecha (Arrow Functions) y el operador de propagación (Spread Operator).
•	JSONPlaceholder API: Fuente de datos externa utilizada para el consumo de servicios asíncronos mediante el método fetch.
•	Guía de JavaScript Asíncrono: Referencia clave para la gestión de promesas (Promises) y la implementación de bloques try/catch con async/await.
•	W3Schools CSS Flexbox: Guía utilizada para el diseño responsivo y la alineación de elementos en el contenedor principal de la aplicación.

Capturas de pantalla 
<img width="822" height="624" alt="image" src="https://github.com/user-attachments/assets/108d8ef9-abca-4958-a055-3f8d2086b434" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/439b5399-2937-4986-9453-068a70a47708" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/1740e671-3425-44aa-8e94-29216eb497f3" />
<img width="619" height="462" alt="image" src="https://github.com/user-attachments/assets/ba441164-72d1-4407-9609-560924cc3d74" />

Autor: Denise Vásquez Espinoza 
Curso: Desarrollo de aplicaciones Front-End.



