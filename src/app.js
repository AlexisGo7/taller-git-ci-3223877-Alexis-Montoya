/**
 * Una simple función de suma
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function suma(a, b) {
    return a + b;
}

export function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = texto;
        lista.appendChild(nuevoLi);
    }
}

// <-- Nuevo: Exponer la función para que el HTML la encuentre
if (typeof window !== 'undefined') {
    window.agregarItem = agregarItem;
}

console.log('App lista');

function inicializarApp() {
    console.log('App lista');
    if (typeof window !== 'undefined') {
        window.agregarItem = agregarItem;
    }
}

inicializarApp(); // Llamamos a la función
