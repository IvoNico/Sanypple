/* eslint-disable array-callback-return */
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from '../../Utils/CartContext/CartContext';
import './Cart.css'


function Cart() {

    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);
    
    

    console.log(cart);
    return (
        <section>
            {cart.length > 0 && ( //indicamos que si el carrito es mayor a cero unidades, nos devuelva los productos mapeados
            <div className="cart">
                <h1>Carrito de compras</h1>
                <table className="cart-titles">
                    <tr className="cart-atributes">
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Precio unitario</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                        <th>Eliminar</th>
                    </tr>
                    {cart.map((products) => {
                        return (
                                <tr key={products.id}  className="cart-products">
                                    <td className="cart-items">
                                        <img className="img-product" src={products.image} alt="" />
                                    </td>
                                    <td className="cart-items">
                                        <h3>
                                            {products.name}
                                        </h3>
                                    </td>
                                    <td className="cart-items" >
                                        <h3>
                                            ${products.price}
                                        </h3>
                                    </td>
                                    <td className="cart-items">
                                        <span> {products.quantity} </span>
                                    </td>
                                    <td className="cart-items">
                                        <span> ${products.price * products.price} </span>
                                    </td>
                                    <td className="cart-items">
                                        <button onClick={()=>removeItem(products)}> X </button>
                                    </td>
                                </tr>
                        );
                        
                    })
                }
                </table>
                <p>Precio Total: ${totalPrice()}</p>
                <button onClick={clear} >Limpiar carrito</button>
                <Link className="btnContinueCart" to='/'>Continuar comprando</Link>
            </div>
                )}
            {cart.length === 0 && ( //indicamos que si no hay productos en el carrito nos devuelva una imagen y un link a seguir comprando
                <div className="emptyCart">
                    <h1>Carrito de compras vacio</h1>
                    <img src="../image/Banners-logo/carrito-vacio.png" alt="Cart-vacio" />
                    <Link className="btnEmptyCart" to='/'>Comprar ahora</Link>
                </div>
            )}
        </section>
    );
}

export default Cart