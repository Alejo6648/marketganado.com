document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    console.log('Formulario enviado'); // Verifica si se muestra este mensaje en la consola del navegador
});
