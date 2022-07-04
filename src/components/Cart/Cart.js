/* eslint-disable array-callback-return */
import { useContext } from "react"
import { CartContext } from '../../Utils/CartContext/CartContext';
import './Cart.css'


function Cart() {

    const { cart, clear, removeItem } = useContext(CartContext);
    console.log(cart);
    return (
        <section>
            <h1>Carrito de compras</h1>
            <div className="cart">
                <table className="cart-titles">
                    <tr className="cart-atributes">
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>cantidad</th>
                        <th>Remove</th>
                    </tr>
                {cart.length > 0 && (
                    cart.map((products) => {
                        return (
                            <tr key={products.id} className="cart-products">
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
                                        {products.price}
                                    </h3>
                                </td>
                                <td className="cart-items">
                                    <span> {products.quantity} </span>
                                </td>
                                <td className="cart-items">
                                    <button onClick={()=>removeItem(products)}> X </button>
                                </td>
                            </tr>
                        );
                    })
                )}
                </table>
                <button onClick={clear}> Clear to Cart </button>
            </div>
        </section>
    );
}

export default Cart