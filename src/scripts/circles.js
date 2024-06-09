// Crea los círculos y los añade al contenedor
function createCircles() {
    const container = document.querySelector('.container-circles');
    const numCircles = 20; // Número de círculos
  
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
  
      // Define el tamaño, posición y fondo aleatorio de cada círculo
      const size = Math.random() * 100 + 50; // Tamaño aleatorio entre 50px y 150px
      const left = Math.random() * 100; // Posición horizontal aleatoria
      const top = Math.random() * 100; // Posición vertical aleatoria
  
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${left}%`;
      circle.style.top = `${top}%`;
  
      container.appendChild(circle);
    }
  }
  
  // Inicia la animación creando los círculos
  createCircles();
  