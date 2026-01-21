function mostrarCarrito() {
    
    const carrito = JSON.parse(localStorage.getItem('tickets')) || [];
    const contenedor = document.getElementById('carrito');

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p class="mensaje-vacio">Aún no tienes boletos seleccionados.</p>';
        return;
    }

    let htmlTotal = 0;
    
    carrito.forEach((ticket, index) => {
        const subtotal = ticket.precio * ticket.cantidad;
        htmlTotal += subtotal;

        contenedor.innerHTML += `
            <div class="ticket-item">
                <div class="info">
                    <h3>${ticket.nombre}</h3>
                    <p>Precio unitario: $${ticket.precio}</p>
                    <p>Cantidad: ${ticket.cantidad}</p>
                </div>
                <div class="subtotal">
                    <p>Subtotal: $${subtotal}</p>
                    <button onclick="eliminarDelCarrito(${index})" class="btn-eliminar">Eliminar</button>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML += `
        <div class="carrito-total">
            <h2>Total a Pagar: $${htmlTotal}</h2>
            <button class="btn-pagar" onclick="alert('¡Gracias por tu compra!'); ">Finalizar Compra</button>
        </div>
    `;
}
mostrarCarrito();

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('tickets')) || [];
    
    carrito.splice(index, 1);
    
    localStorage.setItem('tickets', JSON.stringify(carrito));
    mostrarCarrito();
}