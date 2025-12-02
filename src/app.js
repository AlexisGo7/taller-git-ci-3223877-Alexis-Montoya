/**
 * Una simple función de suma
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function suma(a, b) {
    return a + b;
}

/**
 * Añade un nuevo <li> a la lista con id="lista" en el DOM.
 * @param {string} texto
 */
export function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = texto;
        lista.appendChild(nuevoLi);
    }
}

// La función inicializarApp encapsula toda la lógica de inicialización.
function inicializarApp() {
    // 💡 Aplicación de la SUGERENCIA de FIX:
    console.log("App lista: UI y lógica cargada"); 
    
    // Expone la función para que el HTML la pueda llamar globalmente
    if (typeof window !== 'undefined') {
        window.agregarItem = agregarItem;
    }
}

inicializarApp(); // Llamamos a la función para inicializar la aplicación