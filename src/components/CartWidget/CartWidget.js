import React from 'react'
import '../CartWidget/CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react"
import { CartContext } from '../../Utils/CartContext/CartContext';
import { Link } from "react-router-dom";





const CartWidget = () =>{
    const { amountOfCart, cart } = useContext(CartContext);
    return <>
            {cart.length > 0 && (
            <Link to='/cart' className='btnCart'>
                <ShoppingCartIcon/>
                {amountOfCart()}
            </Link>)}
    </> 
            
        
}

export default CartWidget