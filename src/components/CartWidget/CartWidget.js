import React from 'react'
import '../CartWidget/CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CartWidget = () =>{
    return <button className='btnCart'>
                <ShoppingCartIcon/>
                <span>0</span>
            </button>
        
}

export default CartWidget