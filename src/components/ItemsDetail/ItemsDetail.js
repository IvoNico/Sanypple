
import './ItemsDetail.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ItemsCount from '../ItemsCount/ItemsCount';
import { Link } from 'react-router-dom';
import {useState} from 'react'



export function ItemsDetail  ({image, image2, image3, name, features, price, banner, bannertitle, stock}) {
    const [quantity, setQuantity] = useState(0)  // indicamos que el primer estado del count va a ser cero 
    
    const onAdd = (quantityToAdd) => {  // guarda el estado del count
        setQuantity(quantityToAdd)
    }

    return  <>
        <article className='itemDetail' >
            <div className='itemsArrow'>
                <button  className="arrowLeft"> <ArrowBackIosNewIcon/></button>
                <button  className="arrowRight"> <ArrowForwardIosIcon/> </button>
            </div>
            <div className='imgDetail'>
                <img  src={image} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        
        <div className="sectionDetails">
            <h2>{name}</h2>
            <p> {features} </p>
            <h4> {price} </h4>
            {
                quantity <1? <ItemsCount stock={stock} initial={0} onAdd={onAdd}  /> // indicamos que se va a ejecutar ITEMS COUNT cuando la cantidad de productos seleccionados sea CERO 
                : <Link to='/cart' > Ir al carrito </Link> // y cuando se agregue al carrito solo se va a mostrar FINALIZAR LA COMPRA 
            }
            
        </div>
        </article>
        <div className='bannerDetail'>
            <h2> {bannertitle} </h2>
            <img src={banner} alt=''/>
        </div>
    </>
}

export default ItemsDetail