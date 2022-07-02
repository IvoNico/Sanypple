import { createContext, useState } from "react";


export const CartContext = createContext()

//                           Al colocarle "children" le indicamos que lo vamos a usar dentro de otro componente
const CartContextProvider = ({children}) =>{
    // aca va a ir todo lo que quiero usar
    
    const [cart, setCart] = useState([]) //array de objeto de lo que vamos a agregar al carrito

    const addItem = (item, quantity)  =>{
        const id = item.length + 1
        const newItem = {...item, id}
        setCart([...cart, newItem]) // Se realiza para que cada ves que agregue un producto al carrito me traiga todos y no se pisen y me traiga un objeto array nuevo

    }      //va a recibir la tarea que quiero que haga
    
    return(
        <CartContext.Provider value={{
        //indicamos todo lo que queremos que sea global
        cart,
        addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider