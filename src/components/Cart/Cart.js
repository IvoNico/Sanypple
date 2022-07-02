/* eslint-disable array-callback-return */
import { useContext } from "react"
import { CartContext } from '../../Utils/CartContext/CartContext';


const Cart = () =>{

    const {addItem} = useContext(CartContext)

    return(
        <container>
            {
                addItem.length > 0 && (
                    addItem.map((products)=>{
                        <div key={products.id}>
                            <h3>
                                {products.name}
                            </h3>
                            <h3>
                                {products.price}
                            </h3>
                        </div>
                    })
                )
            }
        </container>
    )
}

export default Cart