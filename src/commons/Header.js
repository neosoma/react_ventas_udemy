import React from 'react';

const Header = () => {
    return (  
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <a href="/" className="navbar-item"> {/* El href no lleva ninguna dirección, pero se necesita para eliminar un warning */}
                    <img src="logo.png" alt="Logo" /> {/* La propiedad alt (que muestra un texto si no se carga la imagen) evita otro warning */}
                </a>
            </div>
        </div>

    );
}
 
export default Header;