import React from 'react';
import './NavBar.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    
    return(
        <nav className='navBar'>
            <input type='checkbox' id='check' />
            <label for='check' className='checkBtn'>
                <MenuOpenIcon/>
            </label>
            <img className='navbar-logo' src='../image/Banners-logo/Sanypple-logo.png' alt='Imagen del logo representativo a Sanypple technology'/>
            <ul className='navbar-list'>
                <NavLink to='/' className='list-button' activeClassName='active' >Home</NavLink>
                <ul className='list-buttonProduct'>
                    <li>productos</li>
                    <ul  className="listCategory">
                        <NavLink to='/category/Sony' className='categoryProduct'>Sony</NavLink>
                        <NavLink to='/category/Samsung' className='categoryProduct'>Samsung</NavLink>
                        <NavLink to='/category/Apple' className='categoryProduct'>Apple</NavLink>
                    </ul>
                </ul>
                
                <li className='list-button'> Nosotros</li>
                <li className='list-button'> Contacto</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
