document.addEventListener("DOMContentLoaded", function() {
    // Seleccionando todos los enlaces de navegación
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevenir el comportamiento por defecto de los enlaces
            event.preventDefault();

            // Obtener el destino del enlace y redirigir
            const targetPage = this.getAttribute("href");

            // Redirigir a la página seleccionada o manejar contacto
            if (targetPage === "contact.html") {
                showContactOptions(); // Muestra las opciones de contacto
            } else {
                window.location.href = targetPage; // Redirige a otras páginas
            }
        });
    });

    // Configuración de opciones de contacto
    document.getElementById("whatsapp").addEventListener("click", function() {
        window.open("https://wa.me/04266160316", "_blank");
    });

    document.getElementById("email").addEventListener("click", function() {
        window.open("mailto:pakitastudio@gmail.com", "_self");
    });

    document.getElementById("instagram").addEventListener("click", function() {
        window.open("https://www.instagram.com/invites/contact/?igsh=5n709ndkd8dp&utm_content=4hojhko", "_blank");
    });

    document.getElementById("call").addEventListener("click", function() {
        window.open("tel:04266160316", "_self");
    });
});

// Función para mostrar las opciones de contacto
function showContactOptions() {
    const contactOptions = `
        <h1>Contact Me</h1>
        <ul id="contact-options">
            <li><a href="#" id="whatsapp">WhatsApp</a></li>
            <li><a href="#" id="email">Email</a></li>
            <li><a href="#" id="instagram">Instagram</a></li>
            <li><a href="#" id="call">Call</a></li>
        </ul>
    `;

    // Crear una nueva página en el documento
    document.body.innerHTML = contactOptions;

    // Re-adicionar los event listeners para los enlaces de contacto
    document.getElementById("whatsapp").addEventListener("click", function() {
        window.open("https://wa.me/04266160316", "_blank");
    });

    document.getElementById("email").addEventListener("click", function() {
        window.open("mailto:pakitastudio@gmail.com", "_self");
    });

    document.getElementById("instagram").addEventListener("click", function() {
        window.open("https://www.instagram.com/invites/contact/?igsh=5n709ndkd8dp&utm_content=4hojhko", "_blank");
    });

    document.getElementById("call").addEventListener("click", function() {
        window.open("tel:04124123430", "_self");
    });
}


// animaciones en el background( objetos moviendo)
// Zoomar la imagen cuando se le pasa en cursor
//


// Función para obtener los proyectos de GitHub usando la API
function fetchGitHubProjects() {
    const username = 'pakita01'; // Reemplaza con mi nombre de usuario de GitHub
    const url = `https://api.github.com/users/${pakita01}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Aquí  proceso la información de los repositorios
        })
        .catch(error => console.error('Error fetching GitHub projects:', error));
}

fetchGitHubProjects(); // Llamar a la función para obtener proyectos al cargar la página
