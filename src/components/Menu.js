import React from 'react';

const Menu = (props) => { // Recibimos las propiedades a través del parámetro props
    return (
        <nav>
            <p>{props.titulo}</p> {/* Accedemos a la propiedad del título a través de props */}
            <p>{props.subtitulo}</p>
        </nav>
      );
}
 
export default Menu;