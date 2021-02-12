import React, { Fragment } from 'react';

const saludo={
    nombre: 'Hermes',
    edad:21
}
const PrimeraApp = () =>{
    return (
        <>  
            <h1>{ JSON.stringify(saludo) }</h1>
            <p>Hola mundo</p>
        </>
    );
}

export default PrimeraApp;