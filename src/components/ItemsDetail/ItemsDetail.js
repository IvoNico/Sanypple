import {useContext, useState, useEffect} from 'react';
import './ItemsDetail.css';
import ItemsCount from '../ItemsCount/ItemsCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Utils/CartContext/CartContext';
import LoadingItem from '../../Utils/Loading/LoadingItem'
import CarouselFadeExample from '../../Utils/Carrousel/CarouselItems'



export function ItemsDetail  ({image, image2, image3, name, features, price, banner, banner2,  stock, id}) {
    const [quantity, setQuantity] = useState(0)  // indicamos que el primer estado del count va a ser cero 
    const {addItem} = useContext(CartContext)
    const onAdd = (quantityToAdd) => {  // guarda el estado del count
        setQuantity(quantityToAdd)
        addItem({image,name,price, id}, quantityToAdd)
    }

    const [loading, SetLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            SetLoading(false)
        }, 2000)
    }, [])
    return  (
        loading ? <LoadingItem/> :
        <section>
                <article className='itemDetail'>
                    <div className='imgDetail'>
                    <CarouselFadeExample image={image} image2={image2} image3={image3}  />
                    </div>
                    <div className="sectionDetails" >
                        <h2>{name}</h2>
                        <p> {features} </p>
                        <h4> ${price} </h4>
                        {quantity <1? <ItemsCount stock={stock} initial={0} onAdd={onAdd}  /> // indicamos que se va a ejecutar ITEMS COUNT cuando la cantidad de productos seleccionados sea CERO 
                        : <Link to='/cart'  > Ir al carrito </Link> // y cuando se agregue al carrito solo se va a mostrar FINALIZAR LA COMPRA 
                        }
                    </div>
                </article>
                <div className='bannerDetail'>
                    <h2> El producto que buscas a un paso de conseguirlo </h2>
                    <img src={banner} alt=''/>
                    <img src={banner2} alt=''/>
                </div>
        </section>
        
    )
}
export default ItemsDetail