import React from 'react';
import Header from './Header';
import Menu from './Menu';

const Layout = () => {
    return ( 
        <div>
           <Header/>
            { /* 
                - Definiendo el archivo como "Javascript React" (abajo a la derecha), 
                - Los 3 siguientes divs anidados se pueden generar con el shortcut siguiente:  
                        .container>.columns>.column.is-one-quarter (y presionar Enter)
                - La clase "is-one-quarter" adpata el ancho a una cuarta parte del contenido del navegador
                - La propiedad is-one-quarter me permite generar un ancho relativo para la zona lateral izquierda, 
                    y el resto visualizaría la propia página (3/4 partes de la misma)
            */ }
            <div className="container">
                <div className="columns">
                    <div className="column is-one-quarter"> 
                        <Menu/>
                    </div>
                    <div className="column">
                        <p>Este es el contenido de la página.</p>
                    </div>
                </div>  
            </div>  
        </div>


    );
}
 
export default Layout;