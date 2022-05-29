import React from 'react';
import './NavBar.css'
export default function NavBar(){
    return(
        <header>
            <nav className='navBar'>
                <div>
                <img className='navbar-logo' src='../image/Sanypple-logo.png' alt='Imagen del logo representativo a Sanypple technology'/>
                </div>
                <ul className='navbar-list'>
                    <li className='list-button active'> Home</li>
                    <li className='list-button'> Productos</li>
                    <li className='list-button'> Nosotros</li>
                    <li className='list-button'> Contacto</li>
                </ul>
            </nav>
        </header>
    )
}
