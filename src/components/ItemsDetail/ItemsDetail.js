
import './ItemsDetail.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export function ItemsDetail  ({image, image2, image3, name, features, price, banner, bannertitle}) {

    
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
            <button>Agregar al carrito</button>
        </div>
        </article>
        <div className='bannerDetail'>
            <h2> {bannertitle} </h2>
            <img src={banner} alt=''/>
        </div>
    </>
}

export default ItemsDetail