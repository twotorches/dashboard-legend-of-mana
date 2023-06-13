import React from 'react';
import '../styles/menu.css';
import { Link } from 'react-router-dom'; // Importa Link de React Router

function Menu(){
    return(
        <div className='menu'>
            <ul className='menu-list'> 
                <li>
                <img src={require(`../images/lom-player-menu.png`)} alt="Botón"/>
                </li>
            </ul>
        </div>
    )
}

/*
function BotonMenu() {
  function redirigir() {
    // Aquí puedes agregar tu lógica para redirigir a otra página
    console.log('Redirigiendo a otra página...');
  };

  return (
    <Link to="/character"> 
      <img src={require(`../images/lom-player-menu.png`)} alt="Botón" onClick={redirigir} />
    <
*/


export default Menu;