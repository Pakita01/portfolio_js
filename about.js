
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

