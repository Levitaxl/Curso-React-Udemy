import '@testing-library/dom'
import {retornaArreglo} from '../../base/07-deses-arr'
describe('Pruebas en desestructuración',()=>{

    test('debe de retornar un string y un numero',()=>{
        const arr=retornaArreglo();
        const [letras,numeros]=retornaArreglo();

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
       // expect(arr).toEqual(['ABC',123]);
    })


})