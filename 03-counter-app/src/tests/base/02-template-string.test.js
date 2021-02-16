import '@testing-library/dom'
import {getSaludo} from '../../base/02-template-string'
describe('Pruebas en 02-template-string.js',()=>{
    test('getSaludo debe de retornar hola fernando',()=>{
        const nombre='Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
    })
    
    //Tarea
    test('getSaludo debe de retornar hola carlos',()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })




})