function openReservaPopup() {
    var popupWindow = window.open('', 'ReservaPopup', 'width=600,height=400,scrollbars=yes,resizable=yes');

    popupWindow.document.write('<html><head><title>Reserva</title>');
    popupWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css">');
    popupWindow.document.write('</head><body>');

    popupWindow.document.write('<div id="reservaPopup" class="popup-content">');
    popupWindow.document.write('<span class="close" onclick="window.close()">&times;</span>');
    popupWindow.document.write('<h2>Reservar ahora</h2>');
    popupWindow.document.write('<form id="reservaForm" action="#" method="post">');
    popupWindow.document.write('<div class="campo">');
    popupWindow.document.write('<label for="nombre-reserva">Nombre:</label>');
    popupWindow.document.write('<input type="text" id="nombre-reserva" name="nombre-reserva" required>');
    popupWindow.document.write('</div>');
    popupWindow.document.write('<div class="campo">');
    popupWindow.document.write('<label for="email-reserva">Correo electrónico:</label>');
    popupWindow.document.write('<input type="email" id="email-reserva" name="email-reserva" required>');
    popupWindow.document.write('</div>');
    popupWindow.document.write('<div class="campo">');
    popupWindow.document.write('<label for="fecha-llegada">Fecha de llegada:</label>');
    popupWindow.document.write('<input type="date" id="fecha-llegada" name="fecha-llegada" required>');
    popupWindow.document.write('</div>');
    popupWindow.document.write('<div class="campo">');
    popupWindow.document.write('<label for="fecha-salida">Fecha de salida:</label>');
    popupWindow.document.write('<input type="date" id="fecha-salida" name="fecha-salida" required>');
    popupWindow.document.write('</div>');
    popupWindow.document.write('<div class="campo">');
    popupWindow.document.write('<label for="habitacion">Tipo de habitación:</label>');
    popupWindow.document.write('<select id="habitacion" name="habitacion" required>');
    popupWindow.document.write('<option value="estandar">Estándar</option>');
    popupWindow.document.write('<option value="superior">Superior</option>');
    popupWindow.document.write('<option value="suite">Suite</option>');
    popupWindow.document.write('</select>');
    popupWindow.document.write('</div>');
    popupWindow.document.write('<button type="submit">Enviar</button>');
    popupWindow.document.write('</form>');
    popupWindow.document.write('</div>');

    // Cerrar la etiqueta body y html
    popupWindow.document.write('</body></html>');
    popupWindow.document.close();

    // Añadir manejador de evento para el envío del formulario
    popupWindow.document.querySelector('#reservaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Cerrar la ventana emergente
        popupWindow.close();

        // Redirigir a la sección de inicio
        window.location.hash = '#inicio';

        // Mostrar la notificación de confirmación
        var notification = document.getElementById('notification');
        notification.style.display = 'block';

        // Ocultar la notificación después de unos segundos
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000); // Ocultar después de 3 segundos
    });
}

// Añadir manejador de evento para el envío del formulario de contacto
document.querySelector('#contacto form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Mostrar la notificación de confirmación
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Ocultar la notificación después de unos segundos
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000); // Ocultar después de 3 segundos

    // Limpiar el formulario de contacto
    event.target.reset();
});