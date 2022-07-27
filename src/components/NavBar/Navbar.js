import React from 'react';
import './NavBar.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';



export const NavBar = () => {
    
    return(
        <nav className='navBar'>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className='checkBtn'>
                <MenuOpenIcon/>
            </label>
            <Link to='/'> <img className='navbar-logo' src='../image/Banners-logo/Sanypple.svg' alt='Imagen del logo representativo a Sanypple technology'/> </Link>
            <ul className='navbar-list'>
                <NavLink to='/' className='list-button' activeclassname='active' >Home</NavLink>
                <ul className='list-buttonProduct'>
                    <li className='buttonProducts'>productos</li>
                    <ul  className="listCategory">
                        <NavLink to='/category/Sony' className='categoryProduct'>Sony</NavLink>
                        <NavLink to='/category/Samsung' className='categoryProduct'>Samsung</NavLink>
                        <NavLink to='/category/Apple' className='categoryProduct'>Apple</NavLink>
                    </ul>
                </ul>
                <NavLink to='/Nosotros' className='list-button' activeclassname='active'> Nosotros</NavLink>
                
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
