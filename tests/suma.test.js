import { suma } from '../src/app.js';
import assert from 'assert';

// La función de suma es importada como un módulo, Node la ejecuta
try {
    assert.strictEqual(suma(1, 2), 3, 'El test de la suma ha fallado');
    console.log('✅ Test de suma pasado.');
} catch (error) {
    console.error(`❌ Falló el test: ${error.message}`);
}