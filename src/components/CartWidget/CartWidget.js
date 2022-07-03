import React from 'react'
import '../CartWidget/CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react"
import { CartContext } from '../../Utils/CartContext/CartContext';



const CartWidget = () =>{
    const { amountOfCart } = useContext(CartContext);
    return <button className='btnCart'>
                <ShoppingCartIcon/>
                {amountOfCart()}
            </button>
        
}

export default CartWidget