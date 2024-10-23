// Espera a que el documento esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de sumar, restar y agregar al carrito
    const sumarButtons = document.querySelectorAll('.sumar'); // Botones para incrementar la cantidad
    const restarButtons = document.querySelectorAll('.restar'); // Botones para decrementar la cantidad
    const agregarButtons = document.querySelectorAll('.agregar-carrito'); // Botones para agregar al carrito
  
    // Función para sumar
    sumarButtons.forEach(button => {
      // Agrega un evento de clic a cada botón de sumar
      button.addEventListener('click', () => {
        // Obtiene el elemento contador anterior al botón de sumar
        const contador = button.previousElementSibling; 
        // Convierte el valor actual del contador a un número entero
        let valorActual = parseInt(contador.value);
        // Incrementa el valor del contador en 1
        contador.value = valorActual + 1; 
      });
    });
  
    // Función para restar
    restarButtons.forEach(button => {
      // Agrega un evento de clic a cada botón de restar
      button.addEventListener('click', () => {
        // Obtiene el elemento contador siguiente al botón de restar
        const contador = button.nextElementSibling; 
        // Convierte el valor actual del contador a un número entero
        let valorActual = parseInt(contador.value);
        // Verifica si el valor actual es mayor que 1 antes de decrementarlo
        if (valorActual > 1) {
          // Decrementa el valor del contador en 1
          contador.value = valorActual - 1; 
        }
      });
    });
  
    // Función para agregar al carrito
    agregarButtons.forEach(button => {
      // Agrega un evento de clic a cada botón de agregar al carrito
      button.addEventListener('click', () => {
        // Obtiene el elemento contador de cantidad dentro del elemento anterior al botón de agregar al carrito
        const contador = button.previousElementSibling.querySelector('input[type="number"]');
        // Obtiene el valor actual del contador de cantidad
        const cantidad = contador.value;
        // Obtiene el nombre del producto dentro del elemento padre del botón de agregar al carrito
        const producto = button.parentElement.querySelector('h2').innerText; 
        // Muestra un mensaje de alerta con la cantidad y el nombre del producto agregado al carrito
        alert(`Agregaste ${cantidad} de ${producto} al carrito.`);
      });
    });
  });
