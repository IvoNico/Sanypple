/* eslint-disable array-callback-return */
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { CartContext } from '../../Utils/CartContext/CartContext';
import { FormData } from "../FormData/FormaData";
import Modal from '../Modal/Modal'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import './Cart.css'


function Cart() {
    const { cart, clear, removeItem, totalPrice, decreaseProduct, increaseProduct } = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false)// utilizamos para abrir o cerra el modal
    const [orderId, setOrderId] = useState()
    const [buyerData, setBuyerData] = useState(
        {name: '', email: '', phone:' '})
    
    const handleInputChange = (event) =>{
        console.log(event.target.value)
        setBuyerData({
            ...buyerData,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        const order = {
            buyer: buyerData, 
            item: cart,
            total: totalPrice
        }
        //guardamos la informacion en Firebase
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order) 
            .then(({ id }) => setOrderId(id))
            .catch(err => console.log(`${err}: Error en procesar el pago`));
    }
    return (
        <section>
            {cart.length > 0 && ( //indicamos que si el carrito es mayor a cero unidades, nos devuelva los productos mapeados
            <div className="cart">
                <h1>Carrito de compras</h1>
                <table className="cart-titles">
                    <thead>
                        <tr className="cart-atributes">
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Precio unitario</th>
                            <th>Cantidad</th>
                            <th>Precio Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((products) => {
                            return (
                                    <tr key={products.id}  className="cart-products">
                                        <td className="cart-items">
                                            <img className="img-product" src={products.image} alt="" />
                                        </td>
                                        <td className="cart-items">
                                            <span>{products.name}</span>
                                        </td>
                                        <td className="cart-items" >
                                            <span>${products.price}</span>
                                        </td>
                                        <td className="cart-items">
                                        <button className='cartBtn' onClick={()=>increaseProduct(products)} >+</button>
                                            <span> {products.quantity} </span>
                                            <button className='cartBtn' onClick={()=>decreaseProduct(products)} >-</button>
                                        </td>
                                        <td className="cart-items">
                                            <span> ${products.price * products.quantity} </span>
                                        </td>
                                        <td className="cart-items">
                                            <button className='cartBtn' onClick={()=>removeItem(products)}> X </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className='checkout'>
                    <div className="checkoutOption">
                    <button onClick={clear} className="btnClear" >Limpiar carrito</button>
                    <Link className="btnContinueCart" to='/'>Continuar comprando</Link>
                    </div>
                    <div className="checkoutComplete">
                        <h3>Checkout</h3>
                        <p>Precio Total: ${totalPrice}</p>
                        <Button className='completeBuy' onClick={() => setOpenModal(true)}>Completar Compra</Button>
                    </div>
                </div>
            <Modal handleClose={() => setOpenModal(false)} open={openModal}>
                {orderId ? (
            <div className="orderNumber">
                <h3>Orden generada correctamente</h3>
                <span>Su codigo de compra es: {orderId}</span>
            </div>
                ) : (
                <FormData handleSubmit={handleSubmit} handleInput={handleInputChange}  />
                )}
            </Modal>
            </div>
            )}
            {cart.length === 0 && ( //indicamos que si no hay productos en el carrito nos devuelva una imagen y un link a seguir comprando
                <div className="emptyCart">
                    <h1>Carrito de compras vacio</h1>
                    <img className="imgEmptyCart" src="../image/Banners-logo/carrito-vacio.png" alt="Cart-vacio" />
                    <Link className="btnEmptyCart" to='/'>Comprar ahora</Link>
                </div>
            )}
        </section>
    );
}
export default Cart