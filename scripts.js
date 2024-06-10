// Utilizamos una clase para encapsular la lógica del modal
class Modal {
  constructor() {
    this.modal = document.getElementById('modal');
    this.videoPlayer = document.getElementById('videoPlayer');
  }

  // Método para abrir el modal con el tráiler
  open(trailerUrl) {
    this.modal.style.display = 'block';
    this.videoPlayer.src = trailerUrl;
    // Eliminamos la clase modal-close-animation antes de abrir el modal para evitar conflictos
    this.modal.classList.remove('modal-close-animation');
    // Agregamos la clase modal-open-animation para animar la apertura del modal
    this.modal.classList.add('modal-open-animation');
  }

  // Método para cerrar el modal
  close() {
    this.modal.style.display = 'none';
    this.videoPlayer.src = '';
  }
}

// Instanciamos la clase Modal
const modal = new Modal();

// Añadimos event listeners para los botones de película
document.addEventListener('DOMContentLoaded', () => {
  const movieButtons = document.querySelectorAll('.movie button');
  movieButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const movieId = e.target.closest('.movie').getAttribute('data-movie-id');
      const trailerUrl = e.target.closest('.movie').getAttribute('data-trailer-url');
      modal.open(trailerUrl);
      e.stopPropagation(); // Previene que se dispare el evento del artículo
    });
  });

  // Añadimos event listeners para los formularios de inicio de sesión y registro
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Iniciando sesión...');

    // Supongamos que la autenticación fue exitosa, redirige al usuario a la página principal
    window.location.href = 'main.html';
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro
    console.log('Creando cuenta...');

    // Supongamos que el registro fue exitoso, redirige al usuario a la página principal
    window.location.href = 'main.html';
  });
});

// Añadimos event listener para cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
  modal.close();
});

// Añadimos animaciones de carga a las imágenes de películas una vez que se haya cargado la página
window.addEventListener('load', () => {
  const movieImages = document.querySelectorAll('.movie img');
  movieImages.forEach(img => {
    img.classList.add('image-load-animation');
  });
});
// Escucha el evento click en todos los botones de las películas
document.querySelectorAll('.movie button').forEach(button => {
  button.addEventListener('click', function(event) {
    // Obtiene el ID de la película del atributo data-movie-id del elemento padre (article)
    var movieId = this.parentNode.getAttribute('data-movie-id');
    
    // Añade o elimina la película de la lista
    if (localStorage.getItem(movieId)) {
      // Si la película ya está en la lista, la elimina
      localStorage.removeItem(movieId);
      alert('Película eliminada de Mi Lista');
    } else {
      // Si la película no está en la lista, la añade
      localStorage.setItem(movieId, true);
      alert('Película añadida a Mi Lista');
    }
  });
});

