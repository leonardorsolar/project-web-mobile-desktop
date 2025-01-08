import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const handleClick = () => {
    alert('Você clicou no botão!');
  };

  return (
    <div id="app">
      <h1>Bem-vindo!</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default App
