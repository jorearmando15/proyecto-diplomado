// src/App.js
import React from 'react';
import './App.css';
import Usuarios from './componentes/usuario';

function App() {
  return (
    <div className="App">
      <header className="bg-dark py-3 mb-4">
        <h1 className="text-white">Aplicación React </h1>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
  );
}

export default App;
