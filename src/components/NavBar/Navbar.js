import React from 'react';

import './NavBar.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function NavBar(){
    return(
        <nav className='navBar'>
            <input type='checkbox' id='check' />
            <label for='check' className='checkBtn'>
                <MenuOpenIcon/>
            </label>
            <img className='navbar-logo' src='../image/Sanypple-logo.png' alt='Imagen del logo representativo a Sanypple technology'/>
            
            <ul className='navbar-list'>
                <li className='list-button active'> Home</li>
                <li className='list-button'> Productos</li>
                <li className='list-button'> Nosotros</li>
                <li className='list-button'> Contacto</li>
            </ul>
        </nav>
    )
}

