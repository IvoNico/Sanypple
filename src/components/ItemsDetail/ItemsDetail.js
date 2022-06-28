
import './ItemsDetail.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ItemsCount from '../ItemsCount/ItemsCount';
import { Link } from 'react-router-dom';


export function ItemsDetail  ({image, image2, image3, name, features, price, banner, bannertitle, stock}) {
    const onAdd = (quantityToAdd) => {
        console.log(`Agregaste ${quantityToAdd} productos al carrito.`)
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
            <ItemsCount stock={stock} initial={0} onAdd={onAdd}  />
            <Link to='/cart' > Finalizar Compra</Link>
        </div>
        </article>
        <div className='bannerDetail'>
            <h2> {bannertitle} </h2>
            <img src={banner} alt=''/>
        </div>
    </>
}

export default ItemsDetail