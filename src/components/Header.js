import React from 'react'; 


const Header = () => {  // Componente (coincide con el nombre del Archivo 

    const titulo = "El Header que más mola";    // Variable para renderizar
    const a = 5;
    const b = 6;

    return ( 
        <div>    { /* Devolvemos una etiqueta con todo el contenido que deseamos renderizar*/ }
             <h2> {titulo} </h2> { /* Renderizamos el valor de la variable */ }
             <p>{ a + b }</p>
        </div>
    );
}

export default Header; // Exportamos a nuestro componente
