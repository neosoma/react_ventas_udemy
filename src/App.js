import React from 'react';
import Header from './components/Header';  // Al ser archivo JavaScript, no es necesario indicar la extensión
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Header/> { /* Insertamos el nombre del componente como si fuese una etiqueta más de HTML */}
      <Menu titulo="Título del Menú desde App" subtitulo="Este es el subtítulo desde App" /> 
    </div>
  );
}

export default App;
