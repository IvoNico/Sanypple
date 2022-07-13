import { createContext, useState } from "react";



export const CartContext = createContext()
console.log(CartContext)

//                           Al colocarle "children" le indicamos que lo vamos a usar dentro de otro componente
const CartContextProvider = ({children}) =>{
    // aca va a ir todo lo que quiero usar
    const [cart, setCart] = useState([]) //array de objeto de lo que vamos a agregar al carrito
    const [productQuantity, setProductQuantity] = useState(cart.quantity)
    
    const totalPrice = cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
                        // (prev es un acumulador)    se le pasa la funcion y un numero inicial
    
    const clear = () => setCart([]) //indicamos que nos devuelva un carrito(array) vacio
    
    const decreaseProduct = (item) =>{
        const existProduct = cart.find((product) => product.id === item.id)
        if(existProduct.quantity === 1){
            setCart(cart.filter(cart => cart.id !== item.id));
        }else{
            setCart(
                cart.map((product)=> product.id === item.id ? {...existProduct, quantity: existProduct.quantity - 1}
                : product)
            )
        }
    }

    const increaseProduct = (item)=>{
        const existProduct = cart.find((product) => product.id === item.id);
        if(existProduct.quantity >= 1){
            setCart(
                cart.map((product)=> product.id === item.id ? {...existProduct, quantity: existProduct.quantity + 1}
                : product)
            )
        }
    }
    
    function removeItem(item) {
        setCart(cart.filter(cart => cart.id !== item.id));
    }
    
    const amountOfCart = () =>{ //le indicamos al carrito que nos muestre la cantidad de productos agregados
        return cart.reduce((prev, act) => prev + act.quantity, 0)
    }

    const IsInCart = (id) => cart.some(product => product.id === id) 

    const addItem = (item, quantity)  =>{
        if(IsInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity}
                : product
                
            }))
        }else{
            setCart([...cart,{...item, quantity}])
        }
    }      //va a recibir la tarea que quiero que haga
    console.log('carrito:', cart)


    return(
        <CartContext.Provider value={{
        //indicamos todo lo que queremos que sea global
        cart,
        addItem,
        clear,
        IsInCart,
        removeItem,
        amountOfCart,
        totalPrice,
        decreaseProduct,
        increaseProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider