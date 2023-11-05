const stickers = [
    { id: 1, precio: "170", tamano: "6cm", tematica: "Anime" },
    { id: 2, precio: "170", tamano: "6cm", tematica: "Futbol" },
    { id: 3, precio: "170", tamano: "6cm", tematica: "Variados" },
    { id: 4, precio: "170", tamano: "6cm", tematica: "Anime" },
    { id: 5, precio: "170", tamano: "6cm", tematica: "Futbol" },
    { id: 6, precio: "170", tamano: "6cm", tematica: "Variados" },
    { id: 7, precio: "170", tamano: "6cm", tematica: "Anime" },
    { id: 8, precio: "170", tamano: "6cm", tematica: "Futbol" }
];

const contenedorProductos = document.getElementById('contenedorProductos');
const carrito = document.getElementById('carrito');
const comprarCarrito = document.getElementById('comprarCarrito');
const vaciarCarrito = document.getElementById('vaciarCarrito');
let totalCompra = 0;

stickers.forEach(sticker => {
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="contenedorProductos">
            <div><img src="imgs/Sticker ${sticker.id}.png" alt="Sticker ${sticker.id}"></div>
            <div>
                <h3>Sticker ${sticker.id}</h3>
                <p>Temática: ${sticker.tematica}</p>
                <p>Precio: $${sticker.precio}</p>
                <button id="boton${sticker.id}">Añadir al carrito</button>
            </div>
        </div>
    `;
    contenedorProductos.append(div);

    const botonProducto = document.getElementById(`boton${sticker.id}`);

    botonProducto.addEventListener('click', () => {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoActual.push(sticker);
        localStorage.setItem('carrito', JSON.stringify(carritoActual));
        mostrarCarrito();
    });
});

function mostrarCarrito() {
    carrito.innerHTML = '';
    totalCompra = 0; 

    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `Sticker ${producto.id} $${producto.precio}`;
        carrito.append(li);
        totalCompra += Number(producto.precio); 
    });

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total de la compra: $${totalCompra}`;
    carrito.append(totalLi);
}

vaciarCarrito.addEventListener('click', () => {
    if (totalCompra === 0) {
alert("No hay ningun elemento en el carrito.")
    }
    else {
    localStorage.removeItem('carrito');
    carrito.innerHTML = '';
    totalCompra = 0;
    } 
});

comprarCarrito.addEventListener('click', () => {
    if (totalCompra === 0) {
        alert("Por favor, ingrese al menos un articulo al carrito.");
    }
    else {
    alert(`Total: $${totalCompra}. Gracias por tu compra. `);
    localStorage.removeItem('carrito');
    carrito.innerHTML = '';
    totalCompra = 0;
    } 
});

mostrarCarrito();